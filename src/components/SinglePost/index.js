// == Import
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Post from 'src/components/Post';
import NotFound from 'src/components/NotFound';

function SinglePost({ isZenMode, posts }) {
  const params = useParams();
  const foundPost = posts.find((p) => p.slug === params.slug);

  if (!foundPost) {
    return <NotFound />;
  }

  return (
    <div className={isZenMode ? 'posts--zen' : ''}>
      <Post
        id={foundPost.id}
        category={foundPost.category}
        title={foundPost.title}
        excerpt={foundPost.excerpt}
        content={foundPost.content}
        isSingle
      />
    </div>
  );
}

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isZenMode: PropTypes.bool.isRequired,
};

export default SinglePost;
