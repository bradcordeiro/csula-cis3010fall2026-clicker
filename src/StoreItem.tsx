import React from 'react';

interface StoreItemProps {
  buy: (index: number) => void;
  names: [string, string];
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
    names,
  } = props;

  const disabled = cost > currentClicks;

  return (
    <button className={`button ${disabled ? 'is-outline' : ''}`} disabled={disabled} onClick={() => buy(index)}>
      Buy {names[0]} for {cost} Candy Canes
    </button>
  );
}
