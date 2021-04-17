import DareItem from "./../DareItem";

const DonorStatusDareUploaded = ({ dare }) => {
  return (
    <div>
      <h1>
        Hey {dare.donor.name},{dare.dared.name} has not fulfilled your dare
      </h1>
      <h5>Dare Status</h5>
      <p>{dare.dared.name} hasn’t fulfilled your dare yet</p>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DonorStatusDareUploaded;
