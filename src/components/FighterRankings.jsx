import React, { useEffect } from "react";
import { connect } from "react-redux";
import {fighterRankingsData, fighterDivisionalRankingsData, ufcP4pData, fetchUfcDivisions} from "../actions/getdata.jsx";
import BoxingRankingTable from "./BoxingRankingTable.jsx"

const FighterRankings = (props) => {

const {rankings, fighterRankingsData, fighterDivisionalRankingsData, ufcP4pData, fetchUfcDivisions} = props
   

    useEffect(()=>{
        fighterDivisionalRankingsData()
        fighterRankingsData()
        ufcP4pData()
        fetchUfcDivisions()
    },[])
    
      
    const division = rankings.champsByDivision
    const p4p = rankings.p4pFighters
    const ufcp4p = rankings.ufcP4pFighters
    const ufcDivisionalChamps = rankings.ufcDivisions
    
   
    return(
       
        <div>
            {rankings.data &&
                <div>
                    <BoxingRankingTable
                    rankings={p4p} 
                    title={"P4P Boxing Rankings"}    
                />
                    <BoxingRankingTable 
                    rankings={division}
                    title={"Boxing Divisional Rankings"} 
                />
                    <BoxingRankingTable 
                    rankings={ufcp4p}
                    title={"UFC P4P Rankings"} 
                />
                 <BoxingRankingTable 
                    rankings={ufcDivisionalChamps}
                    title={"UFC Divisional Rankings"} 
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
    ufcP4pData: (data) => dispatch(ufcP4pData(data)),
    fetchUfcDivisions: (data) => dispatch(fetchUfcDivisions(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(FighterRankings);

