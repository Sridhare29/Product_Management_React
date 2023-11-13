import React from 'react';
import { Container, Nav, Navbar, Image, FormControl, Placeholder, DropdownButton, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar bg='light' variant='light' style={{ height: 80, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
            <Container>
            <a href='/' style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'
              alt='Logo'
              width='50'
              height='30'
              className='mr-2' 
            />
            <span className='logo-text'>Apple</span>
          </a>
                <Navbar.Brand>

                    <Navbar.Text className='search'>
                        <FormControl style={{ width: 500 }} placeholder='Search a Product' className='m-auto' />
                    </Navbar.Text>
                </Navbar.Brand>
                <Nav>
                    <Dropdown alignRight>
                    <Dropdown.Toggle variant='success' >
                            <FaShoppingCart color = "Black" fontSize= "25px"/>
                            <Badge >{10}</Badge>

                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>cart is empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

            </Container>
        </Navbar>
    );
};

export default Header;

