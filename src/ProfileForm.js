import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { updateProfile } from "./redux/actions/profile";
import { connect } from "react-redux";

class ProfileForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    redirect: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("mshan allah!");
    event.preventDefault();
    this.props.updateProfile(this.state, this.props.history);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect);
    {
      return <Redirect to="/profile" />;
    }
  };

  render() {
    return (
      <div className="col-6 mx-auto" style={{ marginTop: "5%" }}>
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={this.state.first_name}
                  name="first_name"
                  placeholder="first name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={this.state.last_name}
                  name="last_name"
                  placeholder="last name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">e-mail</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={this.state.email}
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">contact</label>
                <input
                  type="contact"
                  className="form-control"
                  id="contact"
                  value={this.state.contact}
                  name="contact"
                  placeholder="contact"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateProfile: (userData, history) =>
    dispatch(updateProfile(userData, history))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
