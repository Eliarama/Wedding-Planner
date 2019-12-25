import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {toast as popup} from 'react-toastify'
import { inject, observer } from "mobx-react";
import Autocomplete from 'react-google-autocomplete';
import "./register.css";

// import DateFnsUtils from "@date-io/date-fns";
// import Grid from "@material-ui/core/Grid";
// import "date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker
// } from "@material-ui/pickers";

@inject('user')
@observer
class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fPassword: "",
      vPassword: "",
      gName: "",
      bName: "",
      weddingDate: "2020-01-01",
      weddingBudget: 0,
      estInvitees: 0,
      weddingArea: "",
    };
  }

  handleInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  invalidInput = user => Object.keys(user).some(i => !user[i])

  handleError = input => {
		if (this.invalidInput(input)) {
			throw new Error('All fields are required')
		}
	}

  userRegister = async () => {
    try{
      this.handleError(this.state)
      let register = await this.props.user.userRegister(this.state)
     popup.success(register)
    }
    catch(err){
      popup.error(err.message)
    }
  }
  render() {
    return (
      <div className="register">
        <div className="register_box">
          <h1>LOGO</h1>
          <h3>Register</h3>
          <div>
            <TextField
              name="email"
              label="E-Mail"
              onChange={this.handleInputs}
            />
          </div>
          <div>
            <TextField
              name="fPassword"
              label="Password"
              type="password"
              onChange={this.handleInputs}
            />
          </div>
          <div>
            {" "}
            <TextField
              name="vPassword"
              label="Validate Password"
              type="password"
              onChange={this.handleInputs}
            />
          </div>
          <hr />
          <h3>Wedding Details</h3>
          <div>
            <span id="TextField">
              <TextField
                name="gName"
                label="Groom Full Name"
                onChange={this.handleInputs}
              />
            </span>
            <span id="TextField">
              <TextField
                name="bName"
                label="Bride Full Name"
                onChange={this.handleInputs}
              />
            </span>
          </div>
          <div className="inputs_section">
            <span id="TextField">
              <TextField
                type="date"
                name="weddingDate"
                label="WeddingDate"
                defaultValue={this.state.weddingDate}
                onChange={this.handleInputs}
              />
            </span>
            {/* There will be DATE PICKER here, leave it to yaniv */}
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={this.state.date}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       </Grid>
    </MuiPickersUtilsProvider> */}
          </div>
          <div>
            <span id="TextField">
              <TextField
                type="number"
                name="weddingBudget"
                label="Wedding Budget"
                onChange={this.handleInputs}
              />
            </span>
            <span id="TextField">
              <TextField
                type="number"
                name="estInvitees"
                label="Estimated Invitees"
                onChange={this.handleInputs}
              />
            </span>
          </div>
          <div>
            {/* Noam will make it autocomplete ?  */}
            <span id="TextField">
            <Autocomplete value={this.state.weddingArea} label="Wedding Area" name="weddingArea" id="autoCompleteField"
              style={{ width: '220px',marginTop:'15px', backgroundColor: "rgba( 255,255 ,255,0 )", height: 40, borderRadius: 20, borderColor: 'rgba(0,0,0,0.3)' }}
              onChange={this.handleInputs}
              onPlaceSelected={(city) => {
                let cityName = city.formatted_address
                this.setState({ weddingArea: cityName })
              }}
              types={['(cities)']}
              componentRestrictions={{ country: "IL" }}
            />
            </span>
          </div>
          <div>
            <Button  style={{marginTop:'5px'}} variant="contained" color="primary" onClick={this.userRegister}>
              Register
            </Button>
            {this.props.user.userLogedIn ? window.location="/" : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
