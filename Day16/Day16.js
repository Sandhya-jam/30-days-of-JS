//ACTIVITY-1:BASIC RECURSION
//Task-1:
function Factorial(n)
{
    if(n==1)
        return 1
    return n*Factorial(n-1);
}
console.log(Factorial(5)); //120
console.log(Factorial(8)); //40320

//Task-2:
function fibonacci(num)
{
    if(num<=0) return 0;
    else if(num===1)
        return 1;
    else 
      return fibonacci(num-1)+fibonacci(num-2);
}
console.log(fibonacci(5)); //5
console.log(fibonacci(10)); //55

//ACTIVITY-2:Recursion with arrays
//Task-3:
function SumOfArray(arr,n=0)
{
    if(n>=arr.length)
        return 0;

        return arr[n]+SumOfArray(arr,n+1);
}
let arr1=[1,2,3,4,5]; 
let arr2=[6,7,8,9,10];
console.log(SumOfArray(arr1)); //15
console.log(SumOfArray(arr2)); //40

//Task-4:
function Maximum(arr,n)
{
      if(n==1)
        return arr[0];

      return Math.max(arr[n-1],Maximum(arr,n-1));
}
let A=[3,9,1,0,4];
let B=[4,12,89,45,67];
console.log(Maximum(A,A.length)); //9
console.log(Maximum(B,B.length)); //89

//ACTIVITY-3:STRING MANIPULATION
//Task-5
function ReverseString(str,i)
{
    if(i==0)
        return str[0];
    else
     return str[i]+ReverseString(str,i-1);
}
let str="Komala";
let str1="JavaScript"
console.log(ReverseString(str,str.length-1));  //alamoK
console.log(ReverseString(str1,str1.length-1)); //tpircSavaJ

//Task-6:
function Palindrome(s,left,right)
{
    if(left>=right)
        return true;
    else if(s[left]!=s[right])
        return false;
    return Palindrome(s,left+1,right-1);
}
let s1="malayalam";
console.log(Palindrome(s1,0,s1.length-1)) //true
let s2="FootBall";
console.log(Palindrome(s2,0,s2.length-1)) //flase

//ACTIVITY-4:RECURSIVE SEARCH
//Task-7:
function BinarySearch(arr,low,high,key)
{
    if(low<=high){
     let mid=Math.floor((low+high)/2);
     if(arr[mid]==key) return mid;
     else if(arr[mid]>key) return BinarySearch(arr,low,mid-1,key);
     else return BinarySearch(arr,mid+1,high,key);
    }
    else return -1;
}

let B1=[2,5,7,9,12,16];
console.log(BinarySearch(B1,0,B1.length-1,5)); //1
console.log(BinarySearch(B1,0,B1.length-1,12));//4
console.log(BinarySearch(B1,0,B1.length-1,18));//-1

//Task-8:
function Count(arr,i,target)
{
    if(i==arr.length)
        return 0;
    if(arr[i]==target)
        return 1+Count(arr,i+1,target);
    else
       return Count(arr,i+1,target);
}
let M=[1,1,2,3,5,1,2,0,9,1];
console.log((Count(M,0,1))); //4
console.log((Count(M,0,2))); //2

//ACTIVITY-5:TREE TRAVERSAL
//Task-9:
class TreeNode{
    constructor(value=0,left=null,right=null)
    {
        this.value=value;
        this.left=left;
        this.right=right;
    }
}

function Inorder(root)
{
    if(root===null)
        return;

    Inorder(root.left);

    console.log(`Visited node of value ${root.value}`);

    Inorder(root.right);
}

const root=new TreeNode(1);
root.left=new TreeNode(3);
root.right=new TreeNode(5);
root.left.left=new TreeNode(2);
root.left.right=new TreeNode(9);
root.right.left=new TreeNode(4);
root.right.right=new TreeNode(7);

Inorder(root);
/*Visited node of value 2
Visited node of value 3
Visited node of value 9
Visited node of value 1
Visited node of value 4
Visited node of value 5
Visited node of value 7*/

//TASK-10:
function treeDepth(root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = treeDepth(root.left);
    const rightDepth = treeDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}
console.log(treeDepth(root)); //3
