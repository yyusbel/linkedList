#!/usr/bin/node
class linkedList {
    constructor(head = null) {
        this.head = head;
    };
    append(value) {
        //we'll check if this is an empty node
        if (!this.head) {
            this.head = new node(value);
            return this;
        }
        //if it is not an empty node:
        let tail = this.getTail();
        tail.next = new node(value);
        return tail;
    };
    prepend(value) {
        //we'll check if this is an empty node
        if (!this.head) {
            this.head = new node(value);
            return this;
        }
        //if it is not an empty node:
        const prevHead = this.head;
        this.head = new node(value, prevHead);
    };
    getTail() {
        //we'll check if this is an empty list
        if (!this.head) return null;
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    };
    size(){
        let nodeCount=0;
        let counter=this.head;
        while (counter !=null){
            nodeCount++;
            counter=counter.next;
        }
        return nodeCount;
    };
    getHead(){
        return this.head;
    };
    at(index){
        //we'll check if this is an empty list
        if(!this.head) return null;
        let counter =this.head;
        for(let i=0; i<index; i++){
            counter=counter.next;
        }
        return counter?counter:null;
    };
    pop(){
        //when the list is empty:
        if (!this.head) return null;
        //when it is a one node list:
        if(!this.head.next){
            this.head=null;
            return;
        }
        let pointerBeforeTail=this.at(this.size()-2);
        pointerBeforeTail.next=null;
        return this.head;
    };
    contains(value){
        if(!this.head) return null;
        let counter = this.head;
        while (counter !==null){
            if (value===counter.value){
                return true;
            }
            counter=counter.next;
        }
        return false;
    };
    find(value){
        if(!this.head) return null;
        let index=0;
        let counter =this.head;
        while(counter !==null){
            index++;
            if (value===counter.value){
                return index;
            }
            counter = counter.next;
        }
        return null;
    };
    toString(){
        if(!this.head) return "null";
        let output= "";
        let counter=this.head;
        while(counter.next !==null){
            output=`${output} (${counter.value}) ->`;
            counter=counter.next;
        }
        return `${output} (${counter.value}) ->null`; 
    };
};
class node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
};
const list = new linkedList();
console.log(list.prepend(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains());
console.log(list.find(2));
console.log(list.toString());