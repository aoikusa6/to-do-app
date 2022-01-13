import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "../shared/Card";
function InfoCard({ item, deleteInfo }) {
  return (
    <Card props="info">
      <h2>{item.input}</h2>
      <button className="close">
        <FaTimes color="purple" onClick={()=>deleteInfo(item.id)} />
      </button>
      <button className="edit">
        <FaEdit color="purple" />
      </button>
      <h3>Deadline: {item.date}</h3>
      <button className="level">{item.level}</button>
    </Card>
  );
}
InfoCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default InfoCard;