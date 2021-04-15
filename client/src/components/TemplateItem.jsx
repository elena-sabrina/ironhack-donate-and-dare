import { Link } from "react-router-dom";
import "./../styles/TemplateItem.scss";

import glass from "./../styles/images/glass.jpg";

const TemplateItem = ({ template }) => {
  return (
    <div className='TemplateItem'>
      <img src={glass} alt='glass' />
      <div>
        <h5>{template.name}</h5>
        <p>{template.description}</p>
        <p className='Price'>{template.price} Euros</p>
      </div>
    </div>
  );
};

export default TemplateItem;
