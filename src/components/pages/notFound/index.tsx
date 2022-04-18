import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const mainPath = process.env.REACT_APP_MAIN_PATH!

interface IProps {
  error: {
    message: string;
    status: number;
  }
}

const NotFound: React.FC<IProps> = ({error}) => {
  const [time, setTime] = useState(5)
  const navigate = useNavigate();

  useEffect(() => {
    if(time === 0) {
      navigate(mainPath)
    }
    const timer = setInterval(() => {
      setTime(time - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [time])

  return (
    <div className='not-found'>
      <h1 style={{color: '#ff5050'}}>{error.status}</h1>
      <h2>{error.message}</h2>
      <p className='error'>You will be redirected to home page in <span>{time}</span> seconds</p>
    </div>
  )
}

export default NotFound