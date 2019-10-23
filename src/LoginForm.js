import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "./redux/actions/AuthAction";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect);
    {
      return <Redirect to="/meals" />;
    }
  };

  render() {
    const { username, password } = this.state;
    if (this.props.user) return <Redirect to="/meals" />;

    return (
      <Jumbotron id="p">
        <Jumbotron className="jumbot">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="username"
                value={username}
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                className="form-control"
                id="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button type="submit" id="btn" onClick={this.setRedirect}>
              Login
            </Button>
            <Link to="/signup" id="li" className="btn btn-link my-2 my-sm-0">
              Signup for an account
            </Link>
          </Form>
        </Jumbotron>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: (userData, history) => dispatch(login(userData, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
