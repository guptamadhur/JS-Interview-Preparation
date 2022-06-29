class Queue {
    /**
     * Implements an efficient queue that runs all operations in
     * O(1) time complexity.
     */
    constructor(){
      this.ele = {}
      this.tail = 0;
      this.head = 0;
    }
  
     add = (element) => {
       /** 
        * Add element to the back of the queue
        */
       this.ele[this.tail] = element;
       this.tail ++;
     }
  
     peek = () => {
       /**
        * returns the front element of the queue, without
        * modifying the queue
        */
     }
  
     remove = () => {
       /**
        *  returns the front element of the queue, and also
        *  removes it from the Queue
        */
       let removeEle = this.ele[this.head];
       delete this.ele[this.head];
       this.head ++;
       return removeEle;
     }
  
     length = () => {
       /** returns how many elements are present in the queue */
     }
  
     clear = () => {
       /** empties the queue */
     }
  }
  