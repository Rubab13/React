import { useState } from "react";

function Fetch() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false); // Ensure loading state is reset on error
      });
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4 text-primary fw-bold">Fetching Data from API on Button Click</h1>
      <button onClick={fetchData} className="btn btn-primary">Fetch Data</button>
      {loading && <p className="text-danger">Loading...</p>}
      {posts && (
        <div className="container w-75 border shadow rounded my-5 p-2">
          <p><strong>ID:</strong> {posts.id}</p>
          <p><strong>Title:</strong> {posts.title}</p>
          <p><strong>Content:</strong> {posts.body}</p>
        </div>
      )}
    </div>
  );
}

export default Fetch;
