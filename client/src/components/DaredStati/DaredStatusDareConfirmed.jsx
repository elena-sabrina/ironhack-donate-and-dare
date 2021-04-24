import DareItem from "./../DareItem";
import "./DareStatusModul.scss";

const DaredStatusDareConfirmed = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <h1>
        Hey {dare.dared.name},{dare.donor.name} has confirmed your dare. Thank
        you for enabling...
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

export default DaredStatusDareConfirmed;
