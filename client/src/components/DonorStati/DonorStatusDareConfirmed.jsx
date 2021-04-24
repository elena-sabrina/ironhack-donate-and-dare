import DareItem from "./../DareItem";
import "./../DaredStati/DareStatusModul.scss";

const DonorStatusDareConfirmed = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <h1>
        Hey {dare.donor.name},{dare.dared.name} has fulfilled your dare
      </h1>
      <div className='side-by-side'>
        <div className='Left'>
          <p>copy</p>
        </div>
        <div className='Dare'>
          <DareItem dare={dare} donor={dare.donor} />
        </div>
      </div>
    </div>
  );
};

export default DonorStatusDareConfirmed;
