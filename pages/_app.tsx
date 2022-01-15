import '../styles/globals.css'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Error from './_error'

const AccountProvider = dynamic(() => import('~/session/context'), { ssr: false })

function SwapiApp({ Component, pageProps }: AppProps) {
	if (pageProps.error) {
		return <Error statusCode={pageProps.error.statusCode} />
	}
	return (
		<AccountProvider>
			<Component {...pageProps} />
		</AccountProvider>
	)
}

export default SwapiApp
