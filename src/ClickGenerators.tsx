import React from 'react';

import ClickGenerator from './ClickGenerator';
import './images/autoclickerbg-01-snowy-forest.png';
import './images/autoclickerbg-02-festive-village.png';
import './images/autoclickerbg-03-winter-night.png';
import './images/autoclickerbg-04-candy-cane-forest.png';
import './images/autoclickerbg-05-frozen-pond.png';
import './images/autoclickerbg-06-gingerbread-village.png';
import './images/autoclickerbg-07-cozy-cabin.png';

interface ClickGeneratorsProps {
  names: string[];
  backgrounds: string[];
  icons: string[];
  clicks: number[];
  counts: number[];
  clickAdder: (count: number) => void;
}

export default function ClickGenerators(props: ClickGeneratorsProps): React.JSX.Element {
  const {
    backgrounds,
    icons,
    clicks,
    clickAdder,
    counts,
    names,
  } = props;

  return (
    <div className="fixed-grid has-1-cols">
      <div className="grid">
        { names.map((n, index) => (
          <ClickGenerator
            key={`generator-${index}`}
            name={n} count={counts[index]}
            clicks={clicks[index]}
            clickAdder={clickAdder}
            background={backgrounds[index]}
            icon={icons[index]}
          />
        )) }
      </div>
    </div>
  );
}
