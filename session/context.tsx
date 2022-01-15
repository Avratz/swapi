import React from 'react'
import { createContext } from '~/utils/createContext'
import type { ReactChildren } from '~/types'
import { AccountType } from './types'

const [useAccount, Provider] = createContext<{
	account?: AccountType
}>()

function AccountProvider({ children }: ReactChildren) {
	const [account, setAccount] = React.useState<undefined | AccountType>(() => {
		const account = window.localStorage.getItem('account')
		if (account) return JSON.parse(account)
		return undefined
	})

	React.useEffect(() => {
		const account = {
			id: '1',
			name: 'John Doe',
			locale: 'es',
			currency: 'USD',
			balance: 500,
			device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
		}
		setAccount(account)
		window.localStorage.setItem('account', JSON.stringify(account))
	}, [])

	const value = {
		account: React.useMemo(() => account, [account]),
	}

	return <Provider value={value}>{children}</Provider>
}

export default AccountProvider
export { useAccount }
