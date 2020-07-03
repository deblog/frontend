export const users = [...Array(100).keys()].map(i => ({
  id: i,
  name: `User${i}`,
}));
