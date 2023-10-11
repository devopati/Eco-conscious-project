import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./fullmarket.css";
import { HiUserCircle } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { readableTimeFormat } from "../../../utils/TimeFormatter";

const FullMarketComponent = () => {
  const { marketId } = useParams();

  const { marketData, isLoading, errMsg, succMessage } = useSelector(
    (state) => state.market
  );

  return (
    <>
      <Header />

      <div className="fullmarket-container">
        {marketData
          .filter((data) => data?._id === marketId)
          .map((data) => {
            return (
              <div className="full-content">
                <div
                  className="mc-user-info"
                  onClick={() => setUserProfileActive(true)}
                >
                  <HiUserCircle id="mc-user" />
                  <h3>{data?.user?.fullName}</h3>
                </div>
                <small id="mc-date">
                  Posted : {readableTimeFormat(data?.createdAt)}
                </small>
                <div className="flmc-title">
                  <h3>
                    {data?.title} <span>${data?.price}</span>
                  </h3>
                </div>
                <div className="fllmc-image">
                  <img src={data?.productImg?.imageUrl} alt="image" />
                </div>

                <div>
                  <p>{data?.description}</p>
                </div>

                <div className="mc-likes">
                  <FcLike size={19} />
                  <small>Liked by {data?.likecount} others...</small>
                </div>

                <Link style={{ alignSelf: "center" }}>
                  <button className="subhero-btn">
                    Purchase <BsFillArrowRightCircleFill id="btn-icon" />
                  </button>
                </Link>
              </div>
            );
          })}
      </div>

      <Footer />
    </>
  );
};

export default FullMarketComponent;
