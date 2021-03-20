import React,{useState} from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import {connect} from "react-redux";
import {deleteUser} from "../actions/usersAction";


const User = (props) => {
    const [show, setShow] = useState(false);
    const getClose = () => setShow(false);
    const getShow = () => setShow(true);

    const getDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id)
    };

  return (
      <>
      <Modal show={show} onHide={getClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={getClose}/>
        </Modal.Body>
         
      </Modal>


    <Col md="4">
      <Card style={{marginBotton: "2rem"}} >
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Codetrain User
          </Card.Subtitle>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
            <p> Email: {props.userInfo.email}</p>
            <p> Gen: {props.userInfo.gen}</p>
          </Card.Text>
          <Card.Link href="#" onClick={getShow}>Edit</Card.Link>
          <Card.Link href="#"><Button variant="danger" size="sm" onClick={getDelete}>Delete</Button> </Card.Link>
        </Card.Body>
      </Card>
    </Col>
    </>
  ); 
};

const mapDispatchToProps =  {
  deleteUser
}

export default connect(null, mapDispatchToProps)(User);