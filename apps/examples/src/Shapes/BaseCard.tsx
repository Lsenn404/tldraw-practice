import { BaseBoxShapeUtil, HTMLContainer, RecordProps, T, TLBaseShape } from 'tldraw'
import { CardType, CardTypeMap, CustomShapeId } from '../types'

type IBaseCardShape = TLBaseShape<
	'base-card-shape',
	{
		w: number
		h: number
		cardType: CardTypeMap
	}
>

export class BaseCardUtil extends BaseBoxShapeUtil<IBaseCardShape> {
	static override type = CustomShapeId.BaseCard as const
	static override props: RecordProps<IBaseCardShape> = {
		w: T.number,
		h: T.number,
		cardType: T.object<CardTypeMap>(
			Object.values(CardType).reduce(
				(acc, key) => ({
					...acc,
					[key]: T.boolean,
				}),
				{} as Record<CardType, T.Validator<boolean>>
			)
		),
	}

	getDefaultProps(): IBaseCardShape['props'] {
		return {
			w: 230,
			h: 230,
			cardType: {
				[CardType.Artifact]: false,
				[CardType.Battle]: false,
				[CardType.Creature]: false,
				[CardType.Enchantment]: false,
				[CardType.Instant]: false,
				[CardType.Land]: false,
				[CardType.Planeswalker]: false,
				[CardType.Sorcery]: false,
				[CardType.Tribal]: false,
			},
		}
	}

	// [1]
	component(shape: IBaseCardShape) {
		return (
			<HTMLContainer
				style={{
					padding: 16,
					height: shape.props.h,
					width: shape.props.w,
					// [a] This is where we allow pointer events on our shape
					pointerEvents: 'all',
					backgroundColor: '#efefef',
					overflow: 'hidden',
				}}
			>
				{/* Card Types */}
				<div></div>

				{/* name */}
				<div></div>

				{/* mana cost */}
				<div></div>
			</HTMLContainer>
		)
	}

	// [5]
	indicator(shape: IBaseCardShape) {
		return <rect width={shape.props.w} height={shape.props.h} />
	}
}

/* 
This is a custom shape, for a more in-depth look at how to create a custom shape,
see our custom shape example.

[1]
This is where we describe how our shape will render

	[a] We need to set pointer-events to all so that we can interact with our shape. This CSS property is
	set to "none" off by default. We need to manually opt-in to accepting pointer events by setting it to
	'all' or 'auto'. 

	[b] We need to stop event propagation so that the editor doesn't select the shape
		when we click on the checkbox. The 'canvas container' forwards events that it receives
		on to the editor, so stopping propagation here prevents the event from reaching the canvas.
	
	[c] If the shape is not checked, we stop event propagation so that the editor doesn't
		select the shape when we click on the input. If the shape is checked then we allow that event to
		propagate to the canvas and then get sent to the editor, triggering clicks or drags as usual.

*/
