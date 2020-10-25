import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Meeky",
          email: "Meekyx@oasis..com",
          gen: 9,
          id: "8932bh2gv8293b",
        },

        {
          name: "Burma",
          email: "Burmathis@aol.com",
          gen: 2,
          id: "nwe831002ebhb2",
        },
        {
          name: "Bismark",
          email: "Bismark@mail.com",
          gen: 4,
          id: "2781geve0b2",
        },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>NEW USER</h4>
              <br/>
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
            <h4>CODETRAIN USERS</h4>
            <br/>
              <Users userData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;