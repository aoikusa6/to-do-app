import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import InfoContext from "../shared/InfoContext";
import Card from "../shared/Card";
function InfoCard({ item }) {
  const { deleteInfo, editInfo } = useContext(InfoContext);
  return (
    <Card props="info">
      <h2>{item.input}</h2>
      <button className="close">
        <FaTimes color="purple" onClick={() => deleteInfo(item.id)} />
      </button>
      <button className="edit">
        <FaEdit color="purple" onClick={() => editInfo(item)} />
      </button>
      <h3>Deadline: {item.date}</h3>
      <button className="level">{item.level}</button>
    </Card>
  );
  }
export default InfoCard;
