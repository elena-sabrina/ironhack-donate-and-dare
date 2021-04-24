import DareItem from "../DareItem";
import "./DareStatusModul.scss";

const DaredStatusDareCanceled = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <h1>
        Hey {dare.dared.name}, you have rejected {dare.donor.name}'s dare. The
        money will not be donated.
      </h1>
      <div className='side-by-side'>
        <div className='Left'>
          <p>copy</p>
        </div>
        <div className='Dare'><DareItem dare={dare} donor={dare.donor} /></div>
        
      </div>
    </div>
  );
};

export default DaredStatusDareCanceled;
