export interface AutoClickerAttributes {
  displayname: string;
  clickvalue: number;
  cost: number;
  count: number;
}

export type AutoClickerCollection = Record<string, AutoClickerAttributes>;

const AutoClickers: AutoClickerCollection = {
  autoclicker1: {
    displayname: 'Auto Clicker #1',
    clickvalue: 1,
    cost: 15,
    count: 0,
  },
  autoclicker2: {
    displayname: 'Auto Clicker #2',
    clickvalue: 10,
    cost: 50,
    count: 0,
  },
  autoclicker3: {
    displayname: 'Auto Clicker #3',
    clickvalue: 50,
    cost: 500,
    count: 0,
  },
  autoclicker4: {
    displayname: 'Auto Clicker #4',
    clickvalue: 500,
    cost: 2500,
    count: 0,
  },
  autoclicker5: {
    displayname: 'Auto Clicker #5',
    clickvalue: 10000,
    cost: 25000,
    count: 0,
  },
  autoclicker6: {
    displayname: 'Auto Clicker #7',
    clickvalue: 50000,
    cost: 250000,
    count: 0,
  },
};

export default AutoClickers;
