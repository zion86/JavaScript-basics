/*
  1. JavaScript engine reads the code
  2. JavaScript engine puts a couple of references in Global Memory (Heap)
      - Global memory is the scope where the JavaScript engine stores variables and function declarations.
  3. 

  <script>                1-start
                          2 -----------------
    var num = 2;           | GLOBAL MEMORY: |
                           | num = 2        |
    function pow(num) {    | pow = function |
      return num * num;    ------------------
    }

    pow(num);             3

  </script>               1-end
*/


/*
  execution context has two phases:
    - creation phase
    - execution phase
  execution stack or call stack (LIFO)
*/


/*
  execution context types:
  1. Global Execution Context: creating once during creating script
      - creation window: global object
      - creation this: window
  2. Functional Execution Context: created each time when function was called and deleted after execution of this function
  3. Eval Function Execution Context: code executed from eval
*/


/*
  'execution stack' start
    <script>                            // => creation 'global execution context' start

      function f1() {
        console.log('message');
      }

      function f2() {
        f1();                           // (2) => run f1 function (create f1 execution context)
      }

      f2();                             // (1) => run f2 function (create f2 execution context)

                                        // first delete f1() (2)
                                        // last delete f2() (1)
    </script>                           // creation 'global execution context' end
  'execution stack' end
*/
