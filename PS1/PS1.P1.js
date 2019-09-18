const alphabetize = string => sortString(string);
console.log(alphabetize('supercalifragilisticexpialidocious'))

function sortString(str){
    var splitArray = str.split('');
    var tmp;
    for(var i = 0; i < splitArray.length; i++){
        for(var j = i + 1; j < splitArray.length; j++){
            if(splitArray[i] > splitArray[j]){
                tmp = splitArray[i];
                splitArray[i] = splitArray[j];
                splitArray[j] = tmp;
            }
        }
    }
    return splitArray.join('');
}