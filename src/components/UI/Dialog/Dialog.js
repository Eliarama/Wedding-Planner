import React from 'react'
import { withRouter } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import CloseIcon from '@material-ui/icons/Close'
import classes from './Dialog.module.css'

const Dialog = props => {
	return (
		<div className={classes.Dialog}>
			<div className={classes.Box}>
				<div className={classes.Close}>
				<Fab onClick={props.history.goBack}>
					<CloseIcon />
				</Fab>
				</div>
				{props.children}
			</div>
		</div>
	)
}

export default withRouter(Dialog)
