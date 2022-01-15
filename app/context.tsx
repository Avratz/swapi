import React from 'react'
import { createContext } from '~/utils/createContext'

import type { ReactChildren, Wallet } from '~/types'
import type { ReducerActionWalletsType, ReducerActionWalletType } from './types'

const [useWallets, Provider] = createContext<{
	wallets: Wallet[]
	dispatch: React.Dispatch<ReducerActionWalletType | ReducerActionWalletsType>
}>()

function walletsReducer(
	state: Wallet[],
	action: ReducerActionWalletType | ReducerActionWalletsType,
) {
	switch (action.type) {
		case 'add':
			return [...state, action.payload]
		case 'update':
			return state.map((wallet) => {
				if (wallet.coin.id === action.payload.coin.id) {
					return action.payload
				}
				return wallet
			})
		case 'set':
			return action.payload
		case 'push':
			return [...state, ...action.payload]
		default:
			return state
	}
}

function WalletsProvider({ initialValue, children }: ReactChildren & { initialValue: Wallet[] }) {
	const [wallets, dispatch] = React.useReducer(walletsReducer, initialValue)

	const value = {
		wallets,
		dispatch,
	}
	return <Provider value={value}>{children}</Provider>
}

export default WalletsProvider
export { useWallets }
