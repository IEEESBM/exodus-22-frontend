import React from "react";
import { useState, useEffect } from "react";
import './CountdownTimer.css';
import { getRemainingTimeUntilMsTimestamp } from './CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}



const CountdownTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs])

    function updateRemainingTime(countdown) {

        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));

    }

    return (
        <div className='countdown-timer'>
            <div className="container-value-day">
                <span className="t-value">{remainingTime.days}</span>
                <span className="n-value">DAYS</span>
            </div>
            <div className="container-value">
                <span className="t-value">:{remainingTime.hours}</span>
                <span className="n-value">HOURS</span>
            </div>
            <div className="container-value">
                <span className="t-value">:{remainingTime.minutes}</span>
                <span className="n-value">MINUTES</span>
            </div>
            <div className="container-value">
                <span className="t-value">:{remainingTime.seconds}</span>
                <span className="n-value">SECONDS</span>
            </div>
        </div>
    );
}

export default CountdownTimer;