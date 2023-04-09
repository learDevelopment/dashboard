export type ItemTextProps = {
	as?: TableAs
	title: string
	isButton?: boolean
	isActive?: boolean
	className?: string
}

export enum TableAs {
	TD = 'td',
	TH = 'th'
}
