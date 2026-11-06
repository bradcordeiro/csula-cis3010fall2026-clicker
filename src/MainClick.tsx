import React from 'react';

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
      <button className='button button-large' onClick={updateCount}>
        Make Candy Cane
      </button>
    </div>
  );
}
