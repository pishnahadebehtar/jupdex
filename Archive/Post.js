import React, { useEffect, useState } from "react";

function Post() {
  const [posts, SetPosts] = useState([]);
  const [comments, SetComments] = useState([]);
  const [show, SetShow] = useState();
  async function getdata(type) {
    try {
      let url = "";
      type === "post"
        ? (url = "https://jsonplaceholder.typicode.com/posts")
        : (url = "https://jsonplaceholder.typicode.com/comments");
      const response = await fetch(url);
      const data = await response.json();
      type === "post" ? SetPosts(data) : SetComments(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getdata("post");
    getdata("comment");
  }, []);
  return (
    <div>
      {posts.map((item) => {
        return (
          <div className="flex border">
            <h1>{item.title}</h1>
            <h2>{item.body}</h2>
            <button
              onClick={() => (show === item.id ? SetShow() : SetShow(item.id))}
            >
              {show === item.id ? "Hide Comment" : "Show Comment"}
            </button>
            {show === item.id
              ? comments
                  .filter((comment) => comment.postId === item.id)
                  .map((x) => {
                    return <div className="border flex">{x.body}</div>;
                  })
              : null}
          </div>
        );
      })}
    </div>
  );
}

export default Post;
