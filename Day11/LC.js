//2634.Filter elements from an array
var filter = function(arr, fn) {
    let resultArray=[];
    for(let i=0;i<arr.length;i++)
    {
        if((fn(arr[i],i))){
           resultArray.push(arr[i]);
          }
    }
    
    return resultArray;
};

//2626.Array Reduce Transformation
var reduce = function(nums, fn, init) {
    let res=init;
    for(let i=0;i<nums.length;i++)
    {
        res=fn(res,nums[i]);
    }
    
    return res;
};