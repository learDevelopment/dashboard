import { ReactNode } from 'react'
import {
	CustomersIcon,
	DashboardIcon,
	HelpIcon,
	IncomeIcon,
	ProductIcon,
	PromoteIcon
} from './assets'

export type TypeRoute = {
	name: string
	icon?: ReactNode
}

export const routes: TypeRoute[] = [
	{
		icon: <DashboardIcon />,
		name: 'Dashboard'
	},
	{
		icon: <ProductIcon />,
		name: 'Product'
	},
	{
		icon: <CustomersIcon />,
		name: 'Customers'
	},
	{
		icon: <IncomeIcon />,
		name: 'Income'
	},
	{
		icon: <PromoteIcon />,
		name: 'Promote'
	},
	{
		icon: <HelpIcon />,
		name: 'Help'
	}
]
