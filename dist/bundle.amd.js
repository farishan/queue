define((function() {
    "use strict";
    function Queue() {
        const items = [];
        this.enqueue = function(item) {
            items.push(item);
            return this;
        };
        this.dequeue = function() {
            items.shift();
            return this;
        };
        this.toString = function() {
            return `dequeue < ${items} < enqueue`;
        };
        return this;
    }
    return Queue;
}));
