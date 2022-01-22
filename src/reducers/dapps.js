const initialState = [
  { id: 1, name: "Exchanges" },
  { id: 2, name: "Games" },
  { id: 3, name: "Marketplaces" },
  { id: 4, name: "Defi" },
  { id: 5, name: "Collectibles" },
  { id: 6, name: "Utilities" },
];
const dapps = (state = initialState, { type, payload }) => {
  return state;
};
export default dapps;
