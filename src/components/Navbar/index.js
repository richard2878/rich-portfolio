import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo";
import Info from '@material-ui/icons/Info';
import Laptop from '@material-ui/icons/Laptop';
import { Tooltip } from '@material-ui/core';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav 
    className="navbar navbar-expand-lg navbar-light"
    style={{backgroundColor:'#BFBDC1'}}
    >
      <Logo style={{
        flex: 1,
        padding: 0,
        height: '80px',
      }}/>
      <div 
      className="navbar-brand" 
      to="/"
      style={{
        flex: 1,
        padding: 'none',
        height: '160px',
        marginTop: 0,
      }}
      >
      <text style={{  
        flex: 1,
        flexWrap:'wrap',  
        padding:'-20px',   
        fontSize:'80px',
        fontWeight:400,
        color: '#6D6A75',
        marginLeft: '10px',
        marginBottom: '-50px',
        fontFamily: 'Source Sans Pro, sans-serif',
        textShadow: '3px 3px WHITE',}}>Richard Antolin
      </text><br/>
      <text style={{
        marginTop: '10px',
        color: 'white',
        marginLeft: '15px',
        fontSize:'20px',
        textShadow: '2px 2px #white',
        flex: 1,
        }}>Full Stack Web Developer/UX Engineer
      </text>
      </div>
      

      <div>
        <ul className="navbar-nav"
          style={{marginLeft: "30px",marginTop: "30px",}}>
          <Tooltip title='About Me'>
            <li className="nav-item">
                <Link
                  className= "Iconbuttons"
                  style={{             
                    fontSize: '18px',
                    fontWeight:400,
                    color: "white",
                    backgroundColor: '#DEB841',
                    borderRadius: '8px 0px 8px 0px',
                    boxShadow: '3px 3px',
                    textAlign: 'center',
                    width: '150px',
                    padding: '10px',
                    marginRight: '50px',
                    marginTop: '20px'
                  }}
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                <Info style={{fontSize:'30px', marginLeft:'10px'}}/>
                </Link>
            </li>
          </Tooltip>
          <Tooltip title='My Work'>
            <li className="nav-item">
              <Link
                style={{
                  fontSize: '18px',
                  fontWeight:400,
                  color: "white",
                  backgroundColor: '#DEB841',
                  borderRadius: '8px 0px 8px 0px',
                  boxShadow: '3px 3px',
                  textAlign: 'center',
                  width: '150px',
                  padding: '10px',
                  marginRight: '50px',
                  marginTop: '20px'
                }}
                
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              <Laptop style={{fontSize:'30px', marginLeft:'10px'}}/>
              </Link>
            </li>
          </Tooltip>
          <li className="nav-item">
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
