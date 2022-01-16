import type { NextApiRequest, NextApiResponse } from 'next'
import apiCoinGecko from '~/coingecko/server'
import { ApiCoinsMarketParams } from '~/coingecko/types'

interface GetRequest extends NextApiRequest {
	query: ApiCoinsMarketParams & NextApiRequest['query']
}

const getMarkets = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') return res.status(400).end()
	const { query } = req as GetRequest

	apiCoinGecko.coins.getMarkets(query).then((data) => {
		return res.status(200).json(data)
	})
}

export default getMarkets
