import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StateContext } from '../StateProvider'

const Clock = () => {
    //const [time, setTime] = useState(100)
    //const [isActive, setIsActive] = useState(false)
    const {time, setTime, isActive, setIsActive, initTime} = useContext(StateContext)
    useEffect(() => {
       if(isActive && time > 0) {
        const interval = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);

        return () => clearInterval(interval);
       }
    },[time, isActive])

    const toggleClock = () => {
        setIsActive(!isActive)
        isActive(false)
    }


    const getTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
    }

    const resetTime = () => {
        setTime(initTime)
    }

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>{isActive ? "Pause" : "Start"}</StartPauseButton>
     {time === 0 && <ResetButton onClick={resetTime}>RESET</ResetButton>} 
    </ClockContainer>
  )
}

export default Clock
const ClockContainer = styled.div`
display: grid;
place-items: center;
`;
const TimerText = styled.h1`
font-size: 10rem;
`;
const StartPauseButton = styled.button`
all: unset;
text-align: center;
font-size: 3rem;
text-transform: uppercase;
letter-spacing: 1rem;
cursor: pointer;
`;
const ResetButton = styled(StartPauseButton)`
color: red;
`;