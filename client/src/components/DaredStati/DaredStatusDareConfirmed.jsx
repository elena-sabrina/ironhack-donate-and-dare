import { Link } from "react-router-dom";
import "./DareStatusModul.scss";

const DaredStatusDareConfirmed = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <div className='Center'>
        <h1>
          Thank you <br />
          for your dare.
        </h1>
        <p>
          {dare.donor.name} has accepted your dare and the donation of{" "}
          {dare.price} Euros will be sent to {dare.charity}
        </p>
        <button>
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default DaredStatusDareConfirmed;
