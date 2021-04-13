import { Link } from "react-router-dom";

const DareItem = ({ dare }) => {
  return (
    <div>
      <h5>{dare.dared.name}</h5>
      <p>{dare.price}</p>
      <br />
      <br />
    </div>
  );
};

export default DareItem;
