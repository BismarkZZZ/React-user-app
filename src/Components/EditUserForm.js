import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";


class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            id: props.userInfo.id
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
        this.props.editUser(this.state.id, this.state );
        this.setState ({
            name: "",
            email: "",
            gen: ""

        });
        this.props.closeModal()

    };

  render() {
    return (
      <div>
        <Form onSubmit={this.getSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.getChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.getChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Gen:</Form.Label>
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

export default EditUserForm;