import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../asset/medicare_icon.png'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light">
                <Container className='d-flex align-items-center justify-content-between'>
                    <Navbar.Brand >
                        <Link to='/' className='d-flex text-decoration-none'>
                            <img
                                alt=""
                                src={logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />
                            <h1 className='ms-3'>MediCare</h1>
                        </Link>


                    </Navbar.Brand>
                        {/* <Link>Login</Link> */}
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;