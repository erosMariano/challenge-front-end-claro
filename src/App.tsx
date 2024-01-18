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
      title: 'Torta de morango com champagne para o réveillon',
      urlImage: 'images/cake1.jpg',
      id: 1
    },
    {
      title: 'Bolo de chocolate com morango',
      urlImage: 'images/cake2.jpg',
      id: 2
    },
    {
      title: 'Caramel Cappuccino Cake Bolo de Caramelo com Cappuccino',
      urlImage: 'images/cake3.jpg',
      id: 3
    },
    {
      title: 'Bolo de festa colorico',
      urlImage: 'images/cake4.jpg',
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
