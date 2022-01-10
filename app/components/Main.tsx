import React from 'react'
import { ReactChildren } from '~/types'

type MainProps = {
	headerExpanded: boolean
} & ReactChildren

function Main({ children, headerExpanded }: MainProps) {
	const mainClass = headerExpanded ? 'pt-16' : 'pt-2'
	return <main className={mainClass}>{children}</main>
}

export default Main
