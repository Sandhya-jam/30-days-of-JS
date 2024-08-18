//ACTIVITY-1:MEDIAN OF TWO SORTED ARRAYS
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1=nums1.length;
    let n2=nums2.length;
    if(n1>n2) return findMedianSortedArrays(nums2,nums1);
    
    let low=0,high=n1;
    let left=Math.floor(((n1+n2+1)/2));
    let n=(n1+n2);
    while(low<=high)
    {
        let mid1=Math.floor((low+high)/2);
        let mid2=left-mid1;
        let l1=-2147483648,l2=-2147483648;
        let r1=2147483647,r2=2147483647;
        if(mid1<n1) r1=nums1[mid1];
        if(mid2<n2) r2=nums2[mid2];
        
        if(mid1-1>=0) l1=nums1[mid1-1];
        if(mid2-1>=0) l2=nums2[mid2-1];
        
        if(l1<=r2 && l2<=r1)
        {
            if(n%2==1) return Math.max(l1,l2);
            else return (((Math.max(l1,l2)) + Math.min(r1,r2))/2);
        }
        
        else if(l1>r2) high=mid1-1;
        else low=mid1+1;
    }
    
    return 0;
};

//ACTIVITY-2:MERGE K SORTED LISTS
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;  
    let head = lists[0];
    if (lists.length === 1) return head; 
    
    for (let i = 1; i < lists.length; i++) {
        head = Merge(head, lists[i]);
    }
    
    return head;
};

function Merge(l1, l2) {
    let dummy = new ListNode(0); 
    let tail = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    
    if (l1 !== null) {
        tail.next = l1;
    } else {
        tail.next = l2;
    }
    
    return dummy.next;
}

//ACTIVITY-3:TRAPPING RAIN WATER
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n=height.length;
    let left=0;
    let right=n-1;
    let maxleft=0,maxright=0;
    let res=0;
    while(left<=right)
    {
        if(height[left]<=height[right])
        {
            if(height[left]>=maxleft) maxleft=height[left];
            else res+=maxleft-height[left];
            
            left++;
        }
        else
        {
            if(height[right]>=maxright) maxright=height[right];
            else res+=maxright-height[right];
            
            right--;
        }
        
    }
    
    return res;
};

//ACTIVITY-4:N QUEENS
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    
    const isValid = (board, row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    };
    
    const backtrack = (row) => {
        if (row === n) {
            res.push([...board]);
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row] = board[row].slice(0, col) + 'Q' + board[row].slice(col + 1);
                backtrack(row + 1);
                board[row] = board[row].slice(0, col) + '.' + board[row].slice(col + 1);
            }
        }
    };
    
    backtrack(0);
    return res;
};

//ACTIVITY-5:WORD LADDER
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let q1 = [];
    let st1 = new Set(wordList); 
    
    if (!st1.has(endWord)) return 0;  
    
    q1.push([beginWord, 1]);  
    st1.delete(beginWord);  
    
    while (q1.length !== 0) {
        let [word, steps] = q1.shift();  
        if (word === endWord) return steps;
        
        for (let i = 0; i < word.length; i++) {
            let original = word[i];
            
            for (let charCode = 97; charCode <= 122; charCode++) {  
                let ch = String.fromCharCode(charCode);
                if (ch === original) continue;  
                let newWord = word.slice(0, i) + ch + word.slice(i + 1);
                
                if (st1.has(newWord)) {
                    st1.delete(newWord);
                    q1.push([newWord, steps + 1]);  
                }
            }
        }
    }
    
    return 0;  
};
