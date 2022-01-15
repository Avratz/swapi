import React from 'react'

export function createContext<T extends {} | null>() {
	const context = React.createContext<T | undefined>(undefined)
	const useContext = () => {
		const c = React.useContext(context)
		if (c === undefined) {
			throw new Error('Context is not defined')
		}
		return c
	}

	return [useContext, context.Provider] as const
}
