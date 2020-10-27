import React from "react";
import "./style.css";
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Email from '@material-ui/icons/Email';
import { Tooltip } from '@material-ui/core';

function Footer() {
  return (
    <footer className="footer" style={{height:'80px'}}>
      <center><span>COPYRIGHT R.A. Portfolio 2020</span></center>
      
      

          <center>
            <Tooltip title="LinkedIn"><a className="Iconbuttons" href={"https://www.linkedin.com/in/richard-antolin/"}><LinkedIn
                      style={{ fontSize: 55, minWidth:'120px', color:'#DEB841', marginTop:'3px'}} 
                      label="LinkedIn" 
                      /></a></Tooltip>
            <Tooltip title="GitHub"><a className="Iconbuttons" href={"https://github.com/richard2878"}><GitHub
                      style={{ fontSize: 45, minWidth:'120px', color:'#DEB841', marginTop:'3px'}} 
                      label="GitHub" 
                      /></a></Tooltip>
            <Tooltip title="Email"><a className="Iconbuttons" href={"/email"}><Email
                      style={{ fontSize: 55, minWidth:'120px', color:'#DEB841', marginTop:'3px'}} 
                      label="Email" 
                      /></a></Tooltip>
          </center>

    </footer>
  );
}
export default Footer;
