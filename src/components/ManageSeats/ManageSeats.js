import React, { Component } from "react";
import { observer, inject } from 'mobx-react'
import AddInvitee from "./AddInvitee";
<<<<<<< HEAD
import InviteesSideBar from "./invitees_side_bar";
=======
import { observer } from "mobx-react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



@observer
>>>>>>> d13d24cabb4ba45e11ac150fb44029ca5308be58

@inject('manage_seats')

@observer
class ManageSeats extends Component {
  constructor()
  {
    super()
  }

  render() {
    return (
      <div id="manage_seats">
        <AddInvitee />
        <div id="check">
          <br/>
          <h2>INVITEES</h2> <br/> <br/>
          here the invitees will be displayed, need to decide if it will be a menu or just a box.
        <InviteesSideBar />

        </div>

        <Fab id="addIcon" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </div>
    );
  }
}

export default ManageSeats;
