const fn = (A) => {
  let limit = Math.floor(A.length / 2);
  let map = {};

  for (let i = 0; i < A.length; i++) {
    if (map[A[i]] !== undefined) {
      map[A[i]] += 1;
    } else {
      map[A[i]] = 1;
    }
    console.log(map, limit);
    if (map[A[i]] >= limit) return A[i];
  }
};

console.log(fn([100, 2, 3, 5, 3, 4, 3]));
