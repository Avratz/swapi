import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Heading from '../components/Heading'

function ErrorScreen({
	error,
	resetErrorBoundary,
}: {
	error: Error
	resetErrorBoundary: () => void
}) {
	return (
		<Box className='flex flex-col justify-center'>
			<Heading as='h3' className='mb-10'>
				{error.message}
			</Heading>

			<Button onClick={resetErrorBoundary} primary>
				Try again
			</Button>
		</Box>
	)
}

export default ErrorScreen
