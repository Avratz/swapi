import type { NextPage } from 'next'
import React from 'react'
import Box from '~/app/components/Box'
import Button from '~/app/components/Button'
import Heading from '~/app/components/Heading'
import DefaultLayout from '~/app/layout/Default'

const Home: NextPage = () => {
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

			<Box className='swapi-box min-h-[50vh] mt-6'>coins</Box>
		</DefaultLayout>
	)
}

export default Home
