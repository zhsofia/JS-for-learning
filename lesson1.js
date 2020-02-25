function arraywrite(array){
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array[i].length;j++){
            document.write("<p>"+array[i][j]+"</p>");
        }
    }
}

var product = 4.4*5.6;
document.write(product);
console.log(""+product+"\n"+"hey");
var arr=[[1,2,3],[4,5,6]];
arr[0].push([0],[0],[0]);             //push() - adds the insides at the end of the array
arraywrite(arr);
document.write('<p>----</p>');

arr.shift();                          //shift() - removes the first element of the array
arraywrite(arr);
document.write('<p>----</p>');

arr.unshift([3],[2],[1]);      //unshift() - adds the insides at the beginning of the array
arraywrite(arr);