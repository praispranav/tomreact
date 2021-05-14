import React,{useContext,useState} from 'react';
import {Link} from "react-router-dom";
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import Typography from "@material-ui/core/Typography"
import { UserContext } from "../../App"

function Pagination() {
    const context = useContext(UserContext)
    const activeFilter = context.state.activeFilter
    const handleClick = (event) =>{
        console.log(event)
        // setActiveFilter(event)
        context.dispatch({type:'filter', value: event})
    }
    return (
        <>{console.log("active Filter : " , activeFilter)}
            <div className="pagination-wrapper mt-4 text-center">
                <ul className="pagination-list mycustomlist">
                    <li style={activeFilter == 'all' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('all')}>All</li>
                    <li style={activeFilter == 'a' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('a')}><Typography>A</Typography></li>
                    <li style={activeFilter == 'b' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('b')}><Typography>B</Typography></li>
                    <li style={activeFilter == 'c' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('c')}><Typography>C</Typography></li>
                    <li style={activeFilter == 'd' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('d')}><Typography>D</Typography></li>
                    <li style={activeFilter == 'e' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('e')}><Typography>E</Typography></li>
                    <li style={activeFilter == 'f' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('f')}><Typography>F</Typography></li>
                    <li style={activeFilter == 'g' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('g')}><Typography>G</Typography></li>
                    <li style={activeFilter == 'h' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('h')}><Typography>H</Typography></li>
                    <li style={activeFilter == 'i' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('i')}><Typography>I</Typography></li>
                    <li style={activeFilter == 'j' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('j')}><Typography>J</Typography></li>
                    <li style={activeFilter == 'k' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('k')}><Typography>K</Typography></li>
                    <li style={activeFilter == 'l' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('l')}><Typography>L</Typography></li>
                    <li style={activeFilter == 'm' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('m')}><Typography>M</Typography></li>
                    <li style={activeFilter == 'n' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('n')}><Typography>N</Typography></li>
                    <li style={activeFilter == 'o' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('o')}><Typography>O</Typography></li>
                    <li style={activeFilter == 'p' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('p')}><Typography>P</Typography></li>
                    <li style={activeFilter == 'q' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('q')}><Typography>Q</Typography></li>
                    <li style={activeFilter == 'r' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('r')}><Typography>R</Typography></li>
                    <li style={activeFilter == 's' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('s')}><Typography>S</Typography></li>
                    <li style={activeFilter == 't' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('t')}><Typography>T</Typography></li>
                    <li style={activeFilter == 'u' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('u')}><Typography>U</Typography></li>
                    <li style={activeFilter == 'v' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('v')}><Typography>V</Typography></li>
                    <li style={activeFilter == 'w' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('w')}><Typography>W</Typography></li>
                    <li style={activeFilter == 'x' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('x')}><Typography>X</Typography></li>
                    <li style={activeFilter == 'y' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('y')}><Typography>Y</Typography></li>
                    <li style={activeFilter == 'z' ? {background:"red", color:"white"} : null} onClick={()=> handleClick('z')}><Typography>Z</Typography></li>
                    {/* <li className="pag__active"><Link to="#">2</Link></li> */}
                    
                    {/* <li><Link to="#" className="pag__next"><i><FiChevronsRight /></i></Link></li> */}
                </ul>
            </div>
        </>
    );
}

export default React.memo(Pagination);
