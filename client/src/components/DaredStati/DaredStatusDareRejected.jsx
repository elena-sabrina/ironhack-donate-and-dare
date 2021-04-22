import DareItem from "./../DareItem";

const DaredStatusDareRejected = ({ dare }) => {
  return (
    <div>
      <h1>
        Hey {dare.dared.name}, {dare.donor.name} havs rejected your dare. Try
        again!
      </h1>
      <form onUploadVideoSubmit={this.handleUploadVideoSubmission}>
        <input
          id='input-video'
          name='video'
          type='text'
          placeholder='Upload Video'
          value={this.state.video}
          onChange={this.handleInputChange}
          required
        />
        <button>Upload</button>
      </form>
      <DareItem dare={dare} donor={dare.donor} />
    </div>
  );
};

export default DaredStatusDareRejected;
