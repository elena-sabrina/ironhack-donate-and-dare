import { Link } from "react-router-dom";
import TemplateItem from "./TemplateItem";

const TemplateList = ({ templates }) => {
  return (
    <div>
      {templates.map((template) => (
        <Link key={template._id} to={`/`}>
          <TemplateItem template={template} />
        </Link>
      ))}
    </div>
  );
};

export default TemplateList;
