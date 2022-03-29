const SectionSix = () => {
  return (
    <div className="container-fluid  bg-white ">
      <div className="text-center ">
        <h2 className="text-uppercase  section-6">How to buy</h2>
      </div>
      <div className="d-md-flex justify-content-between ">
        <div className="border-0 shadow-lg p-5 card-gap fontsizecard">
          <h3 className="text-uppercase fw-bolder ">step 1</h3>
          <p className="fontsizecard">Llama Coin is available on BSC20.</p>
          <p className="fontsizecard">
            MetaMask is a third party browser wallet.
          </p>
          <p className="fontsizecard">
            Visit metamask.io to download the extension.
          </p>
          <p className="fontsizecard">Setup your wallet.</p>
        </div>
        <div className="border-0 shadow-lg p-5 card-gap">
          <h3 className="text-uppercase fw-bolder ">step 2</h3>
          <p className="fontsizecard">Llama Coin is available on BSC20.</p>
          <p className="fontsizecard">
            Visit metamask.io to download the extension.
          </p>
          <p className="fontsizecard">Setup your wallet.</p>
        </div>{" "}
        <div className="border-0 shadow-lg p-5 card-gap">
          <h3 className="text-uppercase fw-bolder ">step 3</h3>
          <p className="fontsizecard">Llama Coin is available on BSC20.</p>
          <div className="text-center ">
            <button type="button" class="btn btn-dark btn-lg px-5 py-3 fs-5 ">
              CA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
