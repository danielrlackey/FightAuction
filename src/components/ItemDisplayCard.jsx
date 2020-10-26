import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {styles} from "./ItemDisplayCard.styles.js";
import { withStyles } from '@material-ui/core/styles';



const ItemDisplayCard = (props) => {
  const {classes,
        itemDescription,
        askingPrice,
        itemDetails,
        pictures
        } = props


        console.log("HERE IS A PIC OBJECT", pictures)
  return (
    <Card className={classes.root}>
      <cardActionArea>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            FA
          </Avatar>
        }
        title={itemDescription}
        subheader={askingPrice}
      />
      <CardMedia
        className={classes.media}
        image={pictures}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {itemDetails}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      </cardActionArea>
    </Card>
  );
}


export default withStyles(styles)(ItemDisplayCard);
