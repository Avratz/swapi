export type ApiCoinsMarketParams = {
	vs_currency: string
	ids?: string
	category?: string
	order?: string
	per_page?: number
	page?: number
	sparkline?: boolean
	price_change_percentage?: string
}

export type ApiCoinsSimpleParams = {
	ids: string
	vs_currency: string
}

export type ApiCoinsMarketResponse = {
	id: string
	symbol: string
	name: string
	image: string
	current_price: number
	market_cap: number
	market_cap_rank: number
	fully_diluted_valuation: number
	total_volume: number
	high_24h: number
	low_24h: number
	price_change_24h: number
	price_change_percentage_24h: number
	market_cap_change_24h: number
	market_cap_change_percentage_24h: number
	circulating_supply: number
	total_supply: number
	max_supply: number
	ath: number
	ath_change_percentage: number
	ath_date: string
	atl: number
	atl_change_percentage: number
	atl_date: string
	roi: {
		times: number
		currency: string
		percentage: number
	}
	last_updated: string
}
