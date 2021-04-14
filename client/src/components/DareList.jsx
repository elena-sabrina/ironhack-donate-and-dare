import { Link } from "react-router-dom";
import DareItem from "./DareItem";

const DareList = ({ dares }) => {
  return (
    <div>
      {dares.map((dare) => (
        <Link key={dare._id} to={`/dare/${dare._id}/donor`}>
          <DareItem dare={dare} />
        </Link>
      ))}
    </div>
  );
};

export default DareList;
