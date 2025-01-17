// ExpandablePanelContext.tsx
import { createContext, useContext } from 'react'

export const ExpandablePanelContext = createContext<{ expanded: boolean }>({ expanded: false })

export const useExpandablePanelContext = () => {
	const context = useContext(ExpandablePanelContext)
	if (!context) {
		throw new Error(
			'useExpandablePanelContext must be used within an ExpandablePanelContext.Provider'
		)
	}
	return context
}
