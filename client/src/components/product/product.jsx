import "./product.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Product({ post }) {
  const [bid, setbid] = useState(post.bids.length);
  const [isbided, setIsbided] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsbided(post.bids.includes(currentUser._id));
  }, [currentUser._id, post.bids]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const bidHandler = () => {
    if(currentUser._id !== post.userId){
      try {
        axios.put("/posts/" + post._id + "/bid", { userId: currentUser._id });
      } catch (err) {}
      setbid(isbided ? bid - 1 : bid + 1);
      setIsbided(!isbided);
    }
    else{
      console.log("you cannot bid on you own product");
    }
  };
  return (
    <div className="product">
      <div className="productWrapper">
        <div className="productTop">
          <div className="productTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="productProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="productUsername">{user.username}</span>
            <span className="productDate">{format(post.createdAt)}</span>
          </div>
          <div className="productTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="productCenter">
          <span className="productText">{post?.desc}</span>
          <img className="productImg" src={PF + post.img} alt="" />
          <div className="productText">Price: {post?.price}</div>
        </div>
        <div className="productBottom">
          <div className="productBottomLeft">
            {/* <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={bidHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={bidHandler}
              alt=""
            /> */}
            <button className="bidProduct" onClick={bidHandler}>Bid</button>
            {/* <span className="postbidCounter">{bid}</span> */}
          </div>
          {/* <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
