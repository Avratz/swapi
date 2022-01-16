import { ApiCoinsMarketParams, ApiCoinsMarketResponse, ApiCoinsSimpleParams } from './types'
import coinGecko from './api'
import { Coin, Wallet } from '~/types'

const coins = {
	baseUrl: 'coins/',
	async getMarkets(params: ApiCoinsMarketParams) {
		const data = await coinGecko.get<typeof params, ApiCoinsMarketResponse[]>(
			`${this.baseUrl}markets/`,
			{
				body: params,
			},
		)
		const coins = data.map((c) => {
			const coin: Coin = {
				...c,
				currentPrice: c.current_price,
			}
			return coin
		})

		return coins
	},
}

const simple = {
	baseUrl: 'simple/',
	price(params: ApiCoinsSimpleParams) {
		return coinGecko.get(`${this.baseUrl}price/`, { body: params })
	},
}

const api = {
	simple,
	coins,
}
export default api
