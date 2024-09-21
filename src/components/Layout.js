import React from 'react';
import Nav from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
    <Nav />
    <main>{ children }</main>
    </>
  )
}

export default Layout