import React from 'react';

import NumberFlow from '@number-flow/react';

interface TotalClicksProps {
  count: bigint;
}

export default function TotalClickScientific(props: TotalClicksProps): React.JSX.Element {
  const { count } = props;

  const [baseStr, expStr] = count.toLocaleString('en-US', { notation: 'scientific', maximumFractionDigits: 3 })
    .split('e');

  const base = Number.parseFloat(baseStr);
  const exponent = Number.parseInt(expStr, 10);

  return (
    <h1 className='is-size-1'>
      <NumberFlow
        value={base}
        transformTiming={{ duration: 500, easing: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
        suffix="e"
      />
      <NumberFlow
        value={exponent}
        transformTiming={{ duration: 500, easing: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
      />
    </h1>
  );
}
