// ExpandablePanel.tsx
import { Box, BoxProps, styled } from '@mui/material'
import React, { useState } from 'react'
import { ExpandablePanelContext } from '../ExpandablePanelContext'

type Props = {
	children: React.ReactNode
	expandedWidth?: string
	expandedHeight?: string
	sx?: BoxProps['sx']
}

export function ExpandablePanel({
	expandedHeight = '1000px',
	expandedWidth = '250px',
	children,
	sx,
}: Props) {
	const [expanded, setExpanded] = useState(false)

	const handleExpandChange = () => {
		setExpanded((prev) => !prev)
	}

	return (
		<ExpandablePanelContext.Provider value={{ expanded }}>
			<Container
				sx={sx}
				expand={expanded}
				onMouseEnter={handleExpandChange}
				onMouseLeave={handleExpandChange}
				expandedHeight={expandedHeight}
				expandedWidth={expandedWidth}
			>
				{children}
			</Container>
		</ExpandablePanelContext.Provider>
	)
}

interface ContainerProps {
	expand: boolean
	expandedWidth: string
	expandedHeight: string
}

const Container = styled(Box)<ContainerProps>`
	background-color: thistle;
	font-size: 14px;
	padding: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	pointer-events: all;
	${({ expand, expandedHeight, expandedWidth }) =>
		expand
			? `
    transition: width 1.5s, height 1s;
    width: ${expandedWidth}; 
    height: ${expandedHeight};
    `
			: `
    width: 80px;
    height: 50px;
`}}
`
