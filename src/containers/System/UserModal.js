import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import './UserModal.scss';
class UserModal extends Component {

    constructor(props) {
        super(props);
    }

    initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        gender: '',
        role: ''
    }

    state = {
        ...this.initialState
    };

    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    componentDidMount() {
    }

    handleOnChange = (e, id) => {
        console.log(`>>> on change value: ${e.target.value}, ${id}`);
        let copyState = { ...this.state };
        copyState[id] = e.target.value;
        this.setState({ ...copyState })
    }

    isValidInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'address'];
        // Perform validation
        const validationErrors = {};
        for (let i = 0; i < arrInput.length; i++) {
            console.log('>>> check inside  loop:', this.state[arrInput[i]]);
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert(`${arrInput[i]} is required`);
                // validationErrors.arrInput[i] = `${arrInput[i]} is required`;
                break;
            }
        }
        return isValid;
    }

    handleSubmit = (e) => {
        if (this.isValidInput()) {
            this.setState({ validated: false });
            this.props.addNewUser(this.state);
            this.refresh();
        }
    }

    render() {
        return (
            <>
                {/* Modal */}
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal add new user</Modal.Title>
                    </Modal.Header>
                    <Form noValidate validated={this.state.validated}>
                        <Modal.Body>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        value={this.state.firstName}
                                        onChange={(e) => this.handleOnChange(e, 'firstName')}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        value={this.state.lastName}
                                        onChange={(e) => this.handleOnChange(e, 'lastName')}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            value={this.state.email}
                                            onChange={(e) => this.handleOnChange(e, 'email')}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a email.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Address"
                                        required
                                        value={this.state.address}
                                        onChange={(e) => this.handleOnChange(e, 'address')}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={this.state.gender}
                                        onChange={(e) => this.handleOnChange(e, 'gender')}
                                    >
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom05">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={this.state.role}
                                        onChange={(e) => this.handleOnChange(e, 'role')}
                                    >
                                        <option value="0">Admin</option>
                                        <option value="1">Doctor</option>
                                        <option value="1">Patient</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={this.props.onHide}>
                                Close
                            </Button>
                            <Button
                                onClick={(e) => this.handleSubmit(e)}
                                variant="primary">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
