import DareItem from "./../DareItem";
import "./../DaredStati/DareStatusModul.scss";

const DonorStatusDareCanceled = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <h1>
        Hey {dare.donor.name}, {dare.dared.name} has rejected your dare.
      </h1>
      <div className='side-by-side'>
        <div className='Left'>
          <p>We will send your money back</p>
        </div>
        <div className='Dare'>
          <DareItem dare={dare} donor={dare.donor} />
        </div>
      </div>
    </div>
  );
};

export default DonorStatusDareCanceled;
