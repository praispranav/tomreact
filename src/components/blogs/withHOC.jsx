import React,{ useState,useEffect, useContext } from 'react';
import { UserContext } from "../../App"
import axios from "axios"

const withHOC = (WrappedComponent) =>{
    const NewComponent = (props) =>{
        const context = useContext(UserContext)
        const [ isLoading, setIsLoading ] = useState(true)
        const [ state, setstate ] = useState([])
        const url = 'http://itransportindex.com:4500/api/acupunctures'
        const [ error , seterror ] = useState(false)
        useEffect( ()=>{
            if(isLoading){
                async function fetchData(){
                    const response = await axios.get(url)
                    setstate(response.data)
                    setIsLoading(false)
                    console.log("hello")
                }
                fetchData()
            }
            return()=>{
                setIsLoading(false)
            }
        },[])

        return(
            <WrappedComponent isLoading={isLoading}
                                context={context}
                                state={state}
                                error={error}
                                name={props.name != null ? props.name.match.params.name : null  } />
        )
    }
    return NewComponent
}

export default withHOC;
