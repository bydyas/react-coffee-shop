import { Component } from 'react';

import Header from '../header/header';
import About from '../about/about';
import SearchPanel from '../search-panel/search-panel';
import ItemsFilter from '../items-filter/items-filter';
import CoffeeList from '../coffee-list/coffee-list';
import Footer from '../footer/footer';

import { BackgroundImageSec, AboutImgSrc, CoffeeItemPic } from '../../assets/images';

import './second-page.css';

class SecondPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'AROMISLOCO Coffee 1 kg', country: 'Brazil', price: '6.99', src: "https://www.pacagemockup.com/wp-content/uploads/2020/12/Free-Coffee-Branding-Packaging-Pouch-Mockup-758x569.jpg", id: 1},
        {name: 'AROMISNEGRO Coffee 1 kg', country: 'Kenya', price: '4.99', src: "https://rockbern-coffee.com/wp-content/uploads/2015/12/editbanner1-4coffee.jpg", id: 2},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '5.99', src: "https://worldbranddesign.com/wp-content/uploads/2019/04/Twineich---Drinkers-Coffee13.jpg", id: 3},
        {name: 'AROMISLOCO LUX 1 kg', country: 'Brazil', price: '13.99', src: "https://www.moltobureau.com/upload/brazil-2x.jpg", id: 4},
        {name: 'AROMISNEGRO LUX 1 kg', country: 'Kenya', price: '9.99', src: "https://static.turbosquid.com/Preview/001204/085/RE/600.jpg", id: 5},
        {name: 'AROMISTICO LUX 1 kg', country: 'Columbia', price: '11.99', src: CoffeeItemPic, id: 6},
      ]
    };
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Header
          title="Our Coffee"
          backgroundImage={ BackgroundImageSec } />
        
        <About
          src={ AboutImgSrc }
          style={{ width: 272, heigth: 355 }}
          alt="A girl is drinking a cup of coffee" />
        
        <main className="main-content">
          <div className="search-panel">
            <SearchPanel />
            <ItemsFilter />
          </div>
          <CoffeeList data={ data }/>
        </main>
  
        <Footer />
      </>
    );
  }
}

export default SecondPage;