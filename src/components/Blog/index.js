import { useState } from 'react';
// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
function Blog() {
  // first element, name of the state variable
  // second element, name of the function which allow to modify the value of the state
  // so useState return an array with the current value of the state variable,
  // and the function to modify it
  const [isZenMode, setIsZenMode] = useState(false);

  const handleZenButtonClick = () => {
    setIsZenMode(!isZenMode);
  };

  return (
    <div className="blog">
      <Header
        categories={categoriesData}
        isZenMode={isZenMode}
        onButtonZenChange={handleZenButtonClick}
      />
      <Posts posts={postsData} isZenMode={isZenMode} />
      <Footer />
    </div>
  );
}

// == Export
export default Blog;
