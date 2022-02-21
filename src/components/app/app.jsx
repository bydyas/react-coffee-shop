import Header from '../header/header';
import About from '../about/about';
import Footer from '../footer/footer';

import { BackgroundImageSec, AboutImgSrc } from '../../assets/images';

import './app.css';

function App() {
  return (
    <div className="app">
      <Header
        title="Our Coffee"
        backgroundImage={BackgroundImageSec} />
      <About
        src={AboutImgSrc}
        style={{ width: 272, heigth: 355 }}
        alt="A girl is drinking a cup of something" />
      <Footer />
    </div>
  );
}

export default App;
