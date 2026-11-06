import React from 'react';

import StoreItem from './StoreItem';

interface StoreProps {
  buy: (index: number) => void;
  costs: number[];
  currentClicks: bigint;
  names: [string, string][];
}

export default function Store(props: StoreProps): React.JSX.Element {
  const {
    buy,
    costs,
    currentClicks,
    names,
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
          names={n}
      />))}
    </div>
  );
}
