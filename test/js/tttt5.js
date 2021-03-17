let executeCount = 0

const fn = (nums) => {
  executeCount++
  return nums.map((x) => x * 2)
}

const batcher = (f) => {
  let nums = []
  // 延迟f的执行 让f只只执行一次
  const p = Promise.resolve().then((res) => {
    // 为什么这里只会执行一次？
    // 因为之后 p 的状态变为 fulfilled 就不会再执行了
    return f(nums)
  })

  // 形成闭包 返回的函数都可以获取相同的nums 和 p
  return (arr) => {
    let s = nums.length
    nums = nums.concat(arr)
    let e = nums.length
    return p.then((r) => r.slice(s, e)) // 注意这个p
  }
}

const batchedFn = batcher(fn)

const main = async () => {
  const [r1, r2, r3] = await Promise.all([
    batchedFn([1, 2, 3]),
    batchedFn([4, 5]),
    batchedFn([7, 8, 9]),
  ])

  //满足以下 test case
  // assert(r1).tobe([2, 4, 6])
  // assert(r2).tobe([8, 10])
  // assert(r3).tobe([14, 16, 18])
  // assert(executeCount).tobe(1)

  console.log('r1', r1)
  console.log('r2', r2)
  console.log('r3', r3)
  console.log('executeCount', executeCount)
}

main()
