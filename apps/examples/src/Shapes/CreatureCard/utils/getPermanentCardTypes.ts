import { PermanentCardTypeMap } from '../../../types'

export function getPermanentCardTypes(cardType: PermanentCardTypeMap): string[] {
	return Object.entries(cardType)
		.filter(([, value]) => value)
		.map(([key]) => key)
}
