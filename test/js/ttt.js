let masked = []
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  masked = new Array(gas.length).fill(false)
  for (let i = 0; i < gas.length; i++) {
    if (getCircuit(i, gas[i], gas, cost)) {
      return i
    }
    masked.fill(false)
  }
  return -1
}

function getCircuit(i, cur, gas, cost) {
  debugger
  if (masked.every((item) => item)) {
    return true
  }
  let left = i - 1
  let right = i + 1
  if (i == 0) {
    left = gas.length - 1
  }
  if (i == gas.length - 1) {
    right = 0
  }
  let leftFlag = false
  let rightFlag = false
  if (cur - cost[left] >= 0) {
    masked[left] = true
    leftFlag = getCircuit(left, cur - cost[left], gas, cost)
  }
  if (cur - cost[right] >= 0) {
    masked[right] = true
    rightFlag = getCircuit(right, cur - cost[right], gas, cost)
  }
  return leftFlag || rightFlag
}

const gas = [1, 2, 3, 4, 5]
const cost = [3, 4, 5, 1, 2]
const res = canCompleteCircuit(gas, cost)
console.log('res', res)
