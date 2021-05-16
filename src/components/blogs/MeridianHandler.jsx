import React,{ useState, useContext} from 'react'
import Typography from "@material-ui/core/Typography"
import {UserContext} from "../../App"
import CloseIcon from "@material-ui/icons/Close"
import { motion } from "framer-motion"

const MeridianList = (props) =>{
    return(
        <motion.div
            whileHover={{ background: "rgb(240,240,240)", transition: {duration: 0.5}}}
             className="mysideFilter" style={{background:"white", zIndex:"10000000000"}}>
            <motion.div 
                whileHover={{
                    color:"red",
                    transition: {duration:0.5}
                }}
                onClick={()=> props.handleClick(props.meridian)}
                style={{ zIndex:"10000000000"}}>
                <Typography 
                    variant="h6" 
                    style={{fontSize:"15px"}} 
                    onClick={()=> props.handleClick(props.meridian)}>
                        {props.meridian}
                </Typography>
            </motion.div>

        </motion.div>
    )
}

const Red = () =>{
    const context = useContext(UserContext)
    return(
        <motion.div
        initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            style={{}} className="sidefilter">
            <Typography variant="body1"><small>{context.state.activeFilter.length > 3? 
                context.state.activeFilter : "Hand Yin Lung Meridian (LU) (手太阴肺经穴, 手太陰肺經)" }</small></Typography>
        </motion.div>
    )
}

function MeridianHandler(props) {
    const context = useContext(UserContext)
    const [ isOpen , setisOpen] = useState(false)
    const handleClick =(event)=>{
        context.dispatch({type:"filter", value:event})
        setisOpen(false)
    }

    const Array = props.meridian.map((item)=> <MeridianList key={item} handleClick={(event)=> 
        handleClick(event)} meridian={item} />)
    
    return (
   <>
    <div onMouseEnter={()=> setisOpen(true)} style={ isOpen ? {display:"none"}: {display:"block"}} onClick={()=> setisOpen(true)}>
        <Red />
    </div>
    <div style={ isOpen ? {
            display:"block", 
            background:"white", 
            overflowY:"auto", 
            height:"50vh", 
            boxShadow:"0px 0px 10px rgb(230,230,230)"}

        :{display:"none"}}
        onMouseLeave={()=> setisOpen(false)}>
            
        <div style={{textAlign:"right", paddingRight:"1em", paddingTop:"10px"}} 
        onClick={()=> setisOpen(false)}>
            <CloseIcon fontSize="large" />
        </div>
        {Array}
    </div>
   </>
    )
}
export default  React.memo(MeridianHandler)
