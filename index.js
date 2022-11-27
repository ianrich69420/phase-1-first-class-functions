function receivesAFunction (calledBack) {
    calledBack();
}

function returnsANamedFunction () {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
    }
}