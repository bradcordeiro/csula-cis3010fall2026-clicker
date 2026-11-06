import React from 'react';

export interface ClickGeneratorProps {
  names: [string, string];
  clicks: number;
  count: number;
  clickAdder: (count: number) => void;
}

export default function ClickGenerator(props: ClickGeneratorProps): React.JSX.Element {
  const {
    names,
    clicks,
    count,
    clickAdder,
  } = props;

  const clicksToAdd = count * clicks;

  React.useEffect(() => {
    let subSecondClicks = clicks * count;
    let timeInterval = 1000; // 1 second

    if (clicks > 10) {
      timeInterval = 100; // 1/10 second
      subSecondClicks = Math.floor(clicks / 10) * count;
    }

    const timer = setInterval(() => clickAdder(subSecondClicks), timeInterval);

    return () => clearInterval(timer);
  }, [count, clicks]);

  if (count < 1) return <div />;

  const displayName = count > 1 ? names[1] : names[0];
  const canePlural = clicksToAdd > 1 ? 's' : '';

  return (
    <div>
      <h3 className='is-size-3'>
        <strong>
          {count}
        </strong> {displayName}</h3>
      <h4 className='is-size-4'>Making {clicksToAdd} Candy Cane{canePlural} per second</h4>
    </div>
  );
}
