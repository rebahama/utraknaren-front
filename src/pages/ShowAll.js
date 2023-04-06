import React, { useEffect, useState } from "react";
import axios from "axios";

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
        return <div key={calculate.id}>
            {calculate.name}
            {calculate.content}
            </div>;
      })}
    </div>
  );
};

export default ShowAll;
