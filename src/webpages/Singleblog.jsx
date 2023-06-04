import Sidebar from "../Components/sidebar";
import SinglePost from "../Components/Singlepost";
import Header from "../Components/Header";


export default function Singleblog() {
  return (
    <div className="single">
      {/* <Header /> */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}