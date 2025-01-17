import { ButtonProps, Button as MuiButton, styled } from '@mui/material'

export function Button(props: ButtonProps) {
	return <StyledButton {...props} />
}

const StyledButton = styled(MuiButton)`
	background-color: #282ca1;
	font-size: 16px;
	padding: 8px;
	width: 100%;
	min-width: 80px;
	min-height: 32px;
	height: 32px;
	border-radius: 32px;
	cursor: pointer;
	font-family: 'proxima-nova', sans-serif;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`
