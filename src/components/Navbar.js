import React from 'react'
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack  direction="row" justifyContent="space-around" sx={{ gap:{sm:'122px',xs:'40px'}, mt: {sm:'32px',xs:'20px'},justifyContent:'none'}}>  
    <Link to ="/" >
    <img src={Logo} alt="logo" style={{
        width:'80px', margin:'0 20px'
    }} /> </Link>
    <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
        <Link to="/" style={
        {textDecoration:'none',color:"#050000", borderBottom: '3px solid #ea152c'}
        }>Home</Link>
        <a href="#exercises" style={
        {textDecoration: 'none', color:'#050000'}
        }>Exercises</a> 
           <a href="#profile" style={
        {textDecoration: 'none', color:'#050000'}
        }>Profile</a> 
        <a href="#aboutus" style={
        {textDecoration: 'none', color:'#050000'}
        }>About Us</a> 
         <a href="#settings" style={
        {textDecoration: 'none', color:'#050000'}
        }>Settings</a> 
        <a href="#login" style={
        {textDecoration: 'none', color:'#050000'}
        }>Log Out</a> 
        </Stack>
     
    </Stack>  
  )
}

export default Navbar