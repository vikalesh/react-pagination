const Post = ({ posts, Loading }) => {
    if(Loading){
        return <h1>Loading...</h1>
    }
  return (
    <>
      <ul className="list-group mb-4">
        {posts.map((post, index) => {
          return <li className="list-group-item" key={"list" + index}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Post;
