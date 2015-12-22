/**
 * Created on: 20/12/15
 *     Author: Bobby Lin
 */

var eqn = "";

function addDisplay(item) {
    var e = document.getElementById("display");
    eqn += item;
    e.value = eqn;
    console.log(e.value);
}
