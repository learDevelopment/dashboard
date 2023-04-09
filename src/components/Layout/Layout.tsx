import React, { FC } from 'react'
import { LayoutTypesProps } from './Layout.types'
import Menu from '../Menu'

const Layout: FC<LayoutTypesProps> = ({ children }) => {
	return (
		<main className='flex relative w-screen h-screen overflow-hidden'>
			<Menu />
			<div className='bg-silver max-w-full w-full h-full py-11 overflow-y-auto'>
				{children}
			</div>
		</main>
	)
}

export default Layout
