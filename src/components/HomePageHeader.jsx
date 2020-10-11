import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./HomePageHeader.styles.js";

const HomePageHeader = (props) => {

  const { classes } = props;

    return (
        <Jumbotron fluid>
  <Container className={classes.homePageHeader}>
    <div>
      <h1 className={classes.title}>Finally a place for fight fans</h1>
    </div>
    <h3>
      Welcome to FightAuction a Place where fight fans can but and sell fight memorabilia!
      or you can just catch up on the latest news and rankings.
    </h3>
  </Container>
</Jumbotron>
    );
}

export default (withStyles(styles, {withTheme: true})(HomePageHeader));
// export default HomePageHeader;