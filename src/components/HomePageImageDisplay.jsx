import React from "react";
import Grid from '@material-ui/core/Grid';
import {styles} from "./HomePageImageDisplay.styles.js";
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

import boxingpic1 from '../images/boxingpic1.jpg'
import boxingpic2 from '../images/boxingpic2.jpg'
import boxingpic3 from '../images/boxingpic3.jpg'
import boxingpic4 from '../images/boxingpic4.jpeg'
import boxingpic5 from '../images/boxingpic5.jpg'
import boxingpic6 from '../images/boxingpic6.jpg'
import boxingpic7 from '../images/boxingpic7.jpg'

//need two more unique images
import boxingpic8 from '../images/boxingpic2.jpg'
import boxingpic9 from '../images/boxingpic5.jpg'

//Local stuff

class HomePageImageDisplay extends React.Component {
    constructor(props){
    super(props)
    this.state= {
        imageUrl: "",
        imageUrlArray: [
            boxingpic1,
            boxingpic2,
            boxingpic3,
            boxingpic4,
            boxingpic5,
            boxingpic6,
            boxingpic7,
            boxingpic8,
            boxingpic9,
        ],
        showModal: false,
        popImageUrl: "",
        diceOne: 0,
        diceTwo: 1,
        diceThree: 2,
        interval: null,
        }
     
    }

    componentDidMount() {

    
        const interval  = setInterval(()=>{
            const randomOne = Math.floor(Math.random() * 8);
            const randomTwo = Math.floor(Math.random() * 8);  
            const randomThree = Math.floor(Math.random() * 8); 
            this.setState({diceOne: randomOne})
            this.setState({ diceTwo: randomTwo})
            this.setState({ diceTwo: randomThree})
            
        },3000)

        this.setState({interval: interval})

      }
      componentWillUnmount() {
        clearInterval(this.state.interval);
      }

    render(){
        const {classes} = this.props
        let imageUrlArray = this.state.imageUrlArray;
            return (
                    <div>
                         <Grow in={true}>
                            <img
                                className={classes.imgSize}
                                src={imageUrlArray[this.state.diceOne]}
                                alt={"boxing"}
                            />
                        </Grow>
                        <Grow in={true}>
                            <img
                                className={classes.imgSize}
                                src={imageUrlArray[this.state.diceTwo]}
                                alt={"boxing"}
                            />
                        </Grow>
                        <Grow in={true}>
                            <img
                                className={classes.imgSize}
                                src={imageUrlArray[this.state.diceThree]}
                                alt={"boxing"}
                            />
                        </Grow>
                    </div>          
            )
    };
}

export default withStyles(styles)(HomePageImageDisplay);