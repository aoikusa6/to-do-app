import { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import Card from "../shared/Card";
import InfoContext from "../shared/InfoContext";
const initialValues = {
  input: "",
  date: "",
  level: "Normal",
};
function InputContainer() {
  const [values, setValues] = useState(initialValues);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addInfo, infoEdit, editInfo } = useContext(InfoContext);
  useEffect(() => {
    if (editInfo.edit === true) {
      setBtnDisabled(false)
      setValues(infoEdit.info)
      setValues(infoEdit.date)
      setValues(infoEdit.level)
    }
  }, [editInfo])
  const handleInfo = (e) => {
    const { name, value } = e.target;
    const time = new Date(value);
    const now = Date.now();
    setValues({
      ...values,
      [name]: value,
    });
    if (
      (name === "input" && value === "") ||
      (name === "date" && value === "")
    ) {
      setBtnDisabled(true);
      setMessage(null);
      return;
    }
    if (
      (name === "input" && value.trim().length <= 3) ||
      (name === "date" && time.getTime() < now)
    ) {
      setBtnDisabled(true);
      setMessage(
        "Task must be at least 3 characters and date must be at least today"
      );
      return;
    }
    setMessage(null);
    setBtnDisabled(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = { ...values };
    addInfo(newInfo);
  };
  return (
    <Card props="inputContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="input"
            type="text"
            id="infoInput"
            placeholder="Please enter your task"
            value={values.input}
            onChange={handleInfo}
          />
          <label htmlFor="dateInput">Date:</label>
          <input
            name="date"
            type="date"
            id="dateInput"
            value={values.date}
            onChange={handleInfo}
          />
          <label htmlFor="Level">Level</label>
          <select name="level" onChange={handleInfo} value={values.level}>
            <option value="Normal">Normal</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Urgent">Urgent</option>
          </select>
          <button type="submit" disabled={btnDisabled} className="btn">
            Submit
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
export default InputContainer;
