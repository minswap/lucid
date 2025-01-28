/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const main: () => void;
export const __wbg_addresses_free: (a: number, b: number) => void;
export const addresses_keyHashToCredential: (a: number, b: number) => any;
export const addresses_scriptHashToCredential: (a: number, b: number) => any;
export const addresses_scriptToCredential: (a: any) => [number, number, number];
export const addresses_scriptToAddress: (a: any, b: any, c: number) => [number, number, number, number];
export const addresses_scriptToRewardAddress: (a: any, b: any) => [number, number, number, number];
export const addresses_credentialToAddress: (a: any, b: any, c: number) => [number, number, number, number];
export const addresses_credentialToRewardAddress: (a: any, b: any) => [number, number, number, number];
export const addresses_addressToCredential: (a: number, b: number) => [number, number, number];
export const addresses_rewardAddressToCredential: (a: number, b: number) => [number, number, number];
export const addresses_inspect: (a: number, b: number) => [number, number, number];
export const codec_encodeData: (a: any) => [number, number, number, number];
export const codec_decodeData: (a: number, b: number) => [number, number, number];
export const codec_encodeUtxo: (a: any) => [number, number, number, number];
export const codec_decodeUtxo: (a: number, b: number) => [number, number, number];
export const codec_encodeNativeScript: (a: any) => [number, number, number, number];
export const crypto_privateKeyToDetails: (a: number, b: number) => [number, number, number];
export const crypto_seedToDetails: (a: number, b: number, c: number, d: any) => [number, number, number];
export const crypto_generateSeed: () => [number, number];
export const crypto_generatePrivateKey: () => [number, number];
export const crypto_sign: (a: number, b: number, c: number, d: number) => [number, number, number, number];
export const crypto_verify: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
export const __wbg_emulatorstate_free: (a: number, b: number) => void;
export const emulatorstate_new: (a: number, b: number) => number;
export const emulatorstate_validate: (a: number, b: number, c: number) => [number, number, number, number];
export const emulatorstate_getTime: (a: number) => number;
export const emulatorstate_getDatum: (a: number, b: number, c: number) => [number, number, number, number];
export const emulatorstate_getStaking: (a: number, b: number, c: number) => any;
export const emulatorstate_getLedger: (a: number) => any;
export const emulatorstate_getMempool: (a: number) => any;
export const emulatorstate_distributeRewards: (a: number, b: bigint) => void;
export const emulatorstate_awaitSlot: (a: number, b: number) => void;
export const emulatorstate_awaitBlock: (a: number, b: number) => void;
export const hasher_hashData: (a: number, b: number) => [number, number, number, number];
export const hasher_hashVrfKey: (a: number, b: number) => [number, number, number, number];
export const hasher_hashPublicKey: (a: number, b: number) => [number, number, number, number];
export const hasher_hashWithBlake2b224: (a: number, b: number) => [number, number, number, number];
export const hasher_hashWithBlake2b256: (a: number, b: number) => [number, number, number, number];
export const hasher_hashScript: (a: any) => [number, number, number, number];
export const hasher_hashTransaction: (a: number, b: number) => [number, number, number, number];
export const __wbg_instructionbuilder_free: (a: number, b: number) => void;
export const instructionbuilder_new: (a: any, b: any, c: any, d: any) => number;
export const instructionbuilder_commit: (a: number, b: any) => [number, number, number];
export const __wbg_instructionsigner_free: (a: number, b: number) => void;
export const instructionsigner_fromTx: (a: number, b: number, c: number) => [number, number, number];
export const instructionsigner_signWithKey: (a: number, b: number, c: number) => [number, number, number];
export const instructionsigner_signWithSeed: (a: number, b: number, c: number, d: number) => [number, number, number];
export const instructionsigner_signWithWitness: (a: number, b: number, c: number) => [number, number, number];
export const instructionsigner_signWithWitnessSet: (a: number, b: number, c: number) => [number, number, number];
export const instructionsigner_getPartialWitnessSet: (a: number) => [number, number, number, number];
export const instructionsigner_commit: (a: number) => [number, number];
export const utils_applyParamsToScript: (a: number, b: number, c: number, d: number) => [number, number, number, number];
export const utils_encodeBech32: (a: number, b: number, c: number, d: number) => [number, number, number, number];
export const utils_applySingleCborEncoding: (a: number, b: number) => [number, number, number, number];
export const utils_applyDoubleCborEncoding: (a: number, b: number) => [number, number, number, number];
export const __wbg_crypto_free: (a: number, b: number) => void;
export const __wbg_codec_free: (a: number, b: number) => void;
export const __wbg_utils_free: (a: number, b: number) => void;
export const __wbg_hasher_free: (a: number, b: number) => void;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
export const __wbindgen_exn_store: (a: number) => void;
export const __externref_table_alloc: () => number;
export const __wbindgen_export_4: WebAssembly.Table;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __externref_table_dealloc: (a: number) => void;
export const __wbindgen_start: () => void;
