export interface AutoClickerAttributes {
  displayname: [string, string];
  clickvalue: number;
  cost: number;
  count: number;
}

export type AutoClickerCollection = Record<string, AutoClickerAttributes>;

const AutoClickers: AutoClickerCollection = {
  autoclicker1: {
    displayname: ['🧝Elf🧝', '🧝Elves🧝'],
    clickvalue: 1,
    cost: 15,
    count: 0,
  },
  autoclicker2: {
    displayname: ['🎅Santa🎅', '🎅Santas🎅'],
    clickvalue: 10,
    cost: 50,
    count: 0,
  },
  autoclicker3: {
    displayname: ['Auto Clicker #3', 'Auto Clicker #3s'],
    clickvalue: 50,
    cost: 500,
    count: 0,
  },
  autoclicker4: {
    displayname: ['Auto Clicker #4', 'Auto Clicker #4s'],
    clickvalue: 500,
    cost: 2500,
    count: 0,
  },
  autoclicker5: {
    displayname: ['Auto Clicker #5', 'Auto Clicker #5s'],
    clickvalue: 10000,
    cost: 25000,
    count: 0,
  },
  autoclicker6: {
    displayname: ['Auto Clicker #7', 'Auto Clicker #7s'],
    clickvalue: 50000,
    cost: 250000,
    count: 0,
  },
};

export default AutoClickers;
