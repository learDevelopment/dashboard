import React, { ChangeEvent, FC, useMemo, useState } from 'react'
import { CustomItem, Layout } from '../../components'
import { SearchIcon } from '../../assets'
import { apiCustomers } from '../../api'

const Home: FC = () => {
	const [search, setSearch] = useState<string>('')
	const data = useMemo(
		() =>
			apiCustomers.filter(fill =>
				Object.values(fill).some(fil =>
					fil.toLowerCase().includes(search.toLowerCase())
				)
			),
		[apiCustomers, search]
	)

	return (
		<Layout>
			<div className='px-4 xl:pl-[70px] xl:pr-[94px] sm:px-10'>
				<h2 className='flex items-center text-black font-medium text-2xl mb-[51px]'>
					Hello Evano <span className='-mt-2'>👋🏼</span>,
				</h2>
				<div className='flex flex-col rounded-[30px] pb-4 bg-white w-full h-max shadow-[0_10px_60px_silver] overflow-hidden'>
					<div className='flex flex-col w-full justify-between items-center pt-[30px] pb-[16px] px-4 overflow-hidden md:pl-[37px] md:pr-[50px] sm:flex-row'>
						<div className='flex flex-col w-full'>
							<h3 className='text-black font-semibold text-[22px] mb-2'>
								All Customers
							</h3>
							<p className='font-normal text-sm text-green-light'>
								Active Members
							</p>
						</div>
						<div className='relative mt-1 w-full sm:w-auto'>
							<SearchIcon className='absolute top-[7px] left-[6px]' />
							<input
								value={search}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setSearch(e.target.value)
								}
								type='text-[22px]'
								placeholder='Search'
								className='w-full h-[38px] rounded-[10px] bg-silver text-sm pl-9 py-2 box-border pr-2 tracking-[-0.01em] text-silver-light placeholder:text-xs sm:w-[216px]'
							/>
						</div>
					</div>
					<div className='overflow-x-auto'>
						<CustomItem data={data} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Home
