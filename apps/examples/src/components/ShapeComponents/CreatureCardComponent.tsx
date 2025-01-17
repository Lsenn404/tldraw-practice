import { Box, styled, Typography } from '@mui/material'
import { HTMLContainer } from 'tldraw'
import { ICreatureCardShape } from '../../Shapes/CreatureCard/CreatureCardShape'
import { getPermanentCardTypes } from '../../Shapes/CreatureCard/utils/getPermanentCardTypes'

export function CreatureCardComponent({ shape }: { shape: ICreatureCardShape }) {
	const { fliped } = shape.props

	return (
		<HTMLContainer
			style={{
				height: shape.props.h,
				width: shape.props.w,
				pointerEvents: 'all',
			}}
		>
			{fliped ? <CardBackside shape={shape} /> : <CardFrontside shape={shape} />}
		</HTMLContainer>
	)
}

function CardFrontside({ shape }: { shape: ICreatureCardShape }) {
	const { creatureTypes, cardType } = shape.props
	const cardTypes = getPermanentCardTypes(cardType)
	return (
		<CardWrapper>
			<LineItem>
				<Typography variant="body1">{shape.props.name}</Typography>
			</LineItem>
			{/* Card Types */}
			<LineItem>
				<Typography variant="body2">{cardTypes.join(', ')}</Typography>
			</LineItem>
			{/* Super Types */}
			<LineItem>2</LineItem>
			{/* Creature Types */}
			<LineItem>
				3
				{creatureTypes.map((type, index) => (
					<div key={index + type}>{type}</div>
				))}
			</LineItem>
			{/* name */}
			<LineItem>4</LineItem>
			{/* mana cost */}
			<LineItem>5</LineItem>
			{/* Power and Toughness */}
			<LineItem>6</LineItem>
		</CardWrapper>
	)
}

function CardBackside({ shape }: { shape: ICreatureCardShape }) {
	return (
		<CardWrapper backgroundColor="black" borderColor="white">
			<LineItem>Backside</LineItem>
		</CardWrapper>
	)
}

interface CardWrapperProps {
	color?: string
	backgroundColor?: string
	borderColor?: string
}

const CardWrapper = styled(Box)<CardWrapperProps>`
	padding: 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	color: ${({ color }) => color || 'white'};
	background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
	border: 1px solid ${({ borderColor }) => borderColor || 'cyan'};
`

interface LineItemProps {
	color?: string
	backgroundColor?: string
	borderColor?: string
	height?: string
}
const LineItem = styled(Box)<LineItemProps>`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: ${({ height }) => height || '40px'};
	color: ${({ color }) => color || 'white'};
	background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
	border: 1px solid ${({ borderColor }) => borderColor || 'cyan'};
`
