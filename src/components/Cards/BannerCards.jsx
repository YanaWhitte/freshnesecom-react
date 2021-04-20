const BannerCards = () => {
  return <div className="green-card-row row">
    <div className="column card card-1">
      <div className="card-content">
        <p className="subfocus">Banner subfocus</p>
        <h2 className="card-title">Space for heading</h2>
        <div className="recepies-btn bottom row">
          <a href="#">Read recepies</a>
          <img src="icons/arrow-green-right.svg" alt="arrow icon" />
        </div>
      </div>
    </div>
    <div className="column card card-2">
      <div className="card-content">
        <p className="subfocus">Banner subfocus</p>
        <h2 className="card-title">Space for heading</h2>
        <div className="recepies-btn bottom row">
          <a href="#">Read recepies</a>
          <img src="icons/arrow-green-right.svg" alt="arrow icon" />
        </div>
      </div>
    </div>
  </div>
}

export default BannerCards;