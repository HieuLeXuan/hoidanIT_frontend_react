import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import authService from '../../services/authService';
import './UserManage.scss';
import ModalUser from './UserModal';
class UserManage extends Component {

    /**
     * 
     * @param {*} props 
     * 
     * life circle
     * 1. constructor (init)
     * 2. did mount (get api, set state)
     * 3. render (render data on screen for user)
     */
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            arrUser: [],
        }
    }

    async componentDidMount() {
        this.getUsers("All");
    }

    async getUsers(data) {
        try {
            let response = await authService.getAllUser(data);

            if (response && response.errorCode === 0) {
                this.setState({
                    arrUser: response.user
                }, () => {
                    console.log(this.state.arrUser);
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    async createUser(data) {
        try {
            let response = await authService.createUserService(data);

            if (response.errorCode === 0) {
                this.getUsers('All')
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleAddNewUser = (user) => {
        this.createUser(user);
        this.setState({ modalShow: false });
    }

    async handleDeleUser(id) {
        try {
            let response = await authService.deleteUserService(id);

            if (response.errorCode === 0) {
                this.getUsers('All')
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUsers = this.state.arrUser;
        return (
            <div className='mt-5 mx-2'>
                <h1 className='text-center mt-3'>Manage Users</h1>
                <div className='d-flex justify-content-end'>
                    <Button
                        className='px-2'
                        variant="primary"
                        onClick={() => this.setState({ modalShow: true })}>
                        <i className="fas fa-plus"></i>
                        Add new user
                    </Button>

                    <ModalUser
                        show={this.state.modalShow}
                        onHide={() => this.setState({ modalShow: false })}
                        addNewUser={this.handleAddNewUser}
                    />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrUsers && arrUsers.map((user) => {
                                return (
                                    <>
                                        <tr key={`user-${user.index}`
                                        }>

                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td className='user-actions'>
                                                <i className='fas fa-edit'></i>
                                                <i
                                                    className="fas fa-trash"
                                                    onClick={() => this.handleDeleUser(user.id)}
                                                ></i>
                                            </td>
                                        </tr ></>
                                )
                            })
                        }
                    </tbody>
                </table >
            </div >
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
