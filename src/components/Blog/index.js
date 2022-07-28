import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Spinner from 'src/components/Spinner';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// this function has not to be in the component, because it is a pure function
// (it does not depend on the state for example)
// on the contrary, it is better to get it out of the component so it is not re-rendered
// every time the component is re-render
const getPostsByCategory = (posts, category) => {
  if (category === 'Accueil') {
    return posts;
  }
  return posts.filter((p) => p.category === category);
};

// == Composant
function Blog() {
  // first element, name of the state variable
  // second element, name of the function which allow to modify the value of the state
  // so useState return an array with the current value of the state variable,
  // and the function to modify it
  const [isZenMode, setIsZenMode] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const handleZenButtonClick = () => {
    setIsZenMode(!isZenMode);
  };

  const handleLoadPosts = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPosts(postsData);
    }, 1000);
  };

  return (
    <div className="blog">
      <Header
        categories={categoriesData}
        isZenMode={isZenMode}
        onButtonZenChange={handleZenButtonClick}
      />
      <button
        type="button"
        onClick={handleLoadPosts}
      >
        Charger les posts
      </button>
      {isloading && <Spinner />}
      <Routes>
        {
          categoriesData.map((category) => (
            <Route
              key={category.route}
              path={category.route}
              element={(
                <Posts
                  isZenMode={isZenMode}
                  posts={getPostsByCategory(posts, category.label)}
                />
              )}
            />
          ))
        }
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

// == Export
export default Blog;
