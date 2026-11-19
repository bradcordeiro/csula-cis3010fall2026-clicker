interface AutoClickerAttributes {
  displayname: [string, string];
  clickvalue: number;
  cost: number;
  count: number;
}

export type AutoClickerCollection = Record<string, AutoClickerAttributes>;

declare const data: AutoClickerCollection;

export default data;
