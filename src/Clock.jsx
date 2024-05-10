import React, {useState, useEffect} from "react";

function Clock () {


    const [time, setTime] = useState(new Date());

    useEffect(() => {
       const intervalId = setInterval(() =>{
        setTime(new Date());
       }, 1000) 

       return () => {
        clearInterval(intervalId);
       }
    },[]);

    function formatTime () {
        let Hours = time.getHours();
        let Minutes =  time.getMinutes();
        let Seconds = time.getSeconds();

        const meridian = Hours >=12 ? "PM" : "AM";

        Hours = Hours % 12 || 12;

        return `${padZero(Hours)}:${padZero(Minutes)}:${padZero(Seconds)} ${padZero(meridian)}`
    }

    function padZero (number) {
        return (number < 10 ? "0" : "") + number;
    }






    return(
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>);
}

export default Clock