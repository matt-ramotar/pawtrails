export default function createListLookup(lists) {
  const res = {};
  console.log(lists);

  for (const list of lists) {
    const trails = {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
      12: {},
      13: {},
      14: {},
      15: {},
    };
    for (const trail of list.Trails) {
      trails[trail.cityId][trail.id] = true;
    }
    res[list.id] = trails;
  }
  return res;
}
