import React, { useEffect, useState } from "react";
import axios from "axios";
import ChildProps from "./ChildProps";
import { axiosReq } from "../api/axiosDefault";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const ShowAll = () => {
  const [calculate, setCalculate] = useState({ results: [] });
  const currentUser = useCurrentUser()
const id=currentUser?.profile_id
  console.log(id)

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq(`/posts/?calculate__price=&owner__profile=${id}`);
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
