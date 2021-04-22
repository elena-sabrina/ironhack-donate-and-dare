import DareItem from "./../DareItem";

const DaredStatusDareUploaded = ({ dare }) => {
  return (
    <div>
      <h1>Hey {dare.dared.name},thank you for uploading your dare video.</h1>
      <h5>Dare Status</h5>
      <p>Awaiting dare confirmation from {dare.donor.name} </p>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DaredStatusDareUploaded;
