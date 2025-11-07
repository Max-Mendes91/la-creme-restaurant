import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import ScrollingGoldenAccent from '../../effects/ScrollingGoldenAccent';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ position: 'relative' }}>
        {/* Scroll-interactive golden accent background - appears from MenuSection onwards */}
        <ScrollingGoldenAccent />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
