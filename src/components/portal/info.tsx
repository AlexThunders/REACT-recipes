import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeUnderDevInfoAction } from '../../actions/user';
import underDevImage from '../../assets/website-devc.webp'

const UnderDevInfo:React.FC = () => {
  const [time, setTime] = useState(13)
  const dispatch = useDispatch()

  useEffect(() => {
    if(time === 0) {
      dispatch(closeUnderDevInfoAction())    
    }
    const timer = setInterval(() => {
      setTime(time - 1)
    },1000)  
      return () => clearInterval(timer)
  },[time])

  const handleClosePortal = () => {
    dispatch(closeUnderDevInfoAction())   
  }

  return ReactDom.createPortal(
    <div className="under-dev-portal">
      <div onClick={handleClosePortal}>
        <i className="fas fa-window-close"></i>
      </div>
      <p>This App is <br /><strong style={{letterSpacing: "2px", fontSize: "26px"}}>UNDER DEVELOPMENT</strong></p>
      <p>Don't be surprised if some features do not work</p>
      <img src={underDevImage} alt="under-development-info" />
      <p className='timerPar'>this window closes in <span> {time} </span> seconds</p>
    </div>,
    document.getElementById('under-dev-portal') as HTMLDivElement
  );
}
 
export default UnderDevInfo;
