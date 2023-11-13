import React from 'react';
import { Container, Nav, Navbar, Image, FormControl, Placeholder, DropdownButton, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg='light' className='ui fixed menu' variant='light' style={{ height: 80, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className='ui fixed center d-flex align-items-center'>
                <Link to='/' className='d-flex align-items-center'>
                    <Image
                        src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'
                        alt='Logo'
                        width='100'
                        height='50'
                        className='mr-2'
                    />
                    <h2 className='mb-0'>Apple Store</h2>
                </Link>
            </div>
        </Navbar>

    );
};

export default Header;

