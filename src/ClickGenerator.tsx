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

  if (count < 1) return <div />;

  const clicksToAdd = count * clicks;

  React.useEffect(() => {
    const timer = setInterval(() => clickAdder(clicksToAdd), 1000);

    return () => clearInterval(timer);
  }, [count, clicks]);

  return (
    <div>
      <h3 className='is-size-3'>{name}</h3>
      <h4 className='is-size-4'>{clicksToAdd} per second</h4>
      <h5 className='is-size-5'>{clicksToAdd} clicks each for {count}</h5>
    </div>
  );
}
