import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MarketCard from "../../Components/Market Card/MarketCard";
import "./market.css";
import { marketData } from "../../Data/marketData";
import { BsFilter } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetMarketData } from "../../Redux/Features/MarketSlice";
import { readableTimeFormat } from "../../../utils/TimeFormatter";

const Market = () => {
  const dispatch = useDispatch();

  const [marketAddOpen, setMarketAddOpen] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);
  let data = [];

  useEffect(() => {
    const getMarketDataHandler = async () => {
      await dispatch(GetMarketData());
    };

    getMarketDataHandler();
  }, []);

  const { marketData, isLoading, errMsg, succMessage } = useSelector(
    (state) => state.market
  );

  return (
    <>
      <Header />
      <div className="market-container">
        <div className="market-top">
          <div className="add-to-market">
            <Link
              onClick={() => setDropDownActive(!dropDownActive)}
              className="add-to-market"
            >
              <MdOutlineAddCircle id="amicon" />
              <span>Add to Market</span>
              {!dropDownActive ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </Link>

            <div
              className={`dropdown-options ${!dropDownActive && "market-none"}`}
            >
              <Link to={"/addmarket"}>
                <div className="dropdown-item">
                  <span>Add Green Waste</span>
                  <MdOutlineAddCircle id="amicon" />
                </div>
              </Link>

              <Link to={"/determine-image"}>
                <div className="dropdown-item">
                  <span>Determine your waste type</span>
                  <IoIosArrowForward />
                </div>
              </Link>
            </div>
          </div>
          <div className="filter">
            <BsFilter id="amicon" /> <span>Filter</span>
          </div>
        </div>
        <div className="market-cards">
          {marketData.map((data) => {
            return (
              <div className="mk-card">
                <MarketCard
                  name={data?.productName}
                  date={readableTimeFormat(data?.createdAt)}
                  image={data?.productImg?.imageUrl}
                  likecount={data?.likes.length}
                  title={data?.title}
                  description={data?.description}
                  id={data?.id}
                  price={data?.price}
                  linkTo={`/market/${data?._id}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Market;
