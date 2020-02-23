import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Favorites from '../Favorites/Favorites'
import BudgetTracker from '../BudgetTracker/BudgetTracker'
import BookVendor from '../Vendors/BookVendor'
import VendorInfo from '../Vendors/VendorInfo'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import Register from '../Register/Register'
import GuestManagement from '../GuestManagement/GuestManagement'
import AddTable from '../GuestManagement/AddTable'
import TableManager from '../GuestManagement/TableManager'
import { inject, observer } from 'mobx-react'
import Vendors from '../Vendors/Vendors'

const guestRoutes = (
	<Switch>
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
		<Route exact path='/' component={Home} />
	</Switch>
)

const authRoutes = (
	<Switch>
		<Route path='/profile' component={Profile} />
		<Route path='/favorites' component={Favorites} />
		<Route path='/budget-tracker' component={BudgetTracker} />
		<Route path='/guest-management' component={GuestManagement} />
		<Route path='/login' component={Login} />
		<Route path='/logout' render={Logout} />
		<Route exact path='/vendors/:category' component={Vendors} />
		<Route exact path='/vendorInfo/:id' component={VendorInfo} />
		<Route path='/book/:category/:id' component={BookVendor} />
		<Route exact path='/addtable' component={AddTable} />
		<Route exact path='/addtotable/:manageTableId' component={TableManager} />
		<Route exact path='/' component={Home} />
		<Redirect from='/vendors' to='/vendors/Venue' />
	</Switch>
)

const Routes = inject('auth')(
	observer(props => (props.auth.loggedIn ? authRoutes : guestRoutes))
)

export default Routes
