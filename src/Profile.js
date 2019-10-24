import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";

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
              <span className="his">
                Order ID : {order.id}- Time : {order.timestamp}
              </span>{" "}
              <br></br>
            </Link>
          </div>
        );
      });
    }

    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <Container className="profile">
          <div className="title"> {user.name}'s Profile</div>

          <Card
            style={{
              hight: "100rem",
              width: "50rem",
              position: "relative",
              left: "160px",
              top: "150px"
            }}
          >
            <Card.Body>
              <Card.Img
                style={{
                  borderRadius: "50%",
                  width: "120px",
                  height: "120px"
                }}
                className="img"
                variant="top"
                src={image}
              ></Card.Img>
              <Card.Text className="bodyz">
                Full Name: <span>{profile.user.first_name} </span>
                <span>{profile.user.last_name}</span>
              </Card.Text>
              <Card.Text className="bodyz">
                Email: {profile.user.email}
              </Card.Text>
              <Card.Text className="bodyz">
                Phone Number: {profile.contact}
              </Card.Text>
              <Link
                to="#"
                className="btn btn-link my-2 my-sm-0"
                style={{ marginRight: "20px", color: "#8aac8a" }}
              >
                Edit my profile
              </Link>
              <Link
                to="/meals"
                className="btn btn-link my-2 my-sm-0"
                style={{ color: "#8aac8a" }}
              >
                List of meals
              </Link>
              <Link
                to="/logout"
                className="btn btn-link my-2 my-sm-0"
                onClick={() => logout()}
                style={{ color: "#8aac8a" }}
              >
                logout
              </Link>

              <Card.Title className="bodyz">Orders History:</Card.Title>

              <Card.Text
                className="his"
                style={{
                  fontFamily: "Impact",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  color: "#8aac8a"
                }}
              >
                {orderHistory}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
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
