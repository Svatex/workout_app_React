import React from "react";

function BodyMap() {
  return (
    <div>
      <h1 className="Select">Make your workout!</h1>
      <div className="svg-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.23 493.18">
          <g className="Layer_2" data-name="Layer 2">
            <g className="Body">
              <g className="Nohy">
                <ellipse
                  className="prava_noha"
                  className="cls-1"
                  cx="215.23"
                  cy="375.7"
                  rx="17.7"
                  ry="123.7"
                  transform="translate(-111.74 91.86) rotate(-19.23)"
                />
                <ellipse
                  className="leva_noha"
                  className="cls-1"
                  cx="125.25"
                  cy="375.73"
                  rx="123.7"
                  ry="17.7"
                  transform="translate(-270.77 370.22) rotate(-70.77)"
                />
              </g>
              <g className="Ruce">
                <path
                  className="ruce1"
                  className="cls-2"
                  d="M263.93,141.6c-46.8-43.6-88.4-73.3-93.1-66.3a1.14,1.14,0,0,0-.3.8,6.89,6.89,0,0,0-.3-.8c-4.7-7-46.3,22.7-93.1,66.3S-3.77,226.1.93,233.1s46.3-22.7,93.1-66.3c42.6-39.7,74.7-77.2,76.6-88.8,1.9,11.6,34,49.1,76.6,88.8,46.8,43.6,88.4,73.3,93.1,66.3C344.83,226.1,310.63,185.2,263.93,141.6Z"
                />
              </g>
              <g className="Hrud">
                <ellipse
                  className="Hrudnik"
                  className="cls-2"
                  cx="170.43"
                  cy="182.3"
                  rx="39.4"
                  ry="133.9"
                />
              </g>
              <g className="Hlava">
                <ellipse
                  className="hlava-2"
                  data-name="hlava"
                  className="cls-2"
                  cx="172.23"
                  cy="34.5"
                  rx="37.7"
                  ry="34"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default BodyMap;
