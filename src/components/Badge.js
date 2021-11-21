import { createRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

const Badge = ({ Avatar, Username, FullName, Description }) => {
  const Ref = createRef();
  const handleDownload = e => {
    e.preventDefault();
    exportComponentAsPNG(Ref, {
      html2CanvasOptions: { backgroundColor: null }
    });
  };
  return (
    <div className="Badge">
      <div className="p-3" ref={Ref}>
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
              {Description}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <button className="btn btn-primary" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Badge;
