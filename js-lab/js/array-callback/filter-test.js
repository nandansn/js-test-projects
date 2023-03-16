let states = [
  {
    s_name: 'a',
    enabled: true,
  },
  {
    s_name: 'b',
    enabled: true,
  },
  {
    s_name: 'c',
    enabled: true,
  },
  {
    s_name: 'd',
    enabled: false,
  },
];

let newStates = states.filter((state) => state.enabled && state.s_name === 'a');

console.log(states);
