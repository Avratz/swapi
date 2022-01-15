import { NextPageContext } from 'next'
import Box from '~/app/components/Box'

export default function Error({ statusCode }: { statusCode: number }) {
	return <Box>An error occurred {statusCode}</Box>
}

export async function getInitialProps({ res, err }: NextPageContext) {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404

	return { statusCode }
}
