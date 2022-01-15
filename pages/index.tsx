import React from 'react'
import { GetServerSideProps } from 'next'
import apiCoinGecko from '~/coingecko/server'
import DefaultLayout from '~/app/layout/Default'

import type { Wallet } from '~/types'
import type { ApiCoinsMarketResponse } from '~/coingecko/types'
import HomeScreen from '~/app/screens/Home'
import WalletsProvider from '~/app/context'

export default function Home({ wallets }: { wallets: Wallet[] }) {
	return (
		<DefaultLayout headerExpanded>
			<WalletsProvider initialValue={wallets}>
				<HomeScreen />
			</WalletsProvider>
		</DefaultLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const per_page = 50
		const vs_currency = 'usd'
		const res = await apiCoinGecko.coins.getMarkets({ vs_currency, per_page })
		const data: ApiCoinsMarketResponse[] = await res.json()

		const wallets = data.map(function (coin) {
			const wallet: Wallet = {
				coin: {
					...coin,
					currentPrice: coin.current_price,
				},
				balance: Math.round(Math.random() * 100) / 100,
				get total() {
					return Number(parseFloat(String(this.balance * this.coin.currentPrice)).toFixed(8))
				},
			}
			return wallet
		})
		return { props: { wallets } }
	} catch (error: any) {
		return { props: { statusCode: error?.status || 404 } }
	}
}
