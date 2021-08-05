import PropTypes from "prop-types";

import styles from "components/FullscreenWrapper.module.scss";

function FullscreenWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

FullscreenWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FullscreenWrapper;
