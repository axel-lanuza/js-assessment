exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        // if (Array.prototype.indefOf) {return arr.indexOf(item)}

        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum: function(arr) {
        return arr.reduce(function(a, b) {
            return a + b;
        }, 0);
    },

    remove: function(arr, item) {
        return arr.filter(function(element) {
            return element !== item;
        });
    },

    removeWithoutCopy: function(arr, item) {
        let i,
            len;

        for (i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                len--;
            }
        }

        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function(arr) {
        arr.pop();
        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.shift();
        return arr;
    },

    concat: function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
        arr.join();
        arr.splice(index, 0, item);
        return arr;
    },

    count: function(arr, item) {
        return arr.filter(function(value) {
            return value === item
        }).length;
    },

    duplicates: function(arr) {
        let len = arr.length,
            out = [],
            counts = {};
        for (var i = 0; i < len; i++) {
            var item = arr[i];
            counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
            if (counts[item] === 2) {
                out.push(item);
            }
        }
        return out;
    },

    square: function(arr) {
        let square = arr.map(function(item) {
            return item * item;
        });
        return square;
    },

    findAllOccurrences: function(arr, target) {
      let occurrences = arr.reduce(function(a, e, i) {
            if (e === target)
                a.push(i);
            return a;
        }, []);
        console.log(occurrences);
      return occurrences;
    }
};
