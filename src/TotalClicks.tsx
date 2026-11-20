import React from 'react';

import TotalClickInteger from './TotalClickInteger';
import TotalClickScientific from './TotalClickScientific';

interface TotalClicksProps {
  clickCount: bigint;
}

// const standardNotationDisplayMax = 1_000_000_000 as const;

export default function TotalClicks(props: TotalClicksProps): React.JSX.Element {
  const { clickCount } = props;

  if (clickCount < Number.MAX_SAFE_INTEGER) {
    return <TotalClickInteger count={clickCount} />;
  }

  return <TotalClickScientific count={clickCount} />;
}
