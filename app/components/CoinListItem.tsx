import React from 'react'
import Box from './Box'
import Heading from './Heading'
import Image from './Image'

import { Wallet } from '~/types'

type CoinListItemType = {
	wallet: Wallet
	showPrice?: boolean
}

function CoinListItem({ wallet, showPrice = true }: CoinListItemType) {
	return (
		<li className='flex justify-between py-2'>
			<Image
				className='bg-primary-100 w-[44px] h-[44px] rounded-full'
				src={wallet.coin.image}
				width={44}
				height={44}
				layout='fixed'
			/>
			<Box className='mr-auto'>
				<Heading as='h4' className='text-left'>
					{wallet.coin.name}
				</Heading>
				<Heading as='h6' className='text-left'>
					{wallet.coin.symbol}
				</Heading>
			</Box>
			{showPrice ? (
				<Box className='ml-auto'>
					<Heading as='h4' className='text-right text-primary-500'>
						{wallet.balance * wallet.coin.currentPrice}
					</Heading>
					<Heading as='h6' className='text-right'>
						{wallet.balance}
					</Heading>
				</Box>
			) : null}
		</li>
	)
}

export default CoinListItem
