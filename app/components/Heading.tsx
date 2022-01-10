import React from 'react'
import { Headings, ReactChildren, TextSize } from '~/types'
import { mergeClasses } from '~/utils'

type HeadingProps = {
	as?: Headings
	size?: TextSize
	className?: string
} & ReactChildren

function Heading({
	as = 'h1',
	size,
	className = '',
	children,
	...otherProps
}: HeadingProps & React.ComponentPropsWithoutRef<Headings>) {
	const TagName = as
	const fontSize = size || 'text-base'

	const classes = mergeClasses(getHeadingStyle(fontSize, as), fontSize, className)

	return (
		<TagName className={classes} {...otherProps}>
			{children}
		</TagName>
	)
}

export default Heading

/**
 * Returns styles based on the size and type of heading.
 */
function getHeadingStyle(size: TextSize, as: Headings) {
	const headingStyle: { [key in Headings]: string } = {
		h1: size !== undefined ? 'font-regular' : 'text-2xl font-regular',
		h2: size !== undefined ? 'font-bold' : 'text-xl font-bold',
		h3: size !== undefined ? 'font-bold' : 'text-lg font-bold',
		h4: size !== undefined ? 'font-bold' : 'text-md font-bold',
		h5: size !== undefined ? 'font-regular' : 'text-sm font-regular',
		h6: size !== undefined ? 'font-regular' : 'text-xs font-regular',
	}
	return headingStyle[as]
}
