import React from 'react';

import ClickGenerators from './ClickGenerators';
import MainClick from './MainClick';
import SaveHelpers from './SaveHelpers';
import Store from './Store';
import TotalClicks from './TotalClicks';

import type { AutoClickerCollection } from './AutoClickers.json';

function createNewStateArray<T>(oldValues: T[], targetIndex: number, newValue: T): T[] {
  const output = oldValues.map((value, index) => {
    if (index !== targetIndex) return value;

    return newValue;
  });

  return output;
}

export default function App(): React.JSX.Element {
  const [clickCount, setClickcount] = React.useState<bigint>(0n);
  const [autoClickerNames, setAutoClickerNames] = React.useState<[string, string][]>([]);
  const [autoClickerCounts, setAutoClickerCounts] = React.useState<number[]>([]);
  const [autoClickerClicks, setAutoClickerClicks] = React.useState<number[]>([]);
  const [autoClickerCosts, setAutoClickerCosts] = React.useState<number[]>([]);
  const stateRef = React.useRef({ clickCount, autoClickerCounts, autoClickerCosts });

  const addClicks = (count: number) => setClickcount((c) => c + BigInt(count));

  const removeClicks = (count: number) => setClickcount((c) => c - BigInt(count));

  const buyAutoclicker = (index: number) => {
    if (autoClickerCosts[index] > clickCount) return;

    setAutoClickerCounts((s) => createNewStateArray(s, index, s[index] + 1));
    removeClicks(autoClickerCosts[index]);
    setAutoClickerCosts((s) => createNewStateArray(s, index, Math.ceil(s[index] * 1.1))); // increase price by 10%
  };

  React.useEffect(() => {
    stateRef.current = { clickCount, autoClickerCounts, autoClickerCosts };
  }, [clickCount, autoClickerCosts, autoClickerCounts]);

  React.useEffect(() => {
    fetch('/data.json').then(async (response) => response.json() as Promise<AutoClickerCollection>)
      .then((defaults) => {
        const keys = Object.keys(defaults);
        const initialAutoClickerCounts = keys.map(() => 0);
        const initialAutoClickerCosts = keys.map((key) => defaults[key].cost);

        const saved = SaveHelpers.getSavedState();

        setAutoClickerNames(keys.map((key) => defaults[key].displayname));
        setAutoClickerClicks(keys.map((key) => defaults[key].clickvalue));
        setClickcount(saved?.clickCount ?? 0n);
        setAutoClickerCounts(saved?.autoClickerCounts ?? initialAutoClickerCounts);
        setAutoClickerCosts(saved?.autoClickerCosts ?? initialAutoClickerCosts);
      });
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => SaveHelpers.saveState(stateRef.current), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container-fluid'>
      <div className='fixed-grid has-1-cols'>
        <div className="grid mb-0">
          <div className='has-text-centered total-row'>
            <TotalClicks clickCount={clickCount} />
          </div>
        </div>
        <div className='fixed-grid has-3-cols'>
          <div className="grid">
            <div className='column click-column click-row'>
              <MainClick clickAdder={addClicks} />
            </div>
            <div className='column autoclicker-column click-row'>
              <ClickGenerators names={autoClickerNames} clicks={autoClickerClicks} counts={autoClickerCounts} clickAdder={addClicks} />
            </div>
            <div className='column store-column click-row'>
              <Store currentClicks={clickCount} names={autoClickerNames} costs={autoClickerCosts} buy={buyAutoclicker}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
