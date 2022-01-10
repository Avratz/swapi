export type OnlyPrimaryButton = {
	primary?: boolean
	secondary?: never
	destructive?: never
}

export type OnlySecondaryButton = {
	secondary?: boolean
	primary?: never
	destructive?: never
}

export type OnlyDestructiveButton = {
	destructive?: boolean
	primary?: never
	secondary?: never
}
