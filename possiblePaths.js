var uniquePathsIII = function (grid) {
  let uniquePath = 0;
  const getnonObstacleSquare = (grid) => {
    let nonObstacleSquare = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] !== -1) nonObstacleSquare++;
      }
    }
    return nonObstacleSquare;
  };
  let nonObstaclesquare = getnonObstacleSquare(grid);
  if (nonObstaclesquare === 0) return 0;
  let visited = {};
  const traverseDfs = (r, c) => {
    let square = "" + r + c;
    if (visited[square]) return;
    if (
      r < 0 ||
      r > grid.length - 1 ||
      c < 0 ||
      c > grid[0].length - 1 ||
      grid[r][c] === -1
    )
      return;
    visited[square] = true;
    if (grid[r][c] === 2 && Object.keys(visited).length === nonObstacleSquare) {
      uniquePath++;
    }
    traverseDfs(r - 1, c);
    traverseDfs(r + 1, c);
    traverseDfs(r, c - 1);
    traverseDfs(r, c + 1);
    delete visited[square];
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        traverseDfs(i, j);
      }
    }
  }
};
