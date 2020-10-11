import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./RankingTable.styles.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const BoxingRankingTable = (props) => {
  
    const classes = styles();
    const {rankings, title} = props;
   
    // console.log(rankings)
  return (
    <TableContainer component={Paper}>
      <h1>{title}</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Record</TableCell>
            <TableCell align="right">Kos</TableCell>
            <TableCell align="right">Alias</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Debut</TableCell>
            <TableCell align="right">Division</TableCell>
            <TableCell align="right">Stance</TableCell>
            <TableCell align="right">Height</TableCell>
            <TableCell align="right">Reach</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


          {rankings && rankings.map((ranking) => (
            <TableRow key={ranking.name}>
              <TableCell component="th" scope="row">
                {ranking.name}
              </TableCell>
              <TableCell align="right">{ranking.division}</TableCell>
              <TableCell align="right">{ranking.record}</TableCell>
              <TableCell align="right">{ranking.kos}</TableCell>
              <TableCell align="right">{ranking.alias}</TableCell>
              <TableCell align="right">{ranking.nationality}</TableCell>
              <TableCell align="right">{ranking.debut}</TableCell>
              <TableCell align="right">{ranking.stance}</TableCell>
              <TableCell align="right">{ranking.height}</TableCell>
              <TableCell align="right">{ranking.reach}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default (withStyles(styles, {withTheme: false})(BoxingRankingTable))