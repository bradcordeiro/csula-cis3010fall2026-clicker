import React from 'react';

import './images/autoclickericon-01-Smiling Santa game icon.png';
import './images/autoclickericon-02-Cheerful Christmas Elf.png';
import './images/autoclickericon-03-Cute Red-Nosed Reindeer Icon.png';
import './images/autoclickericon-04-Cheerful Victorian chimney sweep-1.png';
import './images/autoclickericon-05-Cheery Penguin Winter Icon-2.png';
import './images/autoclickericon-06-Happy Snowman With Red Scarf-3.png';
import './images/autoclickericon-07-Smiling Gingerbread Christmas Game Icon-4.png';

interface ClickGeneratorIconProps {
  count: number;
  icon: string;
}

const maxVisibleIcons = 14 * 3;

export default function ClickGeneratorIcon(props: ClickGeneratorIconProps): React.JSX.Element {
  const { count, icon } = props;

  const icons: React.JSX.Element[] = Array(count);

  for (let i = 0; i < Math.min(count, maxVisibleIcons); i += 1) {
    icons[i] = <img key={i} className="image is-32x32 is-inline" src={`img/${icon}`} />;
  }

  return (
    <span>
      {icons}
    </span>
  );
}
