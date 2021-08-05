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
