import React from 'react';

import NumberFlow from '@number-flow/react';

interface TotalClickIntegerProps {
  count: bigint;
}

export default function TotalClickInteger(props: TotalClickIntegerProps): React.JSX.Element {
  const { count } = props;

  return (
    <h1 className='is-size-1'>
      <NumberFlow
        value={Number(count)}
        transformTiming={{ duration: 500, easing: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
      />
    </h1>
  );
}
