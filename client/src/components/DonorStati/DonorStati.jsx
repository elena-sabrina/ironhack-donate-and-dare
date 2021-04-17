import DonorStatusDareConfirmed from "./DonorStatusDareConfirmed";
import DonorStatusDareSent from "./DonorStatusDareSent";
import DonorStatusDareUploaded from "./DonorStatusDareUploaded";

const DonorStati = ({ dare }) => {
  return (
    <div>
      {(dare.status === "dare-sent" && <DonorStatusDareSent dare={dare} />) ||
        (dare.status === "video-uploaded" && (
          <DonorStatusDareConfirmed dare={dare} />
        )) ||
        (dare.status === "confirmed" && (
          <DonorStatusDareUploaded dare={dare} />
        )) || <p> Status not found</p>}
    </div>
  );
};

export default DonorStati;
