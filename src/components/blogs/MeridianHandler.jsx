import React,{useEffect, useState, useContext} from 'react'
import Typography from "@material-ui/core/Typography"
import {UserContext} from "../../App"

const MeridianList = (props) =>{
    return(
        <div style={{width:"90vw",color:"black",  background:"white"}}>
            <div onClick={()=> props.handleClick(props.meridian)}>
                <Typography variant="h6">{props.meridian}</Typography></div>

        </div>
    )
}

const Red = () =>{
    return(
        <div style={{}} className="sidefilter">
            <Typography variant="h6"><small>Filter</small></Typography>
        </div>
    )
}

function MeridianHandler(props) {
    const [ error, seterror ] = useState(false)
    const context = useContext(UserContext)
    const [ isOpen , setisOpen] = useState(false)
    const handleClick =(event)=>{
        context.dispatch({type:"filter", value:event})
        setisOpen(false)
        // console.log("active Meridian", context.state.activeFilter)
    }

    const Array = props.meridian.map((item)=> <MeridianList handleClick={(event)=> 
        handleClick(event)} meridian={item} />)
    
    const SideFilter = isOpen ? Array : <div onClick={()=> setisOpen(true)}><Red /></div>
    return (
        <>
            {SideFilter}
        </>
    )
}
export default  React.memo(MeridianHandler)
