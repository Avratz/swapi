export type Coin = {
	name: string
	symbol: string
	id: string
	currentPrice: number
	image: string
}

export type Wallets = Wallet[]

export type Wallet = {
	coin: Coin
	balance: number
}
