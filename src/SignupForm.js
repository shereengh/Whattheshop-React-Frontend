import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup } from "./redux/actions/AuthAction";
import { connect } from "react-redux";

/**
 * Same notes as LoginForm.js
 */
class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    const { username, password } = this.state;
    if (this.props.user)
      return (
        <div>
          <Redirect to="/" />;
        </div>
      );
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
              <Link to="/login" className="btn btn-link my-2 my-sm-0">
                I already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) => dispatch(signup(userData, history))
});

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
