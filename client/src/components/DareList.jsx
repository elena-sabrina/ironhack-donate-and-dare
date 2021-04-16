import { Link } from "react-router-dom";
import DareItem from "./DareItem";

import "./../styles/DareList.scss";

const DareList = ({ dares }) => {
  return (
    <div className='DareList'>
      {dares.map((dare) => (
        <Link key={dare._id} to={`/dare/${dare._id}/donor`}>
          <DareItem dare={dare} />
        </Link>
      ))}
    </div>
  );
};

export default DareList;
