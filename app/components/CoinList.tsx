import React from 'react'
import List from './List'
import CoinListItem from './CoinListItem'

import { useWallets } from '~/app/context'

function CoinList() {
	const { wallets, dispatch } = useWallets()
	return (
		<List>
			{wallets.map((wallet) => (
				<CoinListItem wallet={wallet} key={wallet.coin.id} />
			))}
		</List>
	)
}

export default CoinList
