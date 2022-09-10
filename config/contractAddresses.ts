import { ChainId } from "@thirdweb-dev/sdk";
import { targetChainId } from "./targetChainConfig";

interface IAddresses {
  [key: string]: { [key: string]: string };
}

/***
 * Add your addresses + networks here.
 * To tell your app where to point to, change the targetChainId
 */
const ADDRESSES: IAddresses = {
  [ChainId.Goerli]: {
    Marketplace: "0x19fBd1f9192b3cBB866c688f1f23cDD78364e496",
  },
};

export const readAppContractAddresses = (name: string) => {
  return ADDRESSES[targetChainId][name];
};
