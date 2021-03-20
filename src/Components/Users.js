import React from "react";
import { Container , Row} from 'react-bootstrap';
import User from './User';
import {connect} from "react-redux"

const Users = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.userData.map((user) => {
                        return <User userInfo={user} key={user.id} editUser={props.editUser} />
                    })
                }
            
            </Row>
        </Container>
    );
} 

const mapStateToProps = (state) => ({
    userData: state.usersState.users
})
export default connect(mapStateToProps) (Users);