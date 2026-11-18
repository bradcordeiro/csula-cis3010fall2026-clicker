/* eslint-disable n/no-unsupported-features/node-builtins */

interface SaveState {
  clickCount: bigint;
  autoClickerCounts: number[];
  autoClickerCosts: number[];
}

type EncodedState = [
  string, // clickCount
  number[], // autoClickerCounts
  number[], // autoClickerCosts
];

let publicKey: CryptoKey | null = null;

async function getPublicKey(): Promise<CryptoKey | null> {
  if (publicKey) return publicKey;

  return new Promise((resolve) => {
    if (publicKey) resolve(publicKey);

    fetch('/public_key.pem')
      .then(async (response) => response.text())
      .then((pem) => {
        const key = pem.replace(/-----BEGIN [^-]+-----/, '')
          .replace(/-----END [^-]+-----/, '')
          .replace(/\s+/g, '');

        const binaryString = window.atob(key);
        const buff = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i += 1) {
          buff[i] = binaryString.charCodeAt(i);
        }

        window.crypto.subtle.importKey(
          'spki',
          buff,
          { name: 'RSA-OAEP', hash: 'SHA-256' },
          true,
          ['encrypt'],
        )
          .then((cryptoKey) => {
            publicKey = cryptoKey;
            resolve(publicKey);
          });
      })
      .catch(() => resolve(null));
  });
}

const SaveHelpers = {
  async encryptStatus(state: SaveState): Promise<ArrayBuffer | null> {
    publicKey ??= await getPublicKey();

    if (publicKey) {
      const encodedState: EncodedState = [
        state.clickCount.toString(),
        state.autoClickerCounts,
        state.autoClickerCosts,
      ];
      const savedStatus = JSON.stringify(encodedState);
      return window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, publicKey, Uint8Array.from(savedStatus));
    }

    return null;
  },

  async saveStatus(state: SaveState): Promise<void> {
    const encrypted = await SaveHelpers.encryptStatus(state);

    if (encrypted) {
      const string = new Uint8Array(encrypted).toHex();
      localStorage.setItem('state', string);
    }
  },

  async restoreStatus(): Promise<SaveState | null> {
    const encryptedState = localStorage.getItem('state');

    if (encryptedState) {
      const decryptRequest = await fetch('http://localhost:3000/api/restore', {
        method: 'POST',
        body: encryptedState,
      });

      console.log('decryptRequest', decryptRequest);

      if (decryptRequest.ok) {
        const restoredState = await decryptRequest.json() as EncodedState;
        console.log('restoredState', restoredState);

        return {
          clickCount: BigInt(restoredState[0]),
          autoClickerCounts: restoredState[1],
          autoClickerCosts: restoredState[2],
        };
      }
    }

    return null;
  },
};

export default SaveHelpers;
