import DareItem from "../DareItem";
import "./../DaredStati/DareStatusModul.scss";

const DonorStatusDareRejected = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <h1>
        You have rejected {dare.dared.name}'s dare. Wait until he uploads a new
        dare video.{" "}
      </h1>
      <div className='side-by-side'>
        <div className='Left'>
          <h5>Dare Status</h5>
          <p>{dare.dared.name} hasn’t uploaded a new dare video yet</p>
        </div>
        <div className='Dare'>
        <DareItem dare={dare} donor={dare.donor} />
       </div>
      </div>
    </div>
  );
};

export default DonorStatusDareRejected;
