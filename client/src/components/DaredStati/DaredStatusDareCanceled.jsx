import DareItem from "../DareItem";

const DaredStatusDareCanceled = ({ dare }) => {
  return (
    <div>
      <h1>
        Hey {dare.dared.name}, you have rejected {dare.donor.name}'s dare. The
        money will not be donated.
      </h1>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DaredStatusDareCanceled;
