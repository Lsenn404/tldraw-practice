import { TLComponents, Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { CustomGrid } from '../../CanvasUI/CustomGrid'
import { CreatureCardUtil } from '../../Shapes/CreatureCard/CreatureCardShape'
import { CreatureCardTool } from '../../Tools/CreatureCard/CreatureCardTool'
import { CustomShapeId, CustomToolId } from '../../types'

const customTools = [CreatureCardTool]
const customShapes = [CreatureCardUtil]

const components: TLComponents = {
	Grid: CustomGrid,
}

export default function CustomToolExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw
				components={components}
				shapeUtils={customShapes}
				tools={customTools}
				initialState={CustomToolId.Creature} // Ensure this matches the tool ID
				onMount={(editor) => {
					editor.createShape({
						type: CustomShapeId.Creature,
					})
					editor.updateInstanceState({ isGridMode: true })
					editor.setCurrentTool(CustomToolId.Creature)
				}}
			/>
		</div>
	)
}

/* 
Introduction:

Tools are nodes in tldraw's state machine. They are responsible for handling user input. 
You can create custom tools by extending the `StateNode` class and overriding its methods.
In this example we make a very simple sticker tool that adds a heart emoji to the canvas 
when you click. 

[1]
We extend the `StateNode` class to create a new tool called `StickerTool`. We set its id
to "sticker". We are not implementing any child states in this example, so we don't need
to set an initial state or define any children states. To see an example of a custom tool
with child states, check out the screenshot tool or minimal examples.

	[a] The onEnter method is called when the tool is activated. We use it to set the cursor
		to a crosshair.
	
	[b] The onPointerDown method is called when the user clicks on the canvas. We use it to
		create a new shape at the click location. We can get the click location from the
		editor's inputs.

[2]
We pass our custom tool to the Tldraw component using the `tools` prop. We also set the
initial state to our custom tool. We hide the ui and add some helpful text to the canvas 
using the `onMount` prop. This is not necessary for the tool to work but it helps make the 
example more visually clear.
*/
