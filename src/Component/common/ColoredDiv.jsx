import PropTypes from 'prop-types';

export const DivYellow = ({ children }) => <div style={{ color: "yellow" }} >{children}</div >

DivYellow.propTypes = {
  content: PropTypes.node.isRequired,
};
