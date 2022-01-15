import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import reporting from '~/reporting'
import Box from '../components/Box'
import Button from '../components/Button'
import CoinList from '../components/CoinList'
import Heading from '../components/Heading'
import ErrorScreen from './Error'

function HomeScreen() {
	return (
		<React.Fragment>
			<Box className='swapi-box min-h-[25vh]'>
				<Box className='pb-8'>
					<Heading as='h6' size='text-lg'>
						Saldo ARS
					</Heading>
					<Heading as='h2' size='text-4xl'>
						$ 2000,00
					</Heading>
				</Box>

				<Button as='a' href='#hols' primary>
					Intercambiar monedas
				</Button>
			</Box>

			<Heading as='h3' className='section-title'>
				Monedas
			</Heading>

			<Box className='swapi-box h-[55vh] overflow-y-auto'>
				<ErrorBoundary
					FallbackComponent={ErrorScreen}
					onError={(error: Error, info: { componentStack: string }) => reporting(error.message)}
				>
					<CoinList />
				</ErrorBoundary>
			</Box>
		</React.Fragment>
	)
}

export default HomeScreen
