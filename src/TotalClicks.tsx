import React from 'react';

import NumberFlow from '@number-flow/react';

interface TotalClicksProps {
  clickCount: bigint;
}

// const standardNotationDisplayMax = 1_000_000_000 as const;

export default function TotalClicks(props: TotalClicksProps): React.JSX.Element {
  const { clickCount } = props;
  /*
  if (clickCount > standardNotationDisplayMax) {
    while (clickCount > Number.MAX_SAFE_INTEGER) {
      clickCount /= 10n;
      addedExponent += 1;
    }

    const num = Number(BigInt.asUintN(Number.MAX_SAFE_INTEGER, clickCount));
    const [base, exp] = num.toExponential(3).split('e');

    display = `${base}e${Number.parseInt(exp, 10) + addedExponent}`;
  }
*/
  return (
    <h1 className='is-size-1'>
      <NumberFlow value={Number(clickCount)} />
    </h1>
  );
}
