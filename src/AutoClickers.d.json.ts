interface AutoClickerAttributes {
  displayname: string;
  icon: string;
  background: string;
  storebackground: string;
  clickvalue: number;
  cost: number;
  count: number;
}

export type AutoClickerCollection = Record<string, AutoClickerAttributes>;

declare const data: AutoClickerCollection;

export default data;
