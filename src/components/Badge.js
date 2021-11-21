const Badge = ({ Avatar, Username, FullName, Description }) => {
  return (
    <div className="Badge">
      <div className="BadgeContainer">
        <img
          src="https://i.imgur.com/uIvAIyI.png"
          alt="Background"
          className="BadgeBackground"
        />
        <div className="BadgeContent">
          <div className="Thumbnail">
            <img src={Avatar} alt={FullName} />
          </div>
          <div className="Content">
            <h1>{FullName}</h1>
            <h2>
              <em>{Username}</em>
            </h2>
            <p>{Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
