/*
  Execution Context has 3 types:
  1. Global Execution Context: creating once during reading script
      * creation window: global object
      * creation this: window
  2. Functional Execution Context: created each time when function was called and deleted after execution of this function
  3. Eval Function Execution Context: code executed from eval
*/

/*
  Execution Context has two phases:
    * creation phase - creation and initialization components context execution
    * execution phase - code execution
*/

/*
  Execution Context consist from:
    * LexicalEnvironment consist from:
        * EnvironmentRecord
        * OuterEnv
        * ThisBinding
    * VariableEnvironment
*/

/*
  Execution Stack or Call Stack (LIFO)
*/

/*
  1. JavaScript engine reads the code and creates Global Execution Context (GEC)
  2. JavaScript engine puts a couple of references in Global Memory (Heap)
      * Global memory is the scope where the JavaScript engine stores variables and function declarations.
  3. When calling function, JavaScript engine creates Global Execution Context and execution stack (call stack)
      * after performing all functions stack is cleared

  <script>                    1 start

    function f1() {           2 ----------------  1.1 -GEC phase 1 creation-  1.2 -GEC phase 2 execution-  - Global Lexical Environment -
      console.log('message'); | GLOBAL MEMORY: |  | window: global object  |  | window: global object   |  | ThisBinding: window        |
    }                         | f1 = function  |  | this: window           |  | this: window            |  | OuterEnv: null             |
                              | f2 = function  |  | f1: fn()               |  | f1: fn()                |  | EnvironmentRecord: {       |
    function f2() {           | name = 'Alex'  |  | f2: fn()               |  | f2: fn()                |  |   f1: ref to function,     |
      f1();                   ------------------  | name: undefined        |  | name: 'Alex'            |  |   f2: ref to function,     |
    }                                             --------------------------  ---------------------------  |   name: 'Alex',            |
                                                                                                           | }                          |
    var name = 'Alex';                                                                                     ------------------------------

    // function execution
    f2();                     -------- f2 Lexical Evironment ---------
                              | ThisBinding: window                  |
                              | OuterEnv: Global Lexical Environment |
                              | EnvironmentRecord: {                 |
                              |                                      |
                              | }                                    |
                              ----------------------------------------

                              3.1 ------------  3.2 ------------  3.3 ------------  3.4 ------------  3.5 ------------
                              |              |  |              |  | f1() FEC     |  |              |  |              |
                              |              |  | f2() FEC     |  | f2() FEC     |  | f2() FEC     |  |              |
                              |      GEC     |  |      GEC     |  |      GEC     |  |      GEC     |  |      GEC     |
                              -- call stack --  -- call stack --  -- call stack --  -- call stack --  -- call stack --

  </script>                 1 end
*/
