import React from 'react';

import './images/autoclickericon-01-Smiling Santa game icon.png';
import './images/autoclickericon-02-Cheerful Christmas Elf.png';
import './images/autoclickericon-03-Cute Red-Nosed Reindeer Icon.png';
import './images/autoclickericon-04-Cheerful Victorian chimney sweep-1.png';
import './images/autoclickericon-05-Cheery Penguin Winter Icon-2.png';
import './images/autoclickericon-06-Happy Snowman With Red Scarf-3.png';
import './images/autoclickericon-07-Smiling Gingerbread Christmas Game Icon-4.png';

interface StoreItemIconProps {
  icon: string;
}

export default function StoreItemIcon(props: StoreItemIconProps): React.JSX.Element {
  const { icon } = props;

  return (
    <img className="store-icon image is-64x64 is-inline" src={`img/${icon}`} />
  );
}
