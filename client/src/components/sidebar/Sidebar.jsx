import "./sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import AppsIcon from '@material-ui/icons/Apps';
import StoreIcon from '@material-ui/icons/Store';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <StoreIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Store</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Activity</span>
          </li>
          <li className="sidebarListItem">
            <AppsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feeds</span>
          </li>
          <li className="sidebarListItem">
            <HowToVoteIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Election</span>
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
