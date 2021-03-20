import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import {connect} from "react-redux";
import {addUser} from "../actions/usersAction";

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
            email: "",
            gen: ""
        }
    }

    getChange = (e) => {
        e.preventDefault();
        this.setState ({
        [e.target.name] : e.target.value,
        });
        
    };

    getSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState ({
            name: "",
            email: "",
            gen: ""

        });

    };

  render() {
    return (
      <div>
        <Form onSubmit={this.getSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.getChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.getChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control type="number" placeholder="Gen"  name="gen" value={this.state.gen} onChange={this.getChange}/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const mapDispatchToProps =  {
  addUser
}

export default connect(null, mapDispatchToProps) (AddUserForm);