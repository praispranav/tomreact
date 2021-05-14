import React from 'react'
import CheckIcon from "@material-ui/icons/Check"


export default function BlogFullWidthList(props) {
    const modelData = props.modelData
    return (
        <>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />English : {modelData.english}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Korean : {modelData.korean}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Japanese : {modelData.japanese}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Vietnamese : {modelData.vietnamese}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />PhySical Location : {modelData.physicalLocation}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Five Elements : {modelData.fiveElement}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Horary Cycle {modelData.horarycycle}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Functionality : {modelData.functionality}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Name : {modelData.name}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />PinyIn : {modelData.pinyin}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Meridian : {modelData.meridian}</li><br/>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Element : {modelData.element}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Indication : {modelData.indication}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Caution : {modelData.caution} </li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Notes : {modelData.notes}</li>
                        <li className="myliststyle"><CheckIcon style={{color:"red", marginRight:"20px"}} />Video Link : {modelData.videoLink}</li>   
        </>
    )
}
