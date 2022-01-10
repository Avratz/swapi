import React from 'react'
import { mergeClasses } from '~/utils'
import { ReactChildren } from '~/types'

function Box({
	children,
	className = '',
	...otherProps
}: ReactChildren & React.ComponentPropsWithoutRef<'div'>) {
	const boxClass = mergeClasses(`mx-4`, className)

	return (
		<div className={boxClass} {...otherProps}>
			{children}
		</div>
	)
}

export default Box
