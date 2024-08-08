//ACTIVITY-1:LINKED LISTS
//Task-1:
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

//Task-2:linked lists
class linkedlist{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    add(value)
    {
        const newnode=new Node(value);
        if(!this.head)
        {
            this.head=newnode;
        }
        else
        {
            let current=this.head;
            while(current.next)
            {
                current=current.next;
            }
            current.next=newnode;
        }
        console.log(newnode.value,"is Added to linked list");
        
        this.size++;
    }

    delete()
    {
        if(!this.head)
        {
            console.log("Empty Linked list");
        }
        else
        {
            let temp=this.head;
            let prev=null;
            while(temp.next)
            {
               prev=temp;
               temp=temp.next;
            }
            console.log("Deleted value:",temp.value);
            prev.next=null;
            this.size--;
        }
    }

    printlist()
    {
        let temp=this.head;
        console.log("The linked list: ");
        while(temp)
        {
            console.log(temp.value);
            temp=temp.next;
        }
    }
}
const list=new linkedlist();
list.add(9);//9 is Added to linked list
list.add(12); //12 is Added to linked list
list.printlist(); //The linked list: 9 12
list.add(8);   //8 is Added to linked list
list.delete(); //Deleted value: 8
list.add(1);  //1 is Added to linked list
list.add(32); //32 is Added to linked list
list.printlist();//The linked list: 9 12 1 32
list.add(4);  //4 is Added to linked list
list.delete();//Deleted value: 4
list.printlist(); //The linked list: 9 12 1 32

//ACTIVITY-2:STACKS
//Task-3:
class stack{
    constructor()
    {
        this.items=[];
    }

    push(ele)
    {
        this.items.push(ele)
    }
    pop()
    {
        if(this.isEmpty())
        {
            return "Underflow"
        }
        return this.items.pop();
    }
    peek()
    {
        if(this.isEmpty())
         return 'No elements in stack';
        
        return this.items[this.items.length-1];
    }
    isEmpty()
    {
        return this.items.length===0;
    }
}
const stk=new stack();
stk.push(2); 
stk.push(6); 
console.log(stk.peek());//6
console.log(stk.pop()); //6
console.log(stk.pop()); //2
console.log(stk.peek()); //No elements in stack
console.log(stk.pop());  //Underflow

//Task-4:
let str="coding is fun";
const stk1=new stack();
for(let i=0;i<str.length;i++)
{
    stk1.push(str[i]);
}
let reversed="";
while(!stk1.isEmpty())
{
    reversed=reversed+stk1.pop();
}
console.log("Reversed String is:",reversed); //Reversed String is: nuf si gnidoc

//ACTIVITY-3:QUEUE
//Task-5:
class Queue{
    constructor()
    {
        this.list=[];
    }

    enqueue(val)
    {
        this.list.push(val);
    }
    dequeue()
    {
        if(this.empty())
        {
            return 'No elements in queue';
        }
        return this.list.shift();
    }
    empty()
    {
        return this.list.length===0;
    }
    front()
    {
        if(this.empty())
        return 'empty queue';
      
        return this.list[0];
    }
}
const q1=new Queue();
q1.enqueue(2);
console.log(q1.dequeue()); //2
console.log(q1.dequeue()); //No elements in queue
console.log(q1.front());   //empty queue
q1.enqueue(3);
q1.enqueue(4);
console.log(q1.dequeue());//3
console.log(q1.front()); //4

//TASK-6:
class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addPrintJob(job) {
      console.log(`Adding job: ${job}`);
      this.queue.enqueue(job);
    }
  
    processJobs() {
      while (!this.queue.empty()) {
        const job = this.queue.dequeue();
        console.log(`Processing job: ${job}`);
      }
      console.log('All jobs processed.');
    }
}  

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Photo.png");
printerQueue.addPrintJob("Report.docx");
printerQueue.processJobs();
/*Adding job: Document1.pdf
Adding job: Photo.png
Adding job: Report.docx
Processing job: Document1.pdf
Processing job: Photo.png
Processing job: Report.docx
All jobs processed.*/

//ACTIVITY-4:BINARY TREES
//Task-7:
class TreeNode{
    constructor(value=0,left=null,right=null)
    {
        this.value=value;
        this.left=left;
        this.right=right;
    }
}

//Task-8:
class BinaryTree{
    constructor()
    {
        this.root=null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this._insertRecursive(this.root, value);
        }
    }

    _insertRecursive(node, value) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } else {
                this._insertRecursive(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(value);
            } else {
                this._insertRecursive(node.right, value);
            }
        }
    }

    inOrderTraversal() {
        const values = [];
        this._inOrderRecursive(this.root, values);
        return values;
    }

    _inOrderRecursive(node, values) {
        if (node !== null) {
            this._inOrderRecursive(node.left, values);
            values.push(node.value);
            this._inOrderRecursive(node.right, values);
        }
    }
}

const BT = new BinaryTree();
BT.insert(1);
BT.insert(2);
BT.insert(5);
BT.insert(6);
BT.insert(0);

console.log(BT.inOrderTraversal()); //[ 0, 1, 2, 5, 6 ]
