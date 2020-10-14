import { blue } from '@material-ui/core/colors';

export const styles = theme => ({

    root: {
        width: 400,
        marginLeft: "35px",
        marginBottom: "35px",
        marginTop: "35px"
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: "#c2252f",
      },
      
});