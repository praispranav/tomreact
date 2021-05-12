import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"

function BlogFullWidthItems() {
    const [ data, setdata ] = useState([])
    useEffect(()=>{
        const url = 'http://itransportindex.com:4500/api/formulas'
        axios.get(url)
            .then((response)=>{
                console.log(response)
                // setdata(response)
            })
            .catch((err)=> console.log(err))
    })
    return (
        <>
        </>
    );
}

export default BlogFullWidthItems;
