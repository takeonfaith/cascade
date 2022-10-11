import type { NextPage } from "next";
import { Sidebar, Content, Header } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full bg-neutral-700">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Home;
