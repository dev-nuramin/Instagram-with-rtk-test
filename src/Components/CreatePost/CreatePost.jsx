import React, { useState } from "react";
import "./CreatePost.scss";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/timeline/timelineAPI";
const CreatePost = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    auth_name: "",
    auth_photo: "",
    content: "",
    photo: "",
    post_time : Date.now(),
    reactions : {
      like: 0,
      comment: 0,
      dislike: 0
    }
  });

  //handle input data
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle create post
  const handleCreatePost = () => {
    dispatch(createPost(input))
    setModal(false)
  
  };
  return (
    <div className="timeline-create-post">
      {modal && (
        <Modal title="Create Post" setModal={setModal}>
          <div className="post-create">
            <input
              type="text"
              name="auth_name"
              value={input.auth_name}
              onChange={handleInput}
              placeholder="Name"
            />
            <input
              type="text"
              name="auth_photo"
              value={input.auth_photo}
              onChange={handleInput}
              placeholder="Photo"
            />
            <input
              type="text"
              name="content"
              value={input.content}              onChange={handleInput}
              placeholder="Content"
            />
            <input
              type="text"
              name="photo"
              value={input.photo}
              onChange={handleInput}
              placeholder="Auth Photo"
            />
            <button onClick={handleCreatePost}>Submit post</button>
          </div>
        </Modal>
      )}
      <button onClick={() => setModal(!modal)}>
        <i class="bx bx-plus"></i>Create post
      </button>
    </div>
  );
};

export default CreatePost;
