/*
  execution context
  execution stack or call stack
*/


/*
  execution context types:
  1. global execution context: creating once during creating script
      - create global object window
      - create global variable this
  2. functional execution context: creating each time when function is calling and deleting after the end of function
  3. eval function execution context: code executed from eval
*/


/*
  'execution stack' start
    <script>                            // => create 'global execution context' start

      function f1() {
        console.log('message');
      }

      function f2() {
        f1();                           // (2) => run f1 function (create f1 execution context)
      }

      f2();                             // (1) => run f2 function (create f2 execution context)

                                        // first delete f1() (2)
                                        // last delete f2() (1)
    </script>                           // 'global execution context' end
  'execution stack' end
*/
