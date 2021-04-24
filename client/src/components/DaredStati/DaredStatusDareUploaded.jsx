import DareItem from "./../DareItem";
import "./DareStatusModul.scss";

const DaredStatusDareUploaded = ({ dare }) => {
  return (
    <div className='Body DareStatusModul'>
      <h1>Hey {dare.dared.name},thank you for uploading your dare video.</h1>
      <div className='side-by-side'>
        <div className='Left'>
          <h5>Dare Status</h5>
          <p>Awaiting dare confirmation from {dare.donor.name} </p>
        </div>
        <div className='Dare'>
        <DareItem dare={dare} donor={dare.donor} />
       </div>
      </div>
    </div>
  );
};

export default DaredStatusDareUploaded;
