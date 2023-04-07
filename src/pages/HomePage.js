import React from "react";
import styles from "../styles/HomePage.module.css";
import { useCurrentUser } from "../context/CurrentUserContext";

const HomePage = () => {
  const currentUser = useCurrentUser();
  return <div>HomePage

    {currentUser?.username}
  </div>;
};

export default HomePage;
