import React from 'react';

import AutoClickers from './AutoClickers';
import ClickGenerators from './ClickGenerators';
import MainClick from './MainClick';
import Store from './Store';
import TotalClicks from './TotalClicks';

const autoClickerNames: [string, string][] = [];
const initialAutoClickerCounts: number[] = [];
const autoClickerClicks: number[] = [];
const initialAutoClickerCosts: number[] = [];

Object.keys(AutoClickers).forEach((key) => {
  autoClickerNames.push(AutoClickers[key].displayname);
  autoClickerClicks.push(AutoClickers[key].clickvalue);
  initialAutoClickerCounts.push(0);
  initialAutoClickerCosts.push(AutoClickers[key].cost);
});

function createNewStateArray<T>(oldValues: T[], targetIndex: number, newValue: T): T[] {
  const output = oldValues.map((value, index) => {
    if (index !== targetIndex) return value;

    return newValue;
  });

  return output;
}

export default function App(): React.JSX.Element {
  const [clickCount, setClickcount] = React.useState<bigint>(0n);
  const [autoClickerCounts, setAutoClickerCounts] = React.useState<number[]>(initialAutoClickerCounts);
  const [autoClickerCosts, setAutoClickerCosts] = React.useState<number[]>(initialAutoClickerCosts);

  const addClicks = (count: number) => setClickcount((c) => c + BigInt(count));

  const removeClicks = (count: number) => setClickcount((c) => c - BigInt(count));

  const buyAutoclicker = (index: number) => {
    if (autoClickerCosts[index] > clickCount) return;

    setAutoClickerCounts((s) => createNewStateArray(s, index, s[index] + 1));
    removeClicks(autoClickerCosts[index]);
    setAutoClickerCosts((s) => createNewStateArray(s, index, Math.ceil(s[index] * 1.1))); // increase price by 10%
  };

  return (
    <div className='container-fluid'>
      <div className='has-text-centered'>
        <TotalClicks clickCount={clickCount} />
      </div>
      <div className='columns'>
        <div className='column'>
          <MainClick clickAdder={addClicks} />
        </div>
        <div className='column'>
          <ClickGenerators names={autoClickerNames} clicks={autoClickerClicks} counts={autoClickerCounts} clickAdder={addClicks} />
        </div>
        <div className='column'>
          <Store currentClicks={clickCount} names={autoClickerNames} costs={autoClickerCosts} buy={buyAutoclicker}/>
        </div>
      </div>
    </div>
  );
}
