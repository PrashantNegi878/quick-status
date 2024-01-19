import React, { useState, JSX } from "react";

interface QuickStatusProps {
  bottom?: string;
  right?: string;
  onlineBgColor?: string;
  onlineContent?: string | JSX.Element;
  offlineBgColor?: string;
  offlineContent?: string | JSX.Element;
}

const animation = {
  online: {
    animation: "online-animate 3s linear",
    "@keyframes online-animate": {
      from: {
        opacity: "0",
      },
      to: {
        opacity: "1",
      },
    },
  },
  offline: {
    animation: "offline-animate 3s linear",
    "@keyframes offline-animate": {
      from: {
        opacity: "0",
      },
      to: {
        opacity: "1",
      },
    },
  },
};

export const QuickStatus = ({
  bottom = "10px",
  right = "10px",
  onlineBgColor = "rgba(0, 128, 0, 0.5)",
  onlineContent = "😊 You are now connected to the Internet",
  offlineBgColor = "rgba(255, 0, 0, 0.5)",
  offlineContent = "😢 The Internet connection has been lost",
}: QuickStatusProps) => {
  const [display, setDisplay] = useState(true);
  const [displayData, setDisplayData] = useState(<></>);

  const onlineAnimation = { animation: "online-animate 2s ease" };
  const offlineAnimation = { animation: "offline-animate 2s ease" };
  const styles = {
    position: "absolute",
    bottom: bottom,
    right: right,
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
    display: "flex",
    fontSize: "14px",
    padding: "12px",
    justifyContent: "space-between",
    fontFamily: "sans-serif",
  };

  const onlineStyles:Object = {
    ...styles,
    ...onlineAnimation,
    backgroundColor: onlineBgColor,
    boxShadow: `0px 0px 15px 1px ${onlineBgColor}`,
  };
  const offlineStyles:Object = {
    ...styles,
    ...offlineAnimation,
    backgroundColor: offlineBgColor,
    boxShadow: `0px 0px 15px 1px ${offlineBgColor}`,
  };
  const closeButtonCss = {
    width: "15px",
    height: "15px",
    paddingLeft: "5px",
    cursor: "pointer",
  };

  const CloseButton = () => {
    return (
      <div onClick={() => setDisplay(false)} style={closeButtonCss}>
        ✖️
      </div>
    );
  };

  window.ononline = () => {
    setDisplayData(
      <div className="online-indicator-container" style={onlineStyles}>
        {onlineContent}
        <CloseButton />
      </div>
    );
    setDisplay(true);
  };

  window.onoffline = () => {
    setDisplayData(
      <div className="offline-indicator-container" style={offlineStyles}>
        {offlineContent}
        <CloseButton />
      </div>
    );
    setDisplay(true);
  };

  return (
    <div>
      {display && displayData}
      <style>
        {`
        @keyframes offline-animate {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes online-animate {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}
      </style>
    </div>
  );
};

export default QuickStatus;
