import React, { useState } from "react";
import './CreatePost.scss';
import Modal from "../Modal/Modal";
const CreatePost = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className="timeline-create-post">
      {modal && <Modal title="Create Post" setModal={setModal}>
        <div className="post-create">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Photo"/>
          <input type="text" placeholder="Auth Name"/>
          <input type="text" placeholder="Auth Photo"/>
          <button>Submit post</button>
        </div>
      </Modal>}
       <button onClick={() => setModal(!modal)}><i class='bx bx-plus'></i>Create post</button>
    </div>
  );
};

export default CreatePost;
