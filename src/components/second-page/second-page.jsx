import Header from '../header/header';
import About from '../about/about';
import SearchPanel from '../search-panel/search-panel';
import ItemsFilter from '../items-filter/items-filter';
import CoffeeList from '../coffee-list/coffee-list';
import Footer from '../footer/footer';

import { BackgroundImageSec, AboutImgSrc } from '../../assets/images';

import './second-page.css';

function SecondPage() {
  return (
    <>
      <Header
        title="Our Coffee"
        backgroundImage={BackgroundImageSec} />
      
      <About
        src={AboutImgSrc}
        style={{ width: 272, heigth: 355 }}
        alt="A girl is drinking a cup of coffee" />
      
      <main className="main-content">
        <div className="search-panel">
          <SearchPanel />
          <ItemsFilter />
        </div>
        <CoffeeList />
      </main>

      <Footer />
    </>
  );
}

export default SecondPage;