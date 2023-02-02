import React from "react";
import { MainLayout } from "./MainLayout";
import CovidState from "../containers/CovidState";

const Home = () => {
  return (
    <MainLayout>
      <CovidState />
    </MainLayout>
  );
};

export default Home;
