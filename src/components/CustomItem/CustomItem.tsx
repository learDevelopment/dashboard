import React, { FC } from 'react'
import { CustomItemProps } from './CustomItem.types'
import ItemText from './ItemText'
import { StatusApi } from '../../api'
import { TableAs } from './ItemText/ItemText.type'
import cn from 'clsx'

const CustomItem: FC<CustomItemProps> = ({ data }) => {
	const columns: string[] = [
		'Customer Name',
		'Company',
		'Phone Number',
		'Email',
		'Country',
		'Status'
	]

	return (
		<>
			<div className='flex items-center justify-between w-[938px] px-4 pt-5 pb-6 overflow-hidden lg:w-full sm:px-9'>
				<table className='w-full border-collapse'>
					<thead className='relative h-[40px] w-full'>
						<tr className='w-full text-left'>
							{columns.map(el => (
								<ItemText
									key={el}
									title={el}
									as={TableAs.TH}
									className={cn({
										'pl-[26px]': el === 'Company',
										'pl-[38px]': el === 'Phone Number',
										'pl-3': el === 'Email',
										'pl-6': el === 'Status'
									})}
								/>
							))}
						</tr>
						<tr className='absolute bottom-0 w-screen border-b-[1px] border-solid border-silver -ml-9' />
					</thead>
					<tbody>
						{data?.map(el => (
							<tr
								className='w-full text-left border-b-[1px] border-solid border-silver'
								key={el.name}
							>
								<ItemText title={el.name} />
								<ItemText title={el.company} className='pl-[26px]' />
								<ItemText title={el.phone} className='pl-[38px]' />
								<ItemText title={el.email} className='pl-3' />
								<ItemText title={el.country} />
								<ItemText
									title={el.status}
									isButton
									isActive={el.status === StatusApi.ACTIVE}
									className='flex justify-center !text-right last:text-right 2xl:justify-start 2xl:pl-3'
								/>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{!data.length && (
				<p className='font-medium text-sm text-dark px-4 sm:px-9'>
					Table is empty
				</p>
			)}
		</>
	)
}

export default CustomItem
