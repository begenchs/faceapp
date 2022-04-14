import React from "react";

const Rank = ({ name, entry }) => {
  return (
    <div>
      <div className='white f3'>{`${name}, your current entry count is ...`}</div>
      <div className='white f1'> {entry}</div>
    </div>
  );
};

export default Rank;
