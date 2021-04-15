import { Link } from "react-router-dom";
import TemplateItem from "./TemplateItem";

import "./../styles/TemplateList.scss";

const TemplateList = ({ templates }) => {
  return (
    <div className='TemplateList'>
      {templates.map((template) => (
        <Link key={template._id} to={`/dare/create/${template._id}`}>
          <TemplateItem template={template} />
        </Link>
      ))}
    </div>
  );
};

export default TemplateList;
