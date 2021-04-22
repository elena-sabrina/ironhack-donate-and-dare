import DareItem from "./../DareItem";

const DonorStatusDareCanceled = ({ dare }) => {
  return (
    <div>
      <h1>
        Hey {dare.donor.name}, {dare.dared.name} has rejected your dare.
      </h1>
      <p>We will send your money back</p>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DonorStatusDareCanceled;
