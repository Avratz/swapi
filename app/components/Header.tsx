import React from 'react'
import { mergeClasses } from '~/utils'
import Logo from './Logo'

type HeaderProps = {
	headerExpanded: boolean
	className?: string
}

function Header({ headerExpanded, className = '' }: HeaderProps) {
	const headerClass = headerExpanded ? 'header header--expanded' : 'header'
	const classes = mergeClasses(
		`
	absolute -z-10 
	flex flex-col items-center justify-start
	pt-4 mb-2
	w-screen h-[calc(28vh-64px)]
	bg-primary-500 shadow`,
		className,
	)
	return (
		<header className={classes}>
			<Logo />
		</header>
	)
}

export default Header
