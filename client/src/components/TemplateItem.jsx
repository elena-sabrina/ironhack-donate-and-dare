import { Link } from "react-router-dom";

const TemplateItem = ({ template }) => {
  return (
    <div>
      <h5>{template.name}</h5>
      <p>{template.description}</p>
      <p>{template.price}</p>
      <br />
      <br />
    </div>
  );
};

export default TemplateItem;
