import React, { createElement, FC } from 'react'
import { ItemTextProps, TableAs } from './ItemText.type'
import cn from 'clsx'

const ItemText: FC<ItemTextProps> = ({
	as = TableAs.TD,
	title,
	isButton,
	isActive,
	className
}) => {
	return createElement(
		as,
		{
			className: cn('font-medium text-sm text-dark', className, {
				'!text-silver-light pb-[12px]': as === TableAs.TH,
				'pb-5 pt-[19px]': as === TableAs.TD
			})
		},
		isButton ? (
			<div
				className={cn(
					'flex items-center justify-center rounded bg-red border-[1px] border-solid border-red w-20 h-[29px] text-red capitalize',
					{ '!border-green !text-green !bg-green': isActive }
				)}
			>
				{title}
			</div>
		) : (
			title
		)
	)
}

export default ItemText
