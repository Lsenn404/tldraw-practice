import { T } from 'tldraw'

export function createObjectSchema<TEnum extends string, TValue>(
	enumObject: Record<string, TEnum>,
	valueValidator: T.Validator<TValue>
): T.ObjectValidator<Record<TEnum, TValue>> {
	return T.object(
		Object.keys(enumObject).reduce<Record<TEnum, T.Validator<TValue>>>(
			(acc, key) => ({
				...acc,
				[key as TEnum]: valueValidator,
			}),
			{} as Record<TEnum, T.Validator<TValue>>
		)
	) as unknown as T.ObjectValidator<Record<TEnum, TValue>>
}
