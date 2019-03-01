import React from "react";

export default ({ hours, minutes, seconds }) => {
  return (
    <div>
      <h1>
        {hours || "00"}:{minutes || "00"}:{seconds || "00"}
      </h1>
    </div>
  );
};
