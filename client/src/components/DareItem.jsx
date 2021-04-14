import { Link } from "react-router-dom";

const DareItem = ({ donor, dare }) => {
  return (
    <div>
      <h5>{dare.dared.name}</h5>
      <p>{dare.price}</p>
      <p>{dare.template.name}</p>
      <br />
      <br />
    </div>
  );
};

export default DareItem;
