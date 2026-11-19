import React from 'react';

import ClickGeneratorIcon from './ClickGeneratorIcon';

export interface ClickGeneratorProps {
  name: string;
  clicks: number;
  count: number;
  background: string;
  icon: string;
  clickAdder: (count: number) => void;
}

export default function ClickGenerator(props: ClickGeneratorProps): React.JSX.Element {
  const {
    background,
    icon,
    clicks,
    count,
    clickAdder,
  } = props;

  // const clicksToAdd = count * clicks;

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

  return (
    <div className="autoclicker-box" style={{ backgroundImage: `url("/img/${background}")` }}>
       <ClickGeneratorIcon count={count} icon={icon} />
    </div>
  );
}
