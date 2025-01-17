export enum CardType {
	Artifact = 'Artifact',
	Creature = 'Creature',
	Enchantment = 'Enchantment',
	Instant = 'Instant',
	Land = 'Land',
	Planeswalker = 'Planeswalker',
	Sorcery = 'Sorcery',
	Tribal = 'Tribal',
	Battle = 'Battle',
}

export enum PermanentCardType {
	Artifact = 'Artifact',
	Creature = 'Creature',
	Enchantment = 'Enchantment',
	Land = 'Land',
	Planeswalker = 'Planeswalker',
	Battle = 'Battle',
	Tribal = 'Tribal',
}

export type CardTypeMap = Record<CardType, boolean>

export type PermanentCardTypeMap = Record<PermanentCardType, boolean>

export type CreatureProps = {
	power: number
	toughness: number
}

export enum CustomShapeId {
	BaseCard = 'base-card-shape',
	Creature = 'creature-card-shape',
}

export enum CustomToolId {
	Creature = 'creature-tool',
	BaseCard = 'base-card',
}

export type Counters = Record<CounterType, number>

export enum CounterType {
	PlusOne = 'PlusOne',
	MinusOne = 'MinusOne',
	Stun = 'Stun',
	Time = 'Time',
	Reach = 'Reach',
	Haste = 'Haste',
	Flying = 'Flying',
	Trample = 'Trample',
	Lifelink = 'Lifelink',
	Hexproof = 'Hexproof',
	Vigilance = 'Vigilance',
	Deathtouch = 'Deathtouch',
	FirstStrike = 'FirstStrike',
	DoubleStrike = 'DoubleStrike',
	Indestructible = 'Indestructible',
}

export enum PlayerCounters {
	Energy = 'Energy',
	Poison = 'Poison',
	Experience = 'Experience',
}
