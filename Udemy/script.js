function avg(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(avg([90,0]));

function isPangram(sent){
    let abc='abcdefghijklmnopqrstuvwxyz';
    let sentt=sent.toLowerCase();
    for(let i=0;i<abc.length;i++){
        let c = abc.charAt(i);
        if(sentt.indexOf(c)===-1){
            return false;
        }
    }
    return true;
}

console.log(isPangram('abcdefghjklmnoPqrstuvwxyz'));

let obj = {
    hi: "j",
    hello: "jj",
    hiello: "jjj"
}

for(el in obj){
    console.log(obj[el]);
}