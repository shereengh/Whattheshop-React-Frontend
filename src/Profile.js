import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

// Actions :
import { fetchProfile } from "./redux/actions/profile";
import { logout } from "./redux/actions";

import Default from "./icon.png";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    if (this.props.loading) return <div>Loading</div>;
    const user = this.props.user;
    const profile = this.props.profile;
    const ordersList = profile.orders_list;

    let image = profile.pic;
    if (!image) image = Default;

    let orderHistory = [];
    if (ordersList) {
      ordersList.forEach(order => {
        orderHistory.push(
          <div>
            <Link to={`/profile/${order.id}`} className="card">
              <span>
                Order ID : {order.id} - Time : {order.timestamp}
              </span>{" "}
              <br></br>
            </Link>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="card" style={{ marginTop: "50px" }}>
          <div className="card-header"> {user.name}'s Profile</div>
          <div className="card-body">
            <h5 className="card-title">info </h5>
            <div className="card-text">
              <div>
                <div className="image">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "120px",
                      height: "120px"
                    }}
                    className="card-img-top img-fluid"
                    src={image}
                    alt=""
                  />
                </div>
                <span style={{ fontWeight: "bold" }}>Full Name: </span>
                <span>{profile.user.first_name} </span>
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

            <Link to={`/profileform`} className="card">
              <span>Edit my profile</span>
            </Link>
            <a
              href="/logout"
              className="btn btn-primary"
              onClick={() => logout()}
            >
              logout
            </a>
          </div>
        </div>

        <div className="card" style={{ marginTop: "50px" }}>
          <div className="card-body">
            <h5 className="card-title">Orders History: </h5>
            <div className="card-text">
              <div>
                <span style={{ fontWeight: "bold" }}>{orderHistory} </span>
              </div>
            </div>
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
  fetchProfile: () => dispatch(fetchProfile()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
