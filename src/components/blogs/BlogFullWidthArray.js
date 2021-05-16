import React,{useContext} from 'react';

const BlogFullWidthArray = (props) => {
    return (
        <>
        <div 
            
            keys={props.keys} 
             className="array">
            {props.name}<br/><br />
            {props.english}
        </div>
        </>
    );
}


export default React.memo(BlogFullWidthArray);