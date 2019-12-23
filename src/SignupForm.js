import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup } from "./redux/actions/AuthAction";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
// import "bootstrap/dist/css/bootstrap.min.css";

class Signup extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    redirect: false,
    contact: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect);
    return <Redirect to="/home" />;
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
      <Jumbotron className="x">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="username"
              value={username}
              name="username"
              placeholder="Username.."
              onChange={this.handleChange}
            />
            {/* <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                   </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="first_name">First Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="first_name"
              // value={first_name}
              name="first_name"
              placeholder="First Name.."
              onChange={this.handleChange}
            />
            {/* <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                   </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="last_name">Last Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="last_name"
              // value={last_name}
              name="last_name"
              placeholder="Last Name.."
              onChange={this.handleChange}
            />
            {/* <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                   </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="e-mail">E-mail</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="email"
              // value={email}
              name="email"
              placeholder="Email.."
              onChange={this.handleChange}
            />
            {/* <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                   </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="contact">Phone Number</Form.Label>
            <Form.Control
              type="contact"
              className="form-control"
              id="contact"
              name="contact"
              placeholder="Phone Number.."
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your phone number with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              placeholder="Password.."
              onChange={this.handleChange}
            />
            {/* <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                   </Form.Text> */}
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            id="btn"
            onClick={this.setRedirect}
          >
            Signup
          </Button>

          <Link to="/login" id="li" className="btn btn-link my-2 my-sm-0">
            I already have an account
          </Link>
        </Form>
      </Jumbotron>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) => dispatch(signup(userData, history))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
