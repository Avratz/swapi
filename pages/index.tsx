import type { NextPage } from 'next'
import React from 'react'
import Box from '~/app/components/Box'
import Button from '~/app/components/Button'
import CoinListItem from '~/app/components/CoinListItem'
import Heading from '~/app/components/Heading'
import List from '~/app/components/List'
import DefaultLayout from '~/app/layout/Default'
import { Wallets } from '~/types'

const Home: NextPage = () => {
	const wallets: Wallets = [
		{
			coin: {
				id: 'bitcoin',
				symbol: 'btc',
				name: 'Bitcoin',
				image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
				currentPrice: 41985,
			},
			balance: 0.5,
		},
		{
			coin: {
				id: 'ethereum',
				symbol: 'eth',
				name: 'Ethereum',
				image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
				currentPrice: 3102.02,
			},
			balance: 0.5,
		},
		{
			coin: {
				id: 'tether',
				symbol: 'usdt',
				name: 'Tether',
				image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
				currentPrice: 1,
			},
			balance: 0.5,
		},
		{
			coin: {
				id: 'binancecoin',
				symbol: 'bnb',
				name: 'Binance Coin',
				image:
					'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615',
				currentPrice: 450.4,
			},
			balance: 0.5,
		},
		{
			coin: {
				id: 'usd-coin',
				symbol: 'usdc',
				name: 'USD Coin',
				image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
				currentPrice: 1,
			},
			balance: 0.5,
		},
		{
			coin: {
				id: 'solana',
				symbol: 'sol',
				name: 'Solana',
				image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422',
				currentPrice: 135.91,
			},
			balance: 0.5,
		},
		{
			coin: {
				id: 'cardano',
				symbol: 'ada',
				name: 'Cardano',
				image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
				currentPrice: 1.15,
			},
			balance: 0.5,
		},
		{
			coin: {
				id: 'ripple',
				symbol: 'xrp',
				name: 'XRP',
				image:
					'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
				currentPrice: 0.741815,
			},
			balance: 0.5,
		},
	]
	return (
		<DefaultLayout headerExpanded>
			<Box className='swapi-box min-h-[25vh]'>
				<Box className='pb-8'>
					<Heading as='h6' size='text-lg'>
						Saldo ARS
					</Heading>
					<Heading as='h2' size='text-4xl'>
						$ 2000,00
					</Heading>
				</Box>

				<Button as='a' href='#' primary>
					Intercambiar monedas
				</Button>
			</Box>

			<Heading as='h3' className='section-title'>
				Monedas
			</Heading>

			<Box className='swapi-box h-[55vh] overflow-y-auto'>
				<List>
					{wallets.map((wallet) => (
						<CoinListItem wallet={wallet} key={wallet.coin.id} />
					))}
				</List>
			</Box>
		</DefaultLayout>
	)
}

export default Home
