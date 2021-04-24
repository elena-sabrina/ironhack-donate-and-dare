import "./DareItem.scss";

//import glass from "./../styles/images/glass.jpg";

const DareItem = ({ donor, dare }) => {
  return (
    <div className='DareItem'>
      <img src={dare.template.image} alt='glass' />
      <div>
        <h5>{dare.template.name}</h5>
        <p>{dare.template.description}</p>
        <br />
        <h6>Donation</h6>
        <p>
          {dare.price} Euros to {dare.charity}
        </p>
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
