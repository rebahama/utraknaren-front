import React from "react";

const ChildProps = (props) => {

  const { id, title, calculate_name, name} = props;
  return (
    <div>
      {id}
      {title}
      {name}
      {calculate_name}
    </div>
  );
};

export default ChildProps;
