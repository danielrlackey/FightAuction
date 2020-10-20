import React, { useEffect } from "react";
import { connect } from "react-redux";
import {fighterRankingsData, fighterDivisionalRankingsData, ufcP4pData} from "../actions/getdata.jsx";
import BoxingRankingTable from "./BoxingRankingTable.jsx"

const FighterRankings = (props) => {

const {rankings} = props
   

    useEffect(()=>{
        fighterDivisionalRankingsData()
        fighterRankingsData()
        ufcP4pData()
    },[])
    
      
    const division = rankings.champsByDivision
    const p4p = rankings.p4pFighters
    const ufcp4p = rankings.ufcP4pFighters
    
   
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
                    <BoxingRankingTable 
                    rankings={ufcp4p}
                    title={"UFC P4P Rankings"} 
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
    ufcP4pData: (data) => dispatch(ufcP4pData(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(FighterRankings);

