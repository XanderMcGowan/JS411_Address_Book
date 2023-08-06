import React, { useState } from "react";

const LogicalNot = () => {
  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)} class="btn btn-primary mb-5">
        More info
      </button>
      {toggle && (
        <ul class="list-group">
          <li class="list-group-item"></li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      )}
    </div>
  );
};
export default LogicalNot;
