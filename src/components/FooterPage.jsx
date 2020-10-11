import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logoPic from '../images/logo2.png'

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./FooterPage.styles.js";




const FooterPage = (props) => {

  const {classes} = props

  return (
    <div className={classes.root}>
         <MDBFooter className={classes.footer}>
      <div className={classes.container}>
          <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
      </div>
      <div className={classes.signature}>
        <p>Copyright: Daniel Ray Lackey</p>
      </div>
    </MDBFooter>
  </div>
   
  );
}


export default (withStyles(styles, {withTheme: true})(FooterPage));