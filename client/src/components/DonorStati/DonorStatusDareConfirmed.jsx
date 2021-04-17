import DareItem from "./../DareItem";

const DonorStatusDareConfirmed = ({ dare }) => {
  //handleDareConfirmation = async () => {
  // const dare = await ConfirmDare(this.props.match.params.id);
  //};

  return (
    <div>
      <h1>
        Hey {dare.donor.name},{dare.dared.name} has fulfilled your dare
      </h1>
      <h5>Alex has sent you the following dare confirmation: </h5>
      <p>Watch the video and confirm the dare</p>
      <button>Watch video</button>
      <button>Confirm Dare</button>
      <h5>Dare Status</h5>
      <p>
        {dare.dared.name} has uploaded dare video.  Awaiting your confirmation.
      </p>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DonorStatusDareConfirmed;
