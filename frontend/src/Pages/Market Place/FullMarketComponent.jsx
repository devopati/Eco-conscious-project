import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./fullmarket.css";
import { marketData } from "../../Data/marketData";
import { HiUserCircle } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const FullMarketComponent = () => {
  const { marketId } = useParams();

  return (
    <>
      <Header />

      <div className="fullmarket-container">
        {marketData
          .filter((data) => data?.id === marketId)
          .map((data) => {
            return (
              <div className="full-content">
                <div
                  className="mc-user-info"
                  onClick={() => setUserProfileActive(true)}
                >
                  <HiUserCircle id="mc-user" />
                  <h3>{data?.name}</h3>
                </div>
                <small id="mc-date">
                  Posted : {data?.date} at:{data?.time}
                </small>
                <div className="flmc-title">
                  <h3>
                    {data?.title} <span>${data?.price}</span>
                  </h3>
                </div>
                <div className="fllmc-image">
                  <img src={data?.image} alt="image" />
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
