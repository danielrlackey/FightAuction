import newBgg from '../images/background.jpg'
export const styles = theme => ({


    background: {
        backgroundImage: `url(${newBgg})`,
        backgroundSize: "cover",
        marginTop: -50,

        backgroundColor: "#fff",
        color: "#c2252f"
    },
    boxingtitle: {
        marginTop: "20px",
        marginBottom: "-30px",
        marginLeft: "200px",
        textShadow: "2px 2px 4px #000000",
        fontweight: "600"
    },
    rankCol:{
        display: "flex",
        justifyContent: "center"
    },
    picRow:{
        display: "flex",
        justifyContent: "center"    
    },
    rankCol2: {
        display: "flex",
        marginLeft: "25px",
        marginTop: "30px",
    },
    divList: {
        marginLeft: "8px"
    }
    });