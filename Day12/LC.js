//2629

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(functions.length==0)
        {
            return x;
        }
        let i=x;
        for(let j=functions.length-1;j>=0;j--)
        {
            i=functions[j](i);
        }
        
        return i;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

//2666

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let k=0;
    return function(...args){
        let ans;
        if(k<1)
        {
            ans=fn(...args);
            k=k+1;
        }
        
      return ans;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
