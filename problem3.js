function sortMaker(arr){
    let [a, b] = arr;

    if(a < 0 || b < 0){
        return "invalid input"
    }

    if(a == b){
        return "equal";
    } 

    if(a > b){
        return [a, b]
    }
    else{
        return [b, a]
    }

    
}

    

console.log(sortMaker([4,-4]))