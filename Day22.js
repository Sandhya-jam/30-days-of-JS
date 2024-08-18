//ACTIVITY-1:add Two numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1==null && l2==null)
        return l1;
    if(l1==null || l2==null)
    {
        if(l1) return l1;
        else return l2;
    }
    let dummy=new ListNode(0);
    let curr=dummy;
    let carry=0;
    while(l1!=null || l2!=null)
    {
       let sum=carry;
       if(l1) sum+=l1.val;
       if(l2) sum+=l2.val;
       let newnode=new ListNode(sum%10);
       carry=Math.floor(sum/10);
        
       curr.next=newnode;
       curr=curr.next;
        
       if(l1) l1=l1.next;
       if(l2) l2=l2.next;
    }
    
    if(carry)
    {
        let newnode=new ListNode(carry);
        curr.next=newnode;
        curr=curr.next;
    }
    
    curr.next=null;
    return dummy.next;
};

//ACTIVITY-2:LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let Charset=new Set();
    let start=0;
    let max_len=0;
    
    for(let end=0;end<s.length;end++)
    {
        while(Charset.has(s[end]))
        {
            Charset.delete(s[start]);
            start=start+1;
        }
        
        Charset.add(s[end]);
        max_len=Math.max(max_len,end-start+1);
    }
    
    return max_len;
};

//ACTIVITY-3:Container with more Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let max_area=0;
    while(left<right)
    {
        let h=Math.min(height[left],height[right]);
        let w=right-left;
        max_area=Math.max(max_area,h*w);
        
        if(height[left] < height[right]) left++;
        else right--;
    }
    
    return max_area;
};

// ACTIVITY-4:3 SUM
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    const res=[];
    
    for(let i=0;i<nums.length-2;i++)
    {
        if(i>0 && nums[i]===nums[i-1]) continue;
        
        let left=i+1;
        let right=nums.length-1;
        
        while(left<right)
        {
            let sum=nums[left]+nums[right]+nums[i];
            
            if(sum===0)
            {
                res.push([nums[i],nums[left],nums[right]]);
                
                while(left<right && nums[left]===nums[left+1]) left++;
                while(left<right && nums[right]===nums[right-1]) right--;
                
                left++;
                right--
            }
            
            else if(sum<0) left++
            else right--;
        }
    }
    
    return res;
};

//ACTIVITY-5:GROUP OF ANAGRAMS
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr).push(str);
    }

    return Array.from(anagramMap.values());
};