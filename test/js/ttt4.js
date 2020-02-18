var findNext = function (nums) {
    if (nums.length === 1) {
        return -1
    }
    // 关键位置 (在下降位置的最底部)
    let index = 0
    let curMax = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > curMax) {
            index = i
            break
        } else {
            curMax = nums[i]
        }
    }

    if (index === 0) {
        // 当前的数字已经是最大的
        return -1
    }
    // console.log(index)

    let front = nums.slice(0, index - 1)  // [9, 8, 7]
    let behind = nums.slice(index - 1)  // [6, 8, 5, 4, 3]
    // console.log(front,behind) 

    
    let curMin 
    let curMInIndex 

    for(let i=1;i<behind.length;i++){
        if(behind[i] > behind[0]){
            if(!curMin){
                curMin = behind[i]
                curMInIndex = i 
            }else{
                if( curMin > behind[i]){
                    curMin  =  behind[i]
                    curMInIndex = i 
                }
            }
        }
    }

    curMin = behind.splice(curMInIndex,1)


    behind = curMin.concat(behind.sort())
    

    return front.concat(behind)
};


let arg1 = [9, 8, 7, 6, 8,5, 4, 3]
let arg2 = 100
let res = findNext(arg1)
console.log("res", res)



