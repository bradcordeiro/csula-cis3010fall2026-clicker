import React from 'react';

import ClickGenerator from './ClickGenerator';

interface ClickGeneratorsProps {
  names: [string, string][];
  clicks: number[];
  counts: number[];
  clickAdder: (count: number) => void;
}

export default function ClickGenerators(props: ClickGeneratorsProps): React.JSX.Element {
  const {
    clicks,
    clickAdder,
    counts,
    names,
  } = props;

  return (
    <div className="fixed-grid has-1-cols">
      { names.map((n, index) => (
        <ClickGenerator key={`generator-${index}`} names={n} count={counts[index]} clicks={clicks[index]} clickAdder={clickAdder} />
      )) }
    </div>
  );
}
