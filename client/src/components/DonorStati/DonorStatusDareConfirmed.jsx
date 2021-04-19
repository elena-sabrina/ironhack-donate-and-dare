import DareItem from "./../DareItem";

const DonorStatusDareConfirmed = ({ dare }) => {
  return (
    <div>
      <h1>
        Hey {dare.donor.name},{dare.dared.name} has fulfilled your dare
        
      </h1>
    </div>
  );
};

export default DonorStatusDareConfirmed;
