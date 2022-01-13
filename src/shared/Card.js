import PropTypes from "prop-types";

function Card({ children, props }) {
  return (
    <div className={`card ${props}`} >
      {children}
    </div>
  );
}
Card.defaultProps = {
  props: "",
};

Card.propTypes = {
  props: PropTypes.string,
};

export default Card;
