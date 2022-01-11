import React from 'react'
import { mergeClasses } from '~/utils'
import {
	ReactChildren,
	OnlyDestructiveButton,
	OnlyPrimaryButton,
	OnlySecondaryButton,
} from '~/types'

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = ReactChildren & {
	as?: E
	className?: string
} & (OnlyPrimaryButton | OnlySecondaryButton | OnlyDestructiveButton)

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = 'button'

function Button<E extends React.ElementType = typeof defaultElement>({
	children,
	as,
	primary = false,
	secondary = false,
	destructive = false,
	className = '',
	...otherProps
}: ButtonProps<E>) {
	const TagName = as || defaultElement
	const baseBtnClass = `
		block 
		min-w-[250px] h-[44px] 
		rounded-[32px] px-[15px] py-[10px] 
		text-white text-center font-bold
		shadow-md 
		hover:bg-primary-600
		active:shadow-none active:bg-primary-700 transition-shadow 
	`
	const buttonClass = mergeClasses(
		baseBtnClass,
		primary
			? 'bg-primary-500'
			: secondary
			? 'bg-primary-100 text-primary-500'
			: destructive
			? 'bg-red-500'
			: '',
		className,
	)
	return (
		<TagName className={buttonClass} {...otherProps}>
			{children}
		</TagName>
	)
}

export default Button
