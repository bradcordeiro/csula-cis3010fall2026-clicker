import React from 'react';

import StoreItemIcon from './StoreItemIcon';

interface StoreItemProps {
  buy: (index: number) => void;
  name: string;
  cost: number;
  currentClicks: bigint;
  index: number;
  icon: string;
  background: string;
}

export default function StoreItem(props: StoreItemProps): React.JSX.Element {
  const {
    background,
    buy,
    cost,
    currentClicks,
    index,
    icon,
    name,
  } = props;

  const disabled = cost > currentClicks;

  return (
    <div className="store-box" style={{ backgroundImage: `url("/img/${background}")` }}>
      <button className='button store-button' disabled={disabled} onClick={() => buy(index)}>
        <StoreItemIcon icon={icon} />
      </button>
      <span>Buy {name} for {cost}</span>
    </div>
  );
}
