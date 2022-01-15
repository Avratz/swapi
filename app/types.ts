import { Wallet } from '~/types'

export type ReducerActionWalletType = {
	type: 'add' | 'update'
	payload: Wallet
}

export type ReducerActionWalletsType = {
	type: 'set' | 'push'
	payload: Wallet[]
}
