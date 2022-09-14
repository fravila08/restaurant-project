import {useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

function AppNav({allMeals}){
    function signOut(){
        event.preventDefault()
        axios.post('/sign_out').then((respone)=>{
          window.location.href="/"
        })
      }
    
    const navItems = ['Meals', 'Dessert']
    const[navbarItems, setNavbarItems]= useState(navItems)

    

    

    return(
        <div className='navbar'>
            <Navbar >
                <Nav>
                    <Nav.Link href="/" >Home</Nav.Link>
                    {
                        navbarItems.map((item, index)=>{
                            return(
                                <Nav.Link id={index} href={`/#/mealtypes/${item}`} >
                                    {item}
                                </Nav.Link>
                            )
                        })
                    }
                    <Nav.Link href="/#/myCart" >My Cart</Nav.Link>
                    {/* <Nav.Link href='/#/myProfile'>My Profile</Nav.Link> */}
                    <Nav.Link href="/#/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/#/signin">Sign In</Nav.Link>
                    <button onClick={signOut}>Sign Out</button>
                </Nav>
            </Navbar>
            
            
        </div>
    )

}
export default AppNav;