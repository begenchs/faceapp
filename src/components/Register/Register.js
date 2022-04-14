import React, { Component } from "react";
import Tilt from "react-tilt";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpEmail: "",
      signUpPassword: "",
      signUpName: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signUpEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signUpPassword: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ signUpName: event.target.value });
  };

  onSubmitSignUp = () => {
    fetch("https://sleepy-peak-21429.herokuapp.com/register", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.signUpEmail,
        password: this.state.signUpPassword,
        name: this.state.signUpName,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <Tilt
        className='br3 shadow-2 center ba shadow-5 b--black-10 w-100 mv4 w-50-m  mw6'
        options={{ max: 30 }}
      >
        <main className='ma0 w-100 center tilt-inner black-80 mv5'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='name'>
                  Name
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-green hover-white w-100'
                  type='text'
                  name='name'
                  id='name'
                  onChange={this.onNameChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-green hover-white w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={this.onEmailChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent hover-bg-green hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Register'
                onClick={this.onSubmitSignUp}
              />
            </div>
          </div>
        </main>
      </Tilt>
    );
  }
}

export default Register;
