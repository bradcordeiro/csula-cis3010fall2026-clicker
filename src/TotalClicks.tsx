import React from 'react';

import NumberFlow from '@number-flow/react';

interface TotalClicksProps {
  clickCount: bigint;
}

// const standardNotationDisplayMax = 1_000_000_000 as const;

export default function TotalClicks(props: TotalClicksProps): React.JSX.Element {
  const { clickCount } = props;
  let base = clickCount;
  let exponent = 0;

  while (base > Number.MAX_SAFE_INTEGER) {
    base /= 10n;
    exponent += 1;
  }

  const exponentDisplay = exponent > 0 ? `e${exponent}` : '';

  return (
    <h1 className='is-size-1'>
      <NumberFlow
        value={Number(clickCount)}
        transformTiming={{ duration: 500, easing: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
        suffix={exponentDisplay}
      />
    </h1>
  );
}
