import React from "react";

export default ({ hours, minutes, seconds }) => {
  return (
    <div>
      <h1>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
};
