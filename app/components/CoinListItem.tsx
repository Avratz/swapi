import React from 'react'
import Box from './Box'
import Heading from './Heading'
import Image from './Image'

import type { Wallet } from '~/types'

type CoinListItemType = {
	wallet: Wallet
	showPrice?: boolean
}

function CoinListItem({ wallet, showPrice = true }: CoinListItemType) {
	return (
		<li className='flex justify-between py-2'>
			<Image
				className='w-[44px] h-[44px] rounded-full flex justify-center items-center'
				src={wallet.coin.image}
				alt=''
				width={33}
				height={33}
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
				<Box className='ml-auto flex flex-col justify-center'>
					<Heading as='h4' className='text-right text-primary-500'>
						USD {wallet.total}
					</Heading>
					{wallet.balance !== 0 ? (
						<Heading as='h6' className='text-right'>
							{wallet.balance}
						</Heading>
					) : null}
				</Box>
			) : null}
		</li>
	)
}

export default CoinListItem
