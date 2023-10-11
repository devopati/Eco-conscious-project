import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router";
import { BlogData } from "../../Data/BlogData";
import { MdShare } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiLeftArrowAlt, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { readableTimeFormat } from "../../../utils/TimeFormatter";

const FullBlog = () => {
  const { blogId } = useParams();
  const { BlogsData } = useSelector((state) => state.blog);

  const newBlogData =
    BlogsData.length > 1 ? BlogsData.filter((data) => data.id !== blogId) : [];
  const shuffledBlogs = () => {
    const randIndex =
      BlogsData.length > 1 ? Math.floor(Math.random() * newBlogData.length) : 0;
    return newBlogData[randIndex];
  };

  const popularBlogs = shuffledBlogs();
  const popularBlogs2 = shuffledBlogs();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header />
      <div className="full-blog-container blog-body">
        <div className="full-blog-header">
          <Link to="/blog">
            <BiLeftArrowAlt id="fblog-icon" />
          </Link>
          <h1>GREEN WASTE MANAGEMENT</h1>
          <BiSearch id="fblog-icon" />
        </div>
        <div className="blog-posts full-blog-body">
          {BlogsData.filter((data) => data?._id == blogId).map((data) => {
            return (
              <div className="blog-post-card " key={data?._id}>
                <div className="blog-body-top">
                  <h1>{data?.title}</h1>
                  <MdShare id="share-icon" />
                </div>
                <small style={{ color: "blue" }}>
                  {" "}
                  Posted {readableTimeFormat(data?.createdAt)}
                </small>
                <div className="blog-card-body full-blog-post-card">
                  <div
                    className="full-blog-p"
                    dangerouslySetInnerHTML={{ __html: data?.blogText }}
                  ></div>
                  <div className="full-blog-card-bottom">
                    <FaUserCircle />
                    <input type="text" placeholder="Enter a comment" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="blog-posts popular-blogs">
          <div
            style={{ marginBottom: "1.5rem", color: "grey", fontWeight: "600" }}
          >
            <small>Popular posts from this blog</small>
          </div>

          {popularBlogs && BlogsData && (
            <div className="blog-post-card" key={popularBlogs?._id}>
              <div className="blog-body-top">
                <Link to={`/blog/${popularBlogs?._id}`}>
                  <h1>{popularBlogs?.title}</h1>
                </Link>
                <MdShare id="share-icon" />
              </div>
              <small style={{ color: "green", fontStyle: "italic" }}>
                {readableTimeFormat(popularBlogs?.createdAt)}
              </small>
              <div className="blog-card-body">
                <div className="blog-p full-blog-pr">
                  <p>{popularBlogs?.blogText}</p>
                </div>
                <div className="blog-card-bottom">
                  <div style={{ visibility: "hidden" }}>
                    <RiMessage2Fill size={30} color="grey" />{" "}
                    <span>Post a Comment</span>
                  </div>
                  <Link to={`/blog/${popularBlogs?._id}`}>
                    <div>
                      <span>READ MORE</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="popular-line"></div>
          {popularBlogs2 &&
            popularBlogs?._id !== popularBlogs2?._id &&
            BlogsData?.length > 3 && (
              <div className="blog-post-card" key={popularBlogs2?._id}>
                <div className="blog-body-top">
                  <Link to={`/blog/${popularBlogs2?._id}`}>
                    <h1>{popularBlogs2?.title}</h1>
                  </Link>
                  <MdShare id="share-icon" />
                </div>
                <small style={{ color: "green", fontStyle: "italic" }}>
                  {readableTimeFormat(popularBlogs2?.createdAt)}
                </small>
                <div className="blog-card-body">
                  <div className="blog-p full-blog-pr">
                    <p>{popularBlogs2?.blogText}</p>
                  </div>
                  <div className="blog-card-bottom">
                    <div style={{ visibility: "hidden" }}>
                      <RiMessage2Fill size={30} color="grey" />{" "}
                      <span>Post a Comment</span>
                    </div>
                    <Link to={`/blog/${popularBlogs2?._id}`}>
                      <div>
                        <span>READ MORE</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FullBlog;
