const PackageBox = ({ data }) => {

  
  return (
    <>
      {/* <div className="col-xl-4 col-lg-6 my-5 bg-warning package-box-col"> */}
      <div className="my-5 package-box-col">
        <div className="package-box">
          <div className="packages-box-head">
            <span>{data.name}</span>
            <div className="dollor-tag">
              <span>$</span>
              <span>.00</span>
            </div>
            <h1>{data.price}</h1>
            <span>Package</span>
          </div>
          <div className="packages-detail">
            <ul>
              {data?.packages.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
              {data.values.length > 0 ? (
                <>
                  <li
                   className="AddValue"
                  >
                    Value Added Services
                  </li>
                  {
                  data?.values.map((data, i) => <li key={i}>{data}</li>)
                  }
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="buy text-center">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageBox;
