
import React,{ useState,useEffect, useContext } from 'react';
import { UserContext } from "../../App"
import axios from "axios"
import BlogFullWidthArray from "./BlogFullWidthArray"
import BlogFullWidthList from "./BlogFullWidthList"
import MeridianHandler from "./MeridianHandler"

import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"

function BlogFullWidthItems(){
    const [ isLoading, setIsLoading ] = useState(true)
    const [ state, setstate ] = useState([])
    const [ isModelOpen , setIsModelOpen ] = useState(false)
    const [ modelData , setModelData ] = useState([])
    const url = 'http://itransportindex.com:4500/api/acupunctures'
    const [ error , seterror ] = useState(false)
    const context = useContext(UserContext)

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal
        
            axios.get(url,{signal: signal})
            .then((res)=>{
                setstate(res.data)
                console.log(res.data)
                setIsLoading(false)

            } )
            .catch((err)=> seterror(true))
        
        return()=>{
            controller.abort()
        }
    },[])

    const handleClick = (event)=> {
        setIsModelOpen(true)
        console.log("hello this is Model data")
        setModelData(event)
    }
    const Array = state != null ?  state.map((item)=> <div onClick={()=> handleClick(item)}><BlogFullWidthArray 
        name={item.name} 
        english={item.english}
         /> </div>) : "Loading...." ;

    const FilteredArray = state != null ?  state.filter((it)=>{
        

        if(context.state.activeFilter.length > 5){
            return it.meridian == context.state.activeFilter
        }
        else{
            return it.name.includes(context.state.activeFilter)
        }
    }


    ).map((item)=>
        <div onClick={()=> handleClick(item)}>

            <BlogFullWidthArray keys={item._id}
            name={item.name} 
            english={item.english}
            handleClick={(event)=> handleClick(event)} /> 
        </div> ) : "Loading...." ;
    
    const FilterActive = context.state.activeFilter === 'all' ? Array : FilteredArray
    //test

    var newList = []
    state.forEach((value)=>{
        if(newList.indexOf(value.meridian) == -1){
            newList.push(value.meridian)
        }
    })
    return(
        <>
        {/* {console.log("NewList",newList)} */}
        <div style={{position:"fixed", right:'10px', top:"20%"}}>
            
            <MeridianHandler meridian={newList} />
        </div>
        
        <div style={ isLoading ? {display:"block", textAlign:"center"} : {display:"none"}}>
                <div className="loading"></div>
            <h1>Loading .....</h1>
        </div>
        
        <div style={error ? {display:"block", textAlign:"center"}: {display:"none"}}>
            Sorry An error Occured While Loading Data....Please Refresh
        </div>
        <div className="custom-model" style={isModelOpen ? {display:"block", transition:"1s"}: {display:"none",  transition:"1s"}}>
            <div className="custom-model-box">
            <div style={{width:"100%", textAlign:"right"}}>
                <CloseIcon fontSize="large" style={{textAlign:"right"}} onClick={()=> setIsModelOpen(false)} />

            </div>
                    <ul>
                    <Typography variant="h6">
                        <BlogFullWidthList modelData={modelData} />
                    </Typography>
                    </ul>
            </div>
        </div>
        <div className="array-parent">
            {FilterActive}
        </div>
        </>
    )
}

export default React.memo(BlogFullWidthItems);