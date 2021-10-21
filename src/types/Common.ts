import {Network} from 'bitcoinjs-lib';
import SatoshiBig from '@/types/SatoshiBig';

export interface Tx {
  coin: string;
  inputs: object[];
  outputs: object[];
}

export interface NormalizedTx extends Tx {
  coin: string;
  inputs: NormalizedInput[];
  outputs: NormalizedOutput[];
  opReturnData: string;
}

export interface NormalizedInput {
  address: string;
  prev_hash: string; /* eslint-disable-line camelcase */
  amount: string;
  address_n: number[]; /* eslint-disable-line camelcase */
  prev_index: number; /* eslint-disable-line camelcase */
  script_type?: string; /* eslint-disable-line camelcase */
  sequence?: number;
}

export interface NormalizedOutput {
  address?: string;
  address_n?: number[]; /* eslint-disable-line camelcase */
  amount: string;
  serializedValue?: string;
  op_return_data?: string; /* eslint-disable-line camelcase */
}

export interface Signer {
  network: Network;
  publicKey: Buffer;
  sign: (hash: any) => Buffer;
}

export interface AccountBalance {
  legacy: SatoshiBig;
  segwit: SatoshiBig;
  nativeSegwit: SatoshiBig;
}

export interface FeeAmountData {
  slow: SatoshiBig;
  average: SatoshiBig;
  fast: SatoshiBig;
}

export interface TxData {
  amount: SatoshiBig;
  refundAddress: string;
  recipient: string;
  feeBTC: SatoshiBig;
  change: string,
}

export interface PegInFormValues {
  accountType: string;
  amount: SatoshiBig;
  rskAddress: string;
  txFeeIndex: number;
}

export type SendBitcoinState = 'idle' | 'loading' | 'error';

export type ConfirmTxState = 'idle' | 'loading' | 'error';
