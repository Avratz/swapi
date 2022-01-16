import { ApiCoinsMarketParams, ApiCoinsSimpleParams } from './types'
import coinGecko from './api'

const coins = {
	baseUrl: 'coins/',
	getMarkets(params: ApiCoinsMarketParams) {
		return coinGecko.get(`${this.baseUrl}markets/`, { body: params })
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
