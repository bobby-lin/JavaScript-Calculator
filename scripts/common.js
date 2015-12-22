/**
 * Created on: 20/12/15
 *     Author: Bobby Lin
 */

var eqn = "";
var ans = "";

function getDisplayElem() {
    return document.getElementById("display");
}

function setDisplayElemVal(val) {
    var e = getDisplayElem();
    e.value = val;
}

function isOperator(item) {
    return /[-+*/]/g.test(item);
}

function resetAns() {
    ans = "";
}

function resetEqn() {
    eqn = "";
}

function isAnsEmpty() {
    return ans == "";
}
function addDisplay(item) {
    if(!isAnsEmpty()) {
        if(isOperator(item)) {
            eqn = ans;
        }
        resetAns();
    }
    eqn += item;
    setDisplayElemVal(eqn);
}

function clearEqn() {
    resetEqn();
    resetAns();
    setDisplayElemVal(eqn);
}

function evaluateDisplay() {
    ans = eval(eqn);
    setDisplayElemVal(ans);
    resetEqn();
}
