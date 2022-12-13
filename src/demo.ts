export const a = 1

interface IObj {
  [propName: string]: number
}
function mostFrequentEven(nums: number[]): number {
  const arr = nums.filter((item) => item % 2 === 0)
  if (arr.length === 0) return -1
  const obj: IObj = {}
  arr.forEach((item) => {
    typeof obj[item] === 'number' ? obj[item]++ : (obj[item] = 1)
  })
  let list: Array<{ value: number; key: number }> = []
  let result = -1
  // key 数字 value 数量
  Object.entries(obj).forEach(([key, value]) => {
    if (value === result) {
      list.push({
        value,
        key: Number(key)
      })
    }

    if (value > result) {
      result = value
      list = [
        {
          value,
          key: Number(key)
        }
      ]
    }
  })
  console.log(list)
  return list.length > 0
    ? list.sort((a, b) => b.value - a.value)[0].key
    : result
}

const result = mostFrequentEven([0, 1, 2, 4, 1])
console.log(result)
