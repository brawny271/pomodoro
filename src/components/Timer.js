import React from 'react';
import { useState, useEffect } from 'react';
import '../components/timer.css'



function Timer({ duration, onTimerComplete }) {

    const [time, setTime] = useState(duration)
    const [active,setActive] = useState(false);


    useEffect(function(){

        let interval;

        if(active){
            interval= setInterval(() => {setTime((preTime)=>{

                if(preTime === 0){
                    clearInterval(interval);
                    onTimerComplete();
                    return 0;
                }

                return preTime - 1;
            });
  
        },1000)

        }else{
            clearInterval(interval)
        }

        return () => clearInterval(interval);

    },[active, onTimerComplete])


    const setStart = () => {
        setActive(true);
      };
    
      const setPause = () => {
        setActive(false);
      };
    

      const setReset = () => {
        setActive(false);
        setTime(duration);
      };


      const remainTime = (seconds) => {

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };
    

  return (
    <div className='timer-container'>
    <h2 className='heading'>TIMER</h2>
    <p className='timer'>{remainTime(time)}</p>
    <button onClick={setStart}>Start</button>
    <button onClick={setPause}>Pause</button>
    <button onClick={setReset}>Reset</button>
  </div>
  )
}

export default Timer
