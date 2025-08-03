import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./card.scss";

function Card({ item }) {
  const [saved, setSaved] = useState(item.isSaved || false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    try {
      setSaved((prev) => !prev);
      await apiRequest.post("/users/save", { postId: item.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev); // Revert on error
    }
  };

  const handleChat = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    try {
      // Create a chat with the post owner
      const res = await apiRequest.post("/chats", { receiverId: item.userId });
      // Navigate to profile page where chat is available
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <Link to={`/posts/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/posts/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">Rs. {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div 
              className="icon" 
              onClick={handleSave}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="/save.png" 
                alt="" 
                style={{ 
                  filter: saved ? 'brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%)' : 'none'
                }}
              />
            </div>
            <div 
              className="icon" 
              onClick={handleChat}
              style={{ cursor: 'pointer' }}
            >
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
