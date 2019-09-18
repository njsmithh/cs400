let lamb = (string, func) => {return func(string);};

// lambda function 1
let func1 = function(str) {

    let splitted = str.split("c");
    if (splitted.length > 1){
        for (let i = 1; i < splitted.length; i++){
            splitted[i] = "c" + splitted[i]
        }
    }

    return splitted
};

// lambda function 2
let func2 = function(str) {

    let replaced = str.replace(/a/g, "A");
    let count = (str.match(/a/g) || []).length;
    let ret = {
        'originalString': str,
        'modifiedString': replaced,
        'numberReplaced': count,
        'length': str.length
    };
    return ret;
};

// test cases
console.log(`function1: ${ lamb('supercalifragilisticexpialidocious', func1) }`);
console.log(`function2: ${ lamb('supercalifragilisticexpialidocious', func2) }`);