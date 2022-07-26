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
      modeZen: false,
    };

    this.handleButtonZenChange = this.handleButtonZenChange.bind(this);
  }

  handleButtonZenChange() {
    const { modeZen } = this.state;
    this.setState({ modeZen: !modeZen });
  }

  render() {
    const { modeZen } = this.state;
    return (
      <div className={modeZen ? 'blog blog--zen' : 'blog'}>
        <Header
          categories={categoriesData}
          buttonTextContent={modeZen ? 'Désactiver le mode zen' : 'Activer le mode zen'}
          onButtonZenChange={this.handleButtonZenChange}
        />
        <Posts posts={postsData} />
        <Footer />
      </div>
    );
  }
}

// == Export
export default Blog;
