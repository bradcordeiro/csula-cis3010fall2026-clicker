import React from 'react';

export interface ClickGeneratorProps {
  name: string;
  clicks: number;
  count: number;
  clickAdder: (count: number) => void;
}

export default function ClickGenerator(props: ClickGeneratorProps): React.JSX.Element {
  const {
    name,
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

  return (
    <div>
      <h3 className='is-size-3'>{name}</h3>
      <h4 className='is-size-4'>{clicksToAdd} per second</h4>
      <h5 className='is-size-5'>{clicksToAdd} clicks each for {count}</h5>
    </div>
  );
}
