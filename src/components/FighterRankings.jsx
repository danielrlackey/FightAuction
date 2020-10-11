import React, { useEffect } from "react";
import { connect } from "react-redux";
import {fighterRankingsData, fighterDivisionalRankingsData} from "../actions/getdata.jsx";
import BoxingRankingTable from "./BoxingRankingTable.jsx"

const FighterRankings = (props) => {

const {rankings} = props
   

    useEffect(()=>{
        props.fighterDivisionalRankingsData()
        props.fighterRankingsData()
    },[])

    const division = rankings.champsByDivision
    const p4p = rankings.p4pFighters
    
    return(
       
        <div>
            {rankings.data &&
                <div>
                    <BoxingRankingTable
                    rankings={p4p} 
                    title={"P4P Rankings"}    
                />
                    <BoxingRankingTable 
                    rankings={division}
                    title={"Divisional Rankings"} 
                />
                    
                </div>             
            }
                
        </div>
    )
}

const mapStateToProps = ({rankings}) => {
    return { rankings }
}

const mapDispatchToProps = (dispatch) => ({
    fighterRankingsData: (data) => dispatch(fighterRankingsData(data)),
    fighterDivisionalRankingsData: (data) => dispatch(fighterDivisionalRankingsData(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FighterRankings);

