//ACTIVITY-1:TWO SUM
function TwoSum(arr,target)
{
   let mymap=new Map();
   let result=[];
   for(let i=0;i<arr.length;i++)
   {
      let rem=target-arr[i];
      if(mymap.has(rem))
      {
         result.push(mymap.get(rem));
         result.push(i);
      }

      mymap.set(arr[i],i);
   }
   
   return result;
}
let arr1=[2,7,11,15];
console.log(TwoSum(arr1,9)); //[ 0, 1 ]
console.log(TwoSum([3,2,4],6)); //[ 1, 2 ]

//ACTIVITY-2:
function reverse(num) {
    let reversed = 0;
    const MAX_INT = 2147483647; 
    const MIN_INT = -2147483648; 

    while (num != 0) {
        let rem = num % 10;
        if (reversed > MAX_INT / 10 || (reversed === MAX_INT / 10 && rem > 7))
            return 0;
        if (reversed < MIN_INT / 10 || (reversed === MIN_INT / 10 && rem < -8))
            return 0;
        reversed = reversed * 10 + rem;
        num = Math.trunc(num / 10); // use Math.trunc to handle negative numbers
    }

    return reversed;
}

console.log(reverse(123));   //321
console.log(reverse(-123)); //-321
console.log(reverse(120));  //21

//ACTIVITY-3
var isPalindrome = function(x) {
    if(x<0)
        return false;
    let reversed = 0;
    const MAX_INT = 2147483647; 
    let temp=x;
    while (x != 0) {
        let rem = x % 10;
        if (reversed > MAX_INT / 10 || (reversed === MAX_INT / 10 && rem > 7))
            return 0;
        reversed = reversed * 10 + rem;
        x = Math.trunc(x / 10); 
    }

    return reversed===temp;
};

//ACTIVITY-4:
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let tail = dummy;
    while(list1!=null && list2!=null)
    {
        if(list1.val<list2.val)
        {
            tail.next=list1;
            list1=list1.next;
        }
        else
        {
            tail.next=list2;
            list2=list2.next;
        }
        
        tail=tail.next;
    }
    
    if(list1)
        tail.next=list1;
    else
        tail.next=list2
    
    return dummy.next;
};

//ACTIVITY-5:
var isValid = function(s) {
    let stk=[];
    for(let i=0;i<s.length;i++)
    {
        if(s[i]==='{' || s[i]==='[' || s[i]==='(')
            stk.push(s[i]);
        else
        {
            if(s[i]===')' && stk.length!=0 && stk[stk.length-1]==='(')
                stk.pop();
            else if(s[i]===']' && stk.length!=0 && stk[stk.length-1]==='[')
                stk.pop();
            else if(s[i]==='}' && stk.length!=0 && stk[stk.length-1]==='{')
                stk.pop();
            else
                return false;
        }
    }
    
    return stk.length===0;
};
