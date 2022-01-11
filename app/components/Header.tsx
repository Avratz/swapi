import React from 'react'
import { mergeClasses } from '~/utils'
import Logo from './Logo'

type HeaderProps = {
	headerExpanded: boolean
	className?: string
}

function Header({ headerExpanded, className = '' }: HeaderProps) {
	const headerClass = headerExpanded ? ' h-[calc(28vh-64px)]' : 'h-[calc(7vh)]'
	const classes = mergeClasses(
		`
		absolute -z-10 
		flex flex-col items-center justify-start
		pt-4 mb-2
		w-screen
		bg-primary-500 shadow`,
		headerClass,
		className,
	)
	return (
		<header className={classes}>
			<Logo />
		</header>
	)
}

export default Header
