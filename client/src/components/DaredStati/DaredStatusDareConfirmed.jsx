import DareItem from "./../DareItem";

const DaredStatusDareConfirmed = ({ dare }) => {
  return (
    <div>
      <h1>
        Hey {dare.dared.name},{dare.donor.name} has confirmed your dare. Thank
        you for enabling...
      </h1>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DaredStatusDareConfirmed;
