import React from "react";
import "./MainTimeline.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, makeLove } from "../../features/timeline/timelineSlice";
import { formatDistanceToNow } from "date-fns";
import { deletePost } from "../../features/timeline/timelineAPI";
const Maintimeline = () => {
  const posts = useSelector(getAllPost);
  const dispatch = useDispatch();
  return (
    <div className="timeline-all-post">
      {posts.length > 0
        ? [...posts]
            .reverse()
            .map(
              (
                {
                  id,
                  auth_name,
                  auth_photo,
                  reactions,
                  photo,
                  content,
                  post_time,
                },
                index
              ) => {
                return (
                  <div className="timeline-box" key={index}>
                    <div className="auth-sec">
                      <img src={auth_photo} alt="" />
                      <div className="auth-detailes">
                        <div className="auth-content">
                          <h3>{auth_name}</h3>
                          <span>
                            {formatDistanceToNow(post_time) === "1 minute"
                              ? "Just Now"
                              : formatDistanceToNow(post_time) + " ago"}{" "}
                          </span>
                          <div className="delbutton">
                            <button onClick={() => dispatch(deletePost(id))}>
                              <i class="bx bx-x"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-content">
                      <p>{content}</p>
                      {photo && <img src={photo} alt="" />}
                    </div>
                    <div className="post-reactions">
                      <div className="reaction-item" onClick={() => dispatch(makeLove(id))}>
                        <i class="bx bx-heart"></i>
                        <span>{reactions.like}</span>
                      </div>
                      <div className="reaction-item">
                        <i class="bx bx-message-dots"></i>
                        <span>10</span>
                      </div>
                      <div className="reaction-item">
                        <i class="bx bx-dislike"></i>
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                );
              }
            )
        : " No Posts"}
    </div>
  );
};

export default Maintimeline;
