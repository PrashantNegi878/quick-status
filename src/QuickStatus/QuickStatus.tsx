import { useState } from 'react';
import './QuickStatus.css';
import React from 'react';
import { JSX } from 'react';

interface QuickStatusProps{
  bottom?:string,
  right?:string,
  onlineBgColor?:string,
  onlineContent?:string|JSX.Element,
  offlineBgColor?:string,
  offlineContent?:string|JSX.Element
}

// eslint-disable-next-line react/prop-types
const QuickStatus = ({bottom='10px',right='10px',onlineBgColor='rgba(0, 128, 0, 0.5)',onlineContent='😊 You are now connected to the Internet',
                            // eslint-disable-next-line react/prop-types
                            offlineBgColor='rgba(255, 0, 0, 0.5)',offlineContent='😢 The Internet connection has been lost'}:QuickStatusProps) => {

    const [display,setDisplay] =useState(true);
    const [displayData,setDisplayData] = useState(<></>);

    const styles={position:'absolute',bottom:bottom,right:right,paddingLeft:'10px',paddingRight:'10px',borderRadius: '5px'};
    const onlineStyles:Object={...styles,backgroundColor:onlineBgColor,boxShadow: `0px 0px 15px 1px ${onlineBgColor}`};
    const offlineStyles:Object={...styles,backgroundColor:offlineBgColor,boxShadow: `0px 0px 15px 1px ${offlineBgColor}`};
    const closeButtonCss={width:'15px',height:'15px',paddingLeft:'10px',cursor:'pointer'};

    const CloseButton = ()=>{
      return <img onClick={()=>setDisplay(false)} style={closeButtonCss} src='../assets/close.svg' alt='X'/>
    }

    window.ononline = () => {
        setDisplayData(<div className='online-indicator-container' style={onlineStyles}>{onlineContent}<CloseButton/></div>);
        setDisplay(true);
    };

    window.onoffline = () => {
        setDisplayData(<div className='offline-indicator-container' style={offlineStyles}>{offlineContent}<CloseButton/></div>);
        setDisplay(true);
    };

  return (
    <div>{display && displayData}</div>
  );
};

export default QuickStatus;
