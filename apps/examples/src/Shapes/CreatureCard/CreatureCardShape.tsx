import { RecordProps, Rectangle2d, ShapeUtil, T, TLBaseShape } from 'tldraw'
import { CreatureCardComponent } from '../../components/ShapeComponents/CreatureCardComponent'
import {
	CounterType,
	Counters,
	CustomShapeId,
	PermanentCardType,
	PermanentCardTypeMap,
} from '../../types'
import { createObjectSchema } from '../../utils/createObjectSchema'

export type ICreatureCardShape = TLBaseShape<
	CustomShapeId.Creature,
	{
		w: number
		h: number
		name: string
		power: number
		toughness: number
		isToken: boolean
		isLegendary: boolean
		superTypes: string[]
		creatureTypes: string[]
		cardType: PermanentCardTypeMap
		counters: Counters
		quantity: number
		fliped: boolean
	}
>

export class CreatureCardUtil extends ShapeUtil<ICreatureCardShape> {
	static override type = CustomShapeId.Creature as const
	static override props: RecordProps<ICreatureCardShape> = {
		w: T.number,
		h: T.number,
		name: T.string,
		cardType: createObjectSchema(PermanentCardType, T.boolean),
		counters: createObjectSchema(CounterType, T.number),
		isLegendary: T.boolean,
		isToken: T.boolean,
		power: T.number,
		toughness: T.number,
		superTypes: T.arrayOf(T.string),
		creatureTypes: T.arrayOf(T.string),
		quantity: T.number,
		fliped: T.boolean,
	}

	getGeometry(shape: ICreatureCardShape) {
		return new Rectangle2d({
			width: shape.props.w,
			height: shape.props.h,
			isFilled: true,
		})
	}

	override getDefaultProps(): ICreatureCardShape['props'] {
		const defaultCounters = Object.values(CounterType).reduce(
			(acc, key) => ({
				...acc,
				[key]: 0,
			}),
			{} as Record<CounterType, number>
		)

		return {
			w: 200,
			h: 280,
			name: 'My First Creature',
			cardType: {
				[PermanentCardType.Creature]: true,
				[PermanentCardType.Artifact]: false,
				[PermanentCardType.Battle]: false,
				[PermanentCardType.Enchantment]: false,
				[PermanentCardType.Land]: false,
				[PermanentCardType.Planeswalker]: false,
				[PermanentCardType.Tribal]: false,
			},
			isLegendary: false,
			isToken: false,
			power: 0,
			toughness: 0,
			superTypes: [],
			creatureTypes: [],
			counters: defaultCounters,
			quantity: 1,
			fliped: false,
		}
	}

	addCardType(shape: ICreatureCardShape, cardType: PermanentCardType) {
		shape.props.cardType[cardType] = true

		return shape.props.cardType
	}

	removeCardType(shape: ICreatureCardShape, cardType: PermanentCardType) {
		shape.props.cardType[cardType] = false

		return shape.props.cardType
	}

	getProps(shape: ICreatureCardShape): ICreatureCardShape['props'] {
		return {
			...shape.props,
		}
	}

	getCounters(shape: ICreatureCardShape) {
		return shape.props.counters
	}

	getCardTypes(shape: ICreatureCardShape) {
		return Object.entries(shape.props.cardType)
			.filter(([, value]) => value)
			.map(([key]) => key)
	}

	component(shape: ICreatureCardShape) {
		return <CreatureCardComponent shape={shape} />
	}

	// [5]
	indicator(shape: ICreatureCardShape) {
		return <rect width={shape.props.w} height={shape.props.h} />
	}
}
