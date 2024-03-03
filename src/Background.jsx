import React,{useState, useEffect} from 'react'

function Background (props) {

    useEffect ( () => {
        document.getElementById(`star${props.index}`).style.top = props.top;
        document.getElementById(`star${props.index}`).style.right = props.right;
        document.getElementById(`star${props.index}`).style.fontSize = '0.5em';
        document.getElementById(`star${props.index}`).style.position = 'absolute';
        const starUpdate = setInterval(() => {
            document.getElementById(`star${props.index}`).classList.toggle("star-toggle");
        }, props.blink);

        return () => { clearInterval(starUpdate);}
    }, []);
    console.log(props.index);
    return(
        <div id={`star${props.index}`} className='star-toggle'>.</div>
    );
}

export default Background;