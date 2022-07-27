import React from 'react';
// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isZenMode: false,
    };

    this.handleButtonZenChange = this.handleButtonZenChange.bind(this);
  }

  handleButtonZenChange() {
    const { isZenMode } = this.state;
    this.setState({ isZenMode: !isZenMode });
  }

  render() {
    const { isZenMode } = this.state;
    return (
      <div className="blog">
        <Header
          categories={categoriesData}
          isZenMode={isZenMode}
          onButtonZenChange={this.handleButtonZenChange}
        />
        <Posts posts={postsData} isZenMode={isZenMode} />
        <Footer />
      </div>
    );
  }
}

// == Export
export default Blog;
