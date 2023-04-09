import React, { FC } from 'react'
import cn from 'clsx'
import ArrowIcon from '../../../assets/ArrowIcon'
import { TypeRoute } from '../../../routes'

const MenuItem: FC<TypeRoute> = ({ name, icon }) => {
	return (
		<li
			className={cn(
				'flex items-center justify-between p-[11px_8px_11px_11px] rounded-lg mb-[19px]',
				{
					'bg-purple': name === 'Customers'
				}
			)}
		>
			<div className='flex items-center'>
				{icon}
				<p
					className={cn('font-medium text-sm text-silver ml-[13px] pt-0.5', {
						'text-white': name === 'Customers'
					})}
				>
					{name}
				</p>
			</div>
			<ArrowIcon active={name === 'Customers'} />
		</li>
	)
}

export default MenuItem
