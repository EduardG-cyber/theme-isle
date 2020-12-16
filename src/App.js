import { useState, useEffect } from 'react';
import Card from './components/Card';
import Modulo from './components/Modulo';
import Loader from "./components/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const url = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts';
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Response was not ok: ${res.status}`);
        }
        return res.json();
      }).then(posts => {
        setPosts(posts);
        setIsLoading(false);
      }).catch(console.error);

  }, []);

  return (
    <div className="container">
      {isLoading && <Loader />}
      {!isLoading &&
                  posts.map(post =>
                      <Card key={post.id}
                            post={post}
                            setSelectedPost={setSelectedPost}/>)}
      {selectedPost && <Modulo post={selectedPost}
                              setSelectedPost={setSelectedPost}/>}
    </div>
  );
}

export default App;
