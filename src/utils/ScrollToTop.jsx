import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types"

/**
 * When the location changes, scroll to the top of the page.
 * @param {Element}
 * @return Children of Element
*/
const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

ScrollToTop.propTypes ={
  props: PropTypes.element
}

export default ScrollToTop;