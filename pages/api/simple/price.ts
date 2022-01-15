import type { NextApiRequest, NextApiResponse } from 'next'
import apiCoinGecko from '~/coingecko/server'

const getPrice = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') return res.status(400).end()
	apiCoinGecko.simple.price(req.body).then((data) => {
		console.log(data)
	})
}

export default getPrice