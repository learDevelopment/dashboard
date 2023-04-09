import React, { FC, useState } from 'react'
import cn from 'clsx'
import { MenuIcon, SettingsIcon } from '../../assets'
import { routes } from '../../routes'
import MenuItem from './MenuItem'
import UserIcon from '../../assets/User.png'

const Menu: FC = () => {
	const [active, setActive] = useState<boolean>(false)
	return (
		<>
			<MenuIcon
				className='absolute z-[2] top-3 left-4 xl:hidden'
				onActive={() => setActive(!active)}
			/>
			<div
				className={cn(
					'absolute z-[1] transition duration-300 delay-150 ease-in-out -translate-x-[306px] flex flex-col min-w-[306px] w-[306px] justify-between box-border px-7 pb-[53px] pt-9 h-screen bg-white shadow-[0px_10px_60px_silver] xl:relative xl:translate-x-0',
					{
						'!translate-x-0 ': active
					}
				)}
			>
				<div className='flex flex-col'>
					<div className='flex items-center pb-[50px]'>
						<SettingsIcon />
						<h1 className='text-[26px] font-semibold text-black ml-[8.6px] mr-[5px]'>
							Dashboard
						</h1>
						<small className='text-light text-[10px] font-medium pt-3'>
							v.01
						</small>
					</div>
					<nav>
						{routes.map(el => (
							<MenuItem key={el.name} {...el} />
						))}
					</nav>
				</div>
				<div className='flex items-center'>
					<img
						src={UserIcon}
						alt='Evano'
						className='w-[42px] h-[42px] rounded-full mr-3'
					/>
					<div>
						<p className='text-black text-sm font-medium'>Evano</p>
						<p className='text-silver-dark text-xs font-normal'>
							Project Manager
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu
