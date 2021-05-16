import { useContext, useEffect, useState } from "react";
import Product from "../product/product";
import ShareProduct from "../shareProduct/ShareProduct";
import "./storefeed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProduts = async () => {
      // const res = username
      //   ? await axios.get("/posts/profile/" + username)
      //   : await axios.get("posts/timeline/" + user._id);
      const res = await axios.get("/store")
      console.log(res);
      setProducts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchProduts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div>
          {(!username || username === user.username) && <ShareProduct />}
        </div>
        <h2 className="titleStore">Your College Store</h2>
        <div className="productFeed">
          {products.map((p) => (
            <Product key={p._id} post={p} />
          ))}
        </div>
      
      </div>
    </div>
  );
}
