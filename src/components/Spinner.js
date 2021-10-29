import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
 
const Spinner = (props) => {

const { promiseInProgress } = usePromiseTracker({area: props.area});
 
  return (
    <div style={spinnerStyle}>
    {
     (promiseInProgress === true) ?
        <Loader
        type="TailSpin"
        color="#f8c247"
        height={40}
        width={40}
        timeout={7000} //3 secs
        />
      :
        null
    }
  </div>
  )
};


const spinnerStyle ={
  position: "fixed", 
  top: "50%", 
  left: "50%", 
  transform: "translate(-50%, -50%)",
}

export default Spinner