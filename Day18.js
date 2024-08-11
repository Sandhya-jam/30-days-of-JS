//ACTIVITY-1:SORTING ALGORITHMS:
let arr=[2,9,5,0,1];
//TASK-1:BUBBLE SORT
function BubbleSort(arr,n)
{
    let flag=0;
    for(let i=1;i<n;i++)
    {
        for(let j=0;j<n-i;j++)
        {
           if(arr[j]>arr[j+1])
           {
              let temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
              flag=1;
           }
        }
        if(flag==0)
            break;
    }

}
BubbleSort(arr,arr.length);
console.log("Using Bubble Sort: ",arr);//Using Bubble Sort:  [ 0, 1, 2, 5, 9 ]

//TASK-2:SELECTION SORT
function SelectionSort(arr,n)
{
     for(let i=0;i<n;i++)
    {
        let small=i;
        for(let j=i+1;j<n;j++)
        {
            if(arr[j]<arr[small])
                small=j;
        }

        if(small!=i)
        {
            let temp=arr[i];
            arr[i]=arr[small];
            arr[small]=temp;
        }
    }
}
let arr1=[9,2,10,3,9];
SelectionSort(arr1,arr1.length);
console.log("Using Selection Sort: ",arr1);//Using Selection Sort:  [ 2, 3, 9, 9, 10 ]

//task-3:QUICKSORT
function QuickSort(arr,p,r)
{
    if(p<r)
    {
        let q=partition(arr,p,r);
        QuickSort(arr,p,q-1);
        QuickSort(arr,q+1,r);
    }
}
function partition(arr,p,r)
{
    let pivot=arr[r];
    let i,j;
    i=p-1;
    for(j=p;j<r;j++)
    {
        if(arr[j]<=pivot)
        {
            i=i+1;
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }

    let temp=arr[i+1];
    arr[i+1]=pivot;
    arr[r]=temp;

    return i+1;
}
let arr2=[12,26,18,24,10];
QuickSort(arr2,0,arr2.length-1);
console.log("Using QuickSort: ",arr2); //Using QuickSort:  [ 10, 12, 18, 24, 26 ]

//ACTIVITY-2:SEARCHING ALGORITHMS:
//TASK-4:Linear Search
let A=[2,1,4,0,6];
function LinearSearch(arr,key)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==key) return i;
    }

    return `${key} not found`;
}
console.log(LinearSearch(A,4)); //2
console.log(LinearSearch(A,5)); //5 not found

//Task-5:Binary Search
function BinarySearch(arr,key)
{
    let low=0;high=arr.length-1;
    let mid=Math.floor((low+high)/2);
    while(low<=high)
    {
        let mid=Math.floor((low+high)/2);
        if(arr[mid]==key)
            return mid;
        else if(arr[mid]>key)
            high=mid-1;
        else low=mid+1;
    }

    return `${key} not found`;
}
console.log(BinarySearch(arr2,24)); //3
console.log(BinarySearch(arr2,13)); //13 not found

//ACTIVITY-3:STRING ALGORITHMS
//Task-6:
function CountOccurrences(str)
{
    let countMap=new Map();
    for(let ch of str)
    {
        if(countMap.has(ch))
        {
            countMap.set(ch,countMap.get(ch)+1);
        }
        else
        {
            countMap.set(ch,1);
        }
    }

    return countMap;
}
console.log(CountOccurrences("Hello")); //{ 'H' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }

//Task-7:
function longestUniqueSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];

        if (charIndexMap.has(currentChar)) {
            start = Math.max(start, charIndexMap.get(currentChar) + 1);
        }
        charIndexMap.set(currentChar, end);

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

let s = "bcddabcdaac";
console.log(longestUniqueSubstring(s)); //4

//ACTIVITY-4:
//Task-8:
function Reverse(arr,n1,n2)
{
    let left=n1,right=n2-1;
    while(left<=right)
    {
        let temp=arr[right];
        arr[right]=arr[left];
        arr[left]=temp;
        left++,right--;
    }
}
let B=[9,2,5,7,3];
let n=B.length;
let K=7;
K=K%n;
Reverse(B,0,n);
Reverse(B,K,n);
Reverse(B,0,K);
console.log(`After Rotating ${K} Places`,B);//After Rotating 2 Places [ 7, 3, 9, 2, 5 ]

//Task-9:
let A1=[1,3,5,9,13];
let A2=[2,4,5,7,9];
let result=[];
function MergeSortedArrays(A1,A2)
{
    let n=A1.length,m=A2.length;
    let i=0,j=0;
    while(i<n && j<m)
    {
        if(A1[i]<=A2[j])
        {
            result.push(A1[i]);
            i++;
        }
        else
        {
           result.push(A2[j]);
            j++;
        }
    }

    while(i<n) {
        result.push(A1[i++]);
    }
    while(j<m)
    {
        result.push(A2[j++]);
    }
}
MergeSortedArrays(A1,A2);
console.log("Mergerd Array is: ",result); //Mergerd Array is:  [ 1, 2, 3, 4, 5, 5, 7, 9, 9, 13]
