import React, {useState, useEffect} from 'react'

function Clock(){

    const [time, setTime] = useState(new Date());
    
    useEffect ( () => {
        const timeUpdate = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { clearInterval(timeUpdate);}
    }, []);

    function displayTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = (hours >= 12 ? "PM" : "AM");

        hours = hours % 12;
        hours = addZero(hours);
        minutes = addZero(minutes);
        seconds = addZero(seconds);


        return (`${hours}:${minutes}:${seconds} ${meridiem}`);
    }

    function addZero(unit){
        return (unit >= 10 ? "" : "0") + unit;
    }


    return(
        <div className='container'>
            <div className='time'>{displayTime()}</div>
        </ div>
    );
}

export default Clock;