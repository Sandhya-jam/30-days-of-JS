var TimeLimitedCache = function() {
    this.cache=new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let check=this.cache.has(key);
    if(check)
    {
        clearTimeout(this.cache.get(key).time);
    }
    this.cache.set(key,{
        value,
        time : setTimeout(()=>{
            this.cache.delete(key);
        },duration)
    });
    return check;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key))
        return this.cache.get(key).value;
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};
