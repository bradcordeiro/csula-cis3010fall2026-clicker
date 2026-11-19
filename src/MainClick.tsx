import React from 'react';

import BigCandyCane from './images/mainclick-Cheerful red-and-white candy cane.png';

interface MainClickProps {
  clickAdder: (count: number) => void;
}

export default function MainClick(props: MainClickProps): React.JSX.Element {
  const { clickAdder } = props;

  const updateCount = () => {
    clickAdder(1);
  };

  return (
    <div className='has-text-centered'>
      <button className="main-click" onClick={updateCount}>
        <img src={BigCandyCane} alt='Clickable Candy Cane' />
      </button>
    </div>
  );
}
