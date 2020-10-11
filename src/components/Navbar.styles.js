export const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    inactive: {
      textDecoration: "none",
      color: "white",
      fontWeight: 700,
      marginLeft: "15px",
      marginTop: "5px",
    },
    active: {
      textDecoration: "none",
      color: "#c2252f",
      fontWeight: 700,
      marginLeft: "15px",
      marginTop: "5px",
    },
    logo:{
      margin: 0,
      padding: 0,
      height: "30px",
      display: "flex",
      align: "left",
    },
    color: {
      background: "rgba(0,0,0,0.7)",
      position: "fixed",
      top: 0,
      width: "100%",
      marginBottom: "50px",
    }
  });