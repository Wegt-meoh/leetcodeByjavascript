function combinationSum2 (candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const sortedCan: number[] = [];
  const hashTable = new Map<number, number>();
  candidates.forEach((i) => {
    const v = hashTable.get(i);
    if (typeof v === "number") {
      hashTable.set(i, v + 1);
    } else {
      hashTable.set(i, 1);
    }
  });
  for (const i in hashTable) {
    sortedCan.push(parseInt(i, 10));
  }
  const dfs = (index: number, history: number[], res_target: number): void => {
    if (index > sortedCan.length || res_target < 0) return;
    if (res_target === 0) {
      result.push([...history]);
      return;
    }

    const count = hashTable.get(sortedCan[index]);
    if (typeof count === "number") {
      for (let i = 0; i <= count; i++) {
        const t = [...history];
        for (let j = 0; j < i; j++) t.push(sortedCan[index]);
        dfs(index + 1, t, res_target - i * sortedCan[index]);
      }
    }
  };
  dfs(0, [], target);
  return result;
}

function removeSame (data: number[][]): void {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (judge(data[i], data[j])) {
        data.splice(j, 1);
        j--;
      }
    }
  }
}

function judge (a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const a = [10, 1, 2, 7, 6, 1, 5];
const b = 8;

console.log(combinationSum2(a, b));
