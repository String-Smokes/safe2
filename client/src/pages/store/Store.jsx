import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Storefeed from "../../components/storefeed/Storefeed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./store.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="sidebarContainer">
        <Sidebar />
        </div>
        
        <Storefeed/>
        {/* <Rightbar/> */}
      </div>
    </>
  );
}
