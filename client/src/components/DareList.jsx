import { Link } from "react-router-dom";
import DareItem from "./DareItem";

import "./DareList.scss";

const DareList = ({ dares, donor }) => {
  return (
    <div className='DareList'>
      {dares.map((dare) => (
        <Link key={dare._id} to={`/dare/${dare._id}/donor`}>
          <DareItem dare={dare} donor={donor}/>
        </Link>
      ))}
    </div>
  );
};

export default DareList;
