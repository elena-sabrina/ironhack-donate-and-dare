import DareItem from "../DareItem";

const DonorStatusDareRejected = ({ dare }) => {
  return (
    <div>
      <h1>
        You have rejected {dare.dared.name}'s dare. Wait until he uploads a new
        dare video.{" "}
      </h1>
      <h5>Dare Status</h5>
      <p>{dare.dared.name} hasn’t uploaded a new dare video yet</p>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DonorStatusDareRejected;
