import React from "react";
import { MDBFooter } from "mdbreact";

// icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


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
      <FontAwesomeIcon icon={faCoffee} />
    </MDBFooter>
  </div>
   
  );
}


export default (withStyles(styles, {withTheme: true})(FooterPage));