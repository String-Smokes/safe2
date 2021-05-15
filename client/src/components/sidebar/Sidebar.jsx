import "./sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import AppsIcon from '@material-ui/icons/Apps';
import StoreIcon from '@material-ui/icons/Store';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import { Link } from "react-router-dom";
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <StoreIcon className="sidebarIcon" />
            <Link to="/store">
            <span className="sidebarListItemText">Store</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <Link to="/activity">
            <span className="sidebarListItemText">Activity</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <AppsIcon className="sidebarIcon" />
            <Link to="/">
            <span className="sidebarListItemText">Feeds</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <HowToVoteIcon className="sidebarIcon" />
            <Link to="/election">
            <span className="sidebarListItemText">Election</span>
           </Link>
          </li>
         
        </ul>
        {/* <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}
