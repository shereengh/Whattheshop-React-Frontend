import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { fetchProfile } from "./redux/actions/profile";
//components

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    if (this.props.loading) return <div>Loading</div>;
    const user = this.props.user;
    const profile = this.props.profile;
    console.log("profile", profile);

    return (
      <div>
        <div className="card" style={{ marginTop: "50px" }}>
          <div className="card-header"> {user.name}'s Profile</div>
          <div className="card-body">
            <h5 className="card-title">info </h5>
            <div className="card-text">
              <div>
                <span style={{ fontWeight: "bold" }}>Full Name: </span>
                <span>{profile.firstname} </span>
                <span>{profile.user.last_name}</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Email: </span>
                <span>{profile.user.email} </span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Phone Number: </span>
                <span>{profile.contact} </span>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
            >
              Edit my profile
            </a>
            <a href="#" className="btn btn-primary">
              logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile.profile,
  loading: state.profile.loading
});
const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
