import React from "react";
import {styles} from "./HomePageImageDisplay.styles.js";
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';


import boxingpic1 from '../images/boxingpic1.jpg'
import boxingpic2 from '../images/boxingpic2.jpg'
import boxingpic3 from '../images/boxingpic3.jpg'
import boxingpic4 from '../images/boxingpic4.jpeg'
import boxingpic5 from '../images/boxingpic5.jpg'
import boxingpic6 from '../images/boxingpic6.jpg'
import boxingpic7 from '../images/boxingpic7.jpg'
import boxingpic8 from '../images/boxingpic8.jpg'
import boxingpic9 from '../images/boxingpic9.jpg'
import boxingpic10 from '../images/boxingpic10.jpeg'
import boxingpic11 from '../images/boxingpic11.jpg'
import boxingpic12 from '../images/boxingpic12.webp'
import boxingpic13 from '../images/boxingpic13.jpg'
import boxingpic14 from '../images/boxingpic14.jpg'
import boxingpic15 from '../images/boxingpic15.jpg'
import boxingpic16 from '../images/boxingpic16.jpg'
import boxingpic17 from '../images/boxingpic17.jpg'
import boxingpic18 from '../images/boxingpic18.jpg'
import boxingpic19 from '../images/boxingpic19.jpg'
import boxingpic20 from '../images/boxingpic20.jpg'

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
            boxingpic10,
            boxingpic11,
            boxingpic12,
            boxingpic13,
            boxingpic14,
            boxingpic15,
            boxingpic16,
            boxingpic17,
            boxingpic18,
            boxingpic19,
            boxingpic20,
            
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