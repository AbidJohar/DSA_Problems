

 function Node (value){

    this.value = value;
    this.next = null;

 }

function List (){
    this.head = null;
    this.size = 0;
}

const node1 = new Node(20);
const node2 = new Node(40);
const node3 = new Node(50);

const mylist = new List();

node1.next = node2;
node2.next = node3;

mylist.head = node1;
mylist.size = 3;

let current = mylist.head;

while(current){
    
    console.log(current.value);
 
     current = current.next;

}