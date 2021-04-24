import { Link } from "react-router-dom";
import "./../DaredStati/DareStatusModul.scss";

const DonorStatusDareConfirmed = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <div className='Center'>
        <h1>
          Thank you <br />
          for your confirmation
        </h1>
        <p>
          Your donation of {dare.price} Euros will be sent to {dare.charity}
        </p>
        <button>
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default DonorStatusDareConfirmed;
