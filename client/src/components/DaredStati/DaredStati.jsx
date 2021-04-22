import DaredStatusDareConfirmed from "./DaredStatusDareConfirmed";
import DaredStatusDareSent from "./DaredStatusDareSent";
import DaredStatusDareUploaded from "./DaredStatusDareUploaded";

const DonorStati = ({ dare }) => {
  return (
    <div>
      {(dare.status === "dare-sent" && <DaredStatusDareSent dare={dare} />) ||
        (dare.status === "video-uploaded" && (
          <DaredStatusDareUploaded
            dare={dare}
            onStatusChange={this.handleStatusChangeSubmission}
          />
        )) ||
        (dare.status === "confirmed" && (
          <DaredStatusDareConfirmed dare={dare} />
        )) || <p> Status not found</p>}
    </div>
  );
};

export default DonorStati;
