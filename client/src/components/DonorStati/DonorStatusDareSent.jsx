import DareItem from "./../DareItem";
import "./../DaredStati/DareStatusModul.scss";

const DonorStatusDareSent = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <h1>
        Hey {dare.donor.name}, <br /> {dare.dared.name} has not fulfilled your
        dare yet.
      </h1>
      <div className='side-by-side'>
        <div className='Left'>
          <h5>Dare Status</h5>
          <p>{dare.dared.name} hasn’t fulfilled your dare yet.</p>
        </div>

        <div className='Dare'>
          <DareItem dare={dare} donor={dare.donor} />
        </div>
      </div>
    </div>
  );
};

export default DonorStatusDareSent;
