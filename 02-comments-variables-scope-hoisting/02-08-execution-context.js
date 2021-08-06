/*
  Execution Context has 3 types:
  1. Global Execution Context: creating once during reading script
      - creation window: global object
      - creation this: window
  2. Functional Execution Context: created each time when function was called and deleted after execution of this function
  3. Eval Function Execution Context: code executed from eval
*/

/*
  execution context has two phases:
    - creation phase
    - execution phase
  execution stack or call stack (LIFO)
*/

/*
  1. JavaScript engine reads the code and creates Global Execution Context (GEC)
  2. JavaScript engine puts a couple of references in Global Memory (Heap)
      - Global memory is the scope where the JavaScript engine stores variables and function declarations.
  3. When calling function, JavaScript engine creates Global Execution Context and execution stack (call stack)
      - after performing all functions stack is cleared

  <script>                    1 start

    function f1() {           2 ----------------  1.1 -GEC phase 1 creation-  1.2 -GEC phase 2 execution-
      console.log('message'); | GLOBAL MEMORY: |  | window: global object  |  | window: global object   |
    }                         | f1 = function  |  | this: window           |  | this: window            |
                              | f2 = function  |  | f1: fn()               |  | f1: fn()                |
    function f2() {           ------------------  | f2: fn()               |  | f2: fn()                |
      f1();                                       | name: undefined        |  | name: 'Alex'            |
    }                                             --------------------------  ---------------------------

    var name = 'Alex';

    f2();                     3.1 ------------  3.2 ------------  3.3 ------------  3.4 ------------  3.5 ------------
                              |              |  |              |  | f1() FEC     |  |              |  |              |
                              |              |  | f2() FEC     |  | f2() FEC     |  | f2() FEC     |  |              |
                              |      GEC     |  |      GEC     |  |      GEC     |  |      GEC     |  |      GEC     |
                              -- call stack --  -- call stack --  -- call stack --  -- call stack --  -- call stack --

  </script>                 1 end
*/
