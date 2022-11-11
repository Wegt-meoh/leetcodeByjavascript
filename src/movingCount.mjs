import { Queue } from "@datastructures-js/queue";

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount = function (m, n, k) {
  if (k === 0) return 1;
  function judge (x, y) {
    let t = 0;
    while (x > 0) {
      t += x % 10;
      x /= 10;
      x = Math.trunc(x);
    }
    while (y > 0) {
      t += y % 10;
      y /= 10;
      y = Math.trunc(y);
    }
    return t <= k;
  }

  function bfs () {
    const path_log = [];
    let ans = 1;
    const Myqueue = new Queue();
    const dir = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0]
    ];
    for (let i = 0; i < m; i++) {
      const t = [];
      for (let j = 0; j < n; j++) {
        t.push(false);
      }
      path_log.push(t);
    }
    path_log[0][0] = true;
    Myqueue.enqueue([0, 0]);
    while (Myqueue.isEmpty() === false) {
      const t = Myqueue.dequeue();
      for (let i = 0; i < 4; i++) {
        const nx = t[0] + dir[i][0];
        const ny = t[1] + dir[i][1];
        if (
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          path_log[nx][ny] === false &&
          judge(nx, ny)
        ) {
          ans++;
          path_log[nx][ny] = true;
          Myqueue.enqueue([nx, ny]);
        }
      }
    }
    return ans;
  }

  return bfs();
};
console.log(movingCount(2, 3, 1));
console.log(movingCount(3, 1, 0));
console.log(movingCount(11, 8, 16));
