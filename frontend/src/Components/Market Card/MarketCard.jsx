import React, { useState } from "react";
import "./marketcard.css";
import { HiUserCircle } from "react-icons/hi";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import UserProfileInfo from "../UserProfileInfo";
import { Link } from "react-router-dom";

const MarketCard = ({
  name,
  date,
  time,
  image,
  likecount,
  title,
  description,
  price,
  id,
  linkTo,
}) => {
  const [liked, setLiked] = useState(false);
  const [userProfileActive, setUserProfileActive] = useState(false);
  return (
    <div className="marketcard-container">
      <div className="marketcard-content">
        <div
          className="mc-user-info"
          onClick={() => setUserProfileActive(true)}
        >
          <HiUserCircle id="mc-user" />
          <h3>{name}</h3>
        </div>
        <small id="mc-date">
          Posted : {date} at:{time}
        </small>
        <div className="mc-image">
          <img src={image} alt="image" />
        </div>
        <div className="mc-likes">
          <FcLike size={19} />
          <small>
            {liked && "You and"} {liked ? likecount + 1 : likecount} others...
          </small>
        </div>
        <div className="mc-description">
          <h3>
            {title} <span>${price}</span>
          </h3>
          <div className="mc-desc-p">
            <p>{description}</p>
          </div>
          <div className="mc-bottom">
            <div onClick={() => setLiked(!liked)} className="mc-btm-like">
              {liked ? (
                <div className="mc-bm-like">
                  <FcLike /> <span>Dislike</span>
                </div>
              ) : (
                <div className="mc-bm-like">
                  <FcLikePlaceholder />
                  <span>Like</span>
                </div>
              )}
            </div>
            <Link to={linkTo} className="mc-view-more">
              <span>Purchase</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`userProfileInfo ${userProfileActive && "profile-active"}`}
      >
        <UserProfileInfo
          setUserProfileActive={setUserProfileActive}
          name={name}
        />
      </div>
    </div>
  );
};

export default MarketCard;
