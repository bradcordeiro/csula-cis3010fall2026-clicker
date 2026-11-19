import React from 'react';

import './images/storebg-01-Cozy Storybook Shop.png';
import './images/storebg-02-Cheerful candy shop panorama.png';
import './images/storebg-03-Snowy winter market of lights.png';
import './images/storebg-04-Cheerful toy store holiday panorama.png';
import './images/storebg-05-Cheerful Neighborhood Grocery Market.png';
import './images/storebg-06-Cheerful department store panorama.png';
import './images/storebg-07-Cheerful Snowy Shopping Street.png';
import StoreItem from './StoreItem';

interface StoreProps {
  buy: (index: number) => void;
  costs: number[];
  currentClicks: bigint;
  icons: string[];
  names: string[];
  backgrounds: string[];
}

export default function Store(props: StoreProps): React.JSX.Element {
  const {
    buy,
    costs,
    currentClicks,
    icons,
    names,
    backgrounds,
  } = props;

  return (
    <div>
      {names.map((n, index) => (
        <StoreItem
          key={`store-${index}`}
          buy={buy}
          cost={costs[index]}
          currentClicks={currentClicks}
          index={index}
          name={n}
          icon={icons[index]}
          background={backgrounds[index]}
      />))}
    </div>
  );
}
