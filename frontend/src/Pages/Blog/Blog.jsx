import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { MdShare } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import "./blog.css";
// import { BlogData } from "../../Data/BlogData";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GetBlogsData } from "../../Redux/Features/BlogSlice";
import { readableTimeFormat } from "../../../utils/TimeFormatter";

const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBlogsHandler = async () => {
      await dispatch(GetBlogsData());
    };

    fetchBlogsHandler();
  }, []);

  const { BlogsData, isLoading, errMsg } = useSelector((state) => state.blog);
  return (
    <div className="blog-container">
      <Header />
      <div className="blog-body">
        <div
          className="post-blog"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={"/postBlog"}>
            <button className="subhero-btn">
              Post Blog
              <BsFillArrowRightCircleFill id="btn-icon" />
            </button>
          </Link>
          <br />
        </div>

        <div className="blog-header">
          <h1>GREEN WASTE MANAGMENT BLOG POSTS</h1>
        </div>

        {BlogsData.map((data) => {
          return (
            <div className="blog-posts" key={data?._id}>
              <div className="blog-post-card">
                <div className="blog-body-top">
                  <Link to={`/blog/${data?._id}`}>
                    <h1>{data?.title}</h1>
                  </Link>
                  <MdShare id="share-icon" />
                </div>
                <small style={{ color: "blue" }}>
                  Posted {readableTimeFormat(data?.createdAt)}
                </small>
                <div className="blog-card-body">
                  <div
                    className="blog-p"
                    dangerouslySetInnerHTML={{ __html: data?.blogText }}
                  ></div>
                  <div className="blog-card-bottom">
                    <div>
                      <RiMessage2Fill size={30} color="grey" />{" "}
                      <span>Post a Comment</span>
                    </div>
                    <Link to={`/blog/${data?._id}`}>
                      <div>
                        <span>READ MORE</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
