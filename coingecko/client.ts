import type { ApiCoinsMarketParams, ApiCoinsMarketResponse, ApiCoinsSimpleParams } from './types'
import swapi from '~/api/api'
import useSWR from 'swr'
import { processSWRResponse } from '~/utils/api'

const coins = {
	baseUrl: 'coins/',
	useMarkets(params: ApiCoinsMarketParams) {
		const SWRResponse = useSWR<ApiCoinsMarketResponse[]>(
			[`${this.baseUrl}markets/`, { body: params }],
			swapi.get,
		)
		return processSWRResponse<ApiCoinsMarketResponse[]>(SWRResponse)
	},
}

const simple = {
	baseUrl: 'simple/',
	usePrice(params: ApiCoinsSimpleParams) {
		return useSWR([`${this.baseUrl}markets/`, { body: params }], swapi.get)
	},
}

const api = {
	coins,
	simple,
}

export default api
