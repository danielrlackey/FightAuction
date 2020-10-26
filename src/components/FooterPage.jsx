import React from "react";
import { MDBFooter } from "mdbreact";

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";


// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./FooterPage.styles.js";




const FooterPage = (props) => {

  const {classes} = props

  return (
    <div className={classes.root}>
         <MDBFooter className={classes.footer}>
      <div className={classes.linkContainer}>
          <h5 className="title">Links</h5>
            <ul>
              <li className="links">
                <a className="links" href="#!">Information</a>
              </li>
              <li className="links">
                <a href="#!">Event Tickets</a>
              </li>
              <li className="links">
                <a href="#!">Contact</a>
              </li>
              <li className="links">
                <a href="#!">About Us</a>
              </li>
            </ul>
      </div>
      <div className={classes.signature}>
        <p>Copyright: Daniel Ray Lackey</p>
      </div>
      <div className={classes.iconContainer}>
        <a href="https://www.facebook.com/daniel.lackey.54">
            <FontAwesomeIcon 
              icon={faFacebookSquare} 
              size="3x" 
              className={classes.icons}
            />
            
        </a>
      
        <a href="https://github.com/danielrlackey">
            <FontAwesomeIcon 
              icon={faGithub} 
              size="3x" 
              className={classes.icons}
            />
        </a>
      
        <a href="https://www.linkedin.com/feed/">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size="3x" 
              className={classes.icons}
            />
        </a>
      </div> 
    </MDBFooter>
  </div>
   
  );
}


export default (withStyles(styles, {withTheme: true})(FooterPage));