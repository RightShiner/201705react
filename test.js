/**
 * Uncaught RangeError: Maximum call stack size exceeded
 * JS能占用的内存数是有限的，最大1.7G
 */
function send(){
  send();
}
send();

while(true){}