import React from 'react'
import { mergeClasses } from '~/utils'

function Box({ children, className = '', ...otherProps }: React.ComponentPropsWithoutRef<'div'>) {
	const boxClass = mergeClasses(`mx-3`, className)

	return (
		<div className={boxClass} {...otherProps}>
			{children}
		</div>
	)
}

export default Box
