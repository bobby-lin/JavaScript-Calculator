/**
 * Created on: 20/12/15
 *     Author: Bobby Lin
 */

var eqn = "";

function getDisplayElem() {
    return document.getElementById("display");
}

function setDisplayElemVal(val) {
    var e = getDisplayElem();
    e.value = val;
}

function addDisplay(item) {
    eqn += item;
    setDisplayElemVal(eqn);
}

function clearEqn() {
    eqn = "";
}

function evaluateDisplay() {
    var ans = eval(eqn);
    setDisplayElemVal(ans);
    clearEqn();
}
