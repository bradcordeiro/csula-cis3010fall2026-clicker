import React from 'react';

interface StoreItemProps {
  buy: (index: number) => void;
  name: string;
  cost: number;
  currentClicks: bigint;
  index: number;
}

export default function StoreItem(props: StoreItemProps): React.JSX.Element {
  const {
    buy,
    cost,
    currentClicks,
    index,
    name,
  } = props;

  return (
    <button className={`button ${cost > currentClicks ? 'is-disabled' : ''}`} onClick={() => buy(index)}>
      Buy {name} for {cost} clicks
    </button>
  );
}
