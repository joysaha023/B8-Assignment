function matchFinder(string1, string2){

    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "please provide a any word"
    }

    const result = string1.includes(string2);
    return result;
}

console.log(matchFinder("John Doe", 9));