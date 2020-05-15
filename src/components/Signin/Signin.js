import React from "react";
import axios from "axios";
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ loginEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ loginPassword: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/signin", {
        email: this.state.loginEmail,

        password: this.state.loginPassword,
      })
      .then((res) => {
        this.props.onLoad(res.data.user);
        this.props.onroutechange("home");
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { onroutechange } = this.props;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
        <main className="pa4 black-80">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  onChange={this.onEmailChange}
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  onChange={this.onPasswordChange}
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                href="#0"
                className="f6 link dim black db pointer"
                onClick={() => onroutechange("register")}
              >
                Sign up
              </p>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default Signin;
