import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import AddGuestForm from "./AddGuestForm";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Table from "./Table";
import './guest-management.css'


@inject('guestManagement', 'wedding', 'auth')
@observer
class GuestManagement extends Component {
	async componentDidMount() {
		if (!this.props.wedding.weddingData.id) {
			await this.props.wedding.getWeddingDetails(this.props.auth.id)
		}
		this.props.guestManagement.getGuests(this.props.auth.id)
		this.props.guestManagement.getTables(this.props.auth.id)
	}

	render() {
		return (
			<div id='manage_seats'>
				<AddGuestForm />
				<div className="tables">
					{this.props.guestManagement.tables.map(t => (
						<Table key={t.id} t={t} />
					))}
				</div>

				<Fab
					id='addIcon'
					color='primary'
					aria-label='add'
					component={Link}
					to='/addtable'>
					<AddIcon />
				</Fab>
			</div>
		)
	}

}

export default GuestManagement
