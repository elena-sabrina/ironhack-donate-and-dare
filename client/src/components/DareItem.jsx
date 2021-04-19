import "./DareItem.scss";

import glass from "./../styles/images/glass.jpg";

const DareItem = ({ donor, dare }) => {
  return (
    <div className='DareItem'>
      <img src={glass} alt='glass' />
      <div>
        <h5>
          {dare.template.name} - {dare.status}
        </h5>
        <p>{dare.template.description}</p>
        <p className='Price'>{dare.price} Euros</p>
        <p>To {dare.charity}</p>
        <h6>Donor</h6>
        <p>{donor.name}</p>
        <p>{donor.email}</p>
        <h6>Dared</h6>
        <p>{dare.dared.name}</p>
        <p>{dare.dared.email}</p>
      </div>
    </div>
  );
};

export default DareItem;
