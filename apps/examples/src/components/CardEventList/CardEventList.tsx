import { Box, styled } from '@mui/material'
import { Children, ReactNode } from 'react'
import { useExpandablePanelContext } from '../ExpandablePanelContext'

type Props = {
	children: ReactNode
}

export function CardEventList({ children }: Props) {
	const { expanded } = useExpandablePanelContext()

	const childCount = Children.count(children)

	return (
		<List expand={expanded}>
			{expanded ? children : <Box>{`${childCount} Action${childCount > 1 ? 's' : ''}`}</Box>}
		</List>
	)
}

const List = styled(Box)<{ expand: boolean }>`
	display: flex;
	flex-direction: column;
	background: transparent;
`
