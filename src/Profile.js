import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

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
                Order ID : {order.id}- Time : {order.timestamp}
              </span>{" "}
              <br></br>
            </Link>
          </div>
        );
      });
    }

    return (
      <Container className="profile">
        <div>
          <div className="card" style={{ marginTop: "50px" }}>
            <div className="title"> {user.name}'s Profile</div>
            <div className="card-body">
              <div className="al">
                <div className="card-text">
                  <div>
                    <div className="pimage">
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
                    <div>
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

                  <a
                    href="#"
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                  >
                    Edit my profile
                  </a>
                  <a
                    href="/logout"
                    className="btn btn-primary"
                    onClick={() => logout()}
                  >
                    logout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="ol">
            <div className="card" style={{ marginTop: "50px" }}>
              <div className="card-body">
                <h3 className="card-title">Orders History: </h3>
                <div className="card-text">
                  <div>
                    <span style={{ fontWeight: "bold" }}>{orderHistory} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
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
