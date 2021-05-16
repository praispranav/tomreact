import React,{ useState,useEffect, useContext } from 'react';
import { UserContext } from "../../App"
import axios from "axios"

const withHOC = (WrappedComponent, params) =>{
    const NewComponent = (props) =>{
        const context = useContext(UserContext)
        const [ isLoading, setIsLoading ] = useState(true)
        const [ state, setstate ] = useState([])
        const url = 'http://itransportindex.com:4500/api/acupunctures'
        const [ error , seterror ] = useState(false)
        
        const stateUpdate = ()=>{
            if(isLoading === true ){
                axios.get(url)
                .then((res)=>{
                    setstate(res.data)
                    setIsLoading(false)
                })
                .catch((err)=>{
                    seterror(true)
                })
            }
        }
        useEffect(()=>{
            setTimeout(() => {
               stateUpdate() 
            }, 100);

            return()=>{
                setIsLoading(false)
                clearTimeout()
            }
        },[url])
        
        return(
            <WrappedComponent isLoading={isLoading}
                                context={context}
                                state={state}
                                error={error} />
        )
    }
    return NewComponent
}

export default withHOC;
