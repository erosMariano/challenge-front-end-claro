import { useState } from 'react';

import CakesSection from './components/cakes';
import Header from './components/header';
import OrderInformation from './components/order-information';

import './index.scss';
import { CakeType } from './types';

function App() {
  const [selectedCake, setSelectedCake] = useState<CakeType>({
    id: 0,
    title: '',
    urlImage: ''
  });

  function handleSelectedCake(value: number) {
    const [selected] = dataCakes.filter((el) => el.id === value);
    setSelectedCake(selected);
  }

  const dataCakes: CakeType[] = [
    {
      title: 'Strawberry Champagne Cake for New Year Eve',
      urlImage: 'images/strawberry-champagne-cake-new-years-eve.jpg',
      id: 1
    },
    {
      title: 'Chocolate Cake with Strawberries',
      urlImage: 'images/chocolate-cake-with-strawberries.jpg',
      id: 2
    },
    {
      title: 'Caramel Cappuccino Cake',
      urlImage: 'images/caramel-cappuccino-cake.jpg',
      id: 3
    },
    {
      title: 'Colorful Party Cake',
      urlImage: 'images/colorful-party-cake',
      id: 4
    }
  ];

  return (
    <>
      <Header
        title="Cake Order Form"
        subtitle="Order your freshly baked cakes made using only the finest quality
        natural ingredients."
      />

      <main>
        <CakesSection
          handleSelectedCake={handleSelectedCake}
          infoCakes={dataCakes}
        />
        <OrderInformation cakeSelected={selectedCake} />
      </main>
    </>
  );
}

export default App;
