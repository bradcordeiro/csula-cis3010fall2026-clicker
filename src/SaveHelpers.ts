export interface SaveState {
  clickCount: bigint;
  autoClickerCounts: number[];
  autoClickerCosts: number[];
}

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const SaveHelpers = {
  encryptState(state: SaveState): string {
    const formatted = { ...state, clickCount: state.clickCount.toString() };
    const json = JSON.stringify(formatted);

    const bytes = textEncoder.encode(json);
    const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');

    return btoa(binString);
  },

  decryptState(state: string): SaveState {
    const json = textDecoder.decode(Uint8Array.from(atob(state), (c) => c.charCodeAt(0)));
    const parsed = JSON.parse(json) as SaveState;

    return {
      ...parsed,
      clickCount: BigInt(parsed.clickCount),
    };
  },

  saveState(state: SaveState): void {
    const encrypted = SaveHelpers.encryptState(state);

    if (encrypted) {
      localStorage.setItem('state', encrypted);
    }
  },

  getSavedState(): SaveState | null {
    const encryptedState = localStorage.getItem('state');

    if (encryptedState) {
      return SaveHelpers.decryptState(encryptedState);
    }

    return null;
  },
};

export default SaveHelpers;
