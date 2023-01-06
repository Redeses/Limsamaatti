import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

//the functions are used by Prompt.js to close the window when clicked outside of the window
function useOutsideAlerter(ref,props) {
    var test="";
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.change();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  
  useOutsideAlerter(wrapperRef,props);

  return <div style={{display:props.noLert}} ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;