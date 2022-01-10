import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

type DefaultLayoutProps = {
	children: React.ReactNode
	headerExpanded?: boolean
}

function DefaultLayout({ children, headerExpanded = false }: DefaultLayoutProps) {
	return (
		<React.Fragment>
			<Header headerExpanded={headerExpanded} />
			<Main headerExpanded={headerExpanded}>{children}</Main>
		</React.Fragment>
	)
}

export default DefaultLayout
