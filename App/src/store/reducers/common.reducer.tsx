import commonConstants from "../constants/common.constants";
import { item, cartItem, size } from "../types/myType";

type commonState = {
  items: Map<number, item>
  itemsInCart: cartItem[]
};

const commonState = (
  state: commonState = {
    items: new Map<number, item>(
      [
        [
          0,
          new item(
            "0",
            "Myriam",
            "https://ae01.alicdn.com/kf/H2a6069f97e7f4301bbf75941bb99d4dfy/Japon-Anime-Prison-cole-yeux-triste-impression-Panama-seau-chapeaux-mode-adulte-cr-me-solaire-p.jpg_640x640.jpg",
            new Map<size, number>([["M", 1], ["L", 1]]),
            new Map<string, string>([["Materiaux", "Cachemire"]]),
            "100"
          )
        ],
        [
          1,
          new item(
            "1",
            "de",
            "https://ae01.alicdn.com/kf/Hd32a1bb236184b54a254bc1f9751fcc42/MICHELANGELO-dr-le-impression-seau-casquettes-t-pliable-cr-me-solaire-p-cheur-Panama-chapeaux-2020.jpg",
            new Map<size, number>([["M", 1]]),
            new Map<string, string>([["Allo", "OK"]]),
            "100"
          )
        ],
        [
          2,
          new item(
            "2",
            "de",
            "https://ae01.alicdn.com/kf/H3a928f29024e4047864dd64c42b872f4H/HIP-HOP-Streetwear-Patchwork-PUNK-d-contract-chemise-carreaux-hommes-manches-longues-de-haute-qualit-2020.jpg_640x640.jpg",
            new Map<size, number>([["M", 1]]),
            new Map<string, string>([["Allo", "OK"]]),
            "100"
          )],
      ]
    ),
    itemsInCart: []
  },
  action: any
): commonState => {
  switch (action.type) {
    default:
    case "REMOVE_ITEM": {
      state.itemsInCart.splice(action.payload, 1);
      return {
        ...state,
      }
    }
    case "ADD_ITEM": {
      state.itemsInCart.push(action.payload)
      return {
        ...state,
      }
    }
      return {
        ...state
      };
  }
};

export { commonState };
