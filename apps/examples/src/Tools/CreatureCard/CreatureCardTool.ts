import { StateNode } from 'tldraw'
import { CreatureCardUtil } from '../../Shapes/CreatureCard/CreatureCardShape'
import { CustomShapeId, CustomToolId } from '../../types'

const OFFSET = 12

export class CreatureCardTool extends StateNode {
	static override id = CustomToolId.Creature

	override onEnter() {
		this.editor.setCursor({ type: 'cross', rotation: 0 })
	}

	override onPointerDown() {
		const { currentPagePoint } = this.editor.inputs
		const creatureCardUtil = new CreatureCardUtil(this.editor)
		this.editor.createShape({
			type: CustomShapeId.Creature,
			x: currentPagePoint.x - OFFSET,
			y: currentPagePoint.y - OFFSET,
			props: creatureCardUtil.getDefaultProps(),
		})
	}
}
