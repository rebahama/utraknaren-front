import React, { useEffect, useState } from "react";
import axios from "axios";
import ChildProps from "./ChildProps";

const ShowAll = () => {
  const [calculate, setCalculate] = useState({ results: [] });

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get(
          "https://utraknaren-drf.herokuapp.com/posts/"
        );

        setCalculate(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);

  return (
    <div>
      {calculate.results.map((calculate) => {
        return <ChildProps key={calculate.id} {...calculate} />;
      })}
    </div>
  );
};

export default ShowAll;
