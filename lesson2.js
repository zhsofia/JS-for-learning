var arr = ["red", "blue", "green", "yellow", "magenta", "orange", "black", "white"];
var obj = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow",
    4: "magenta",
    5: "orange",
    6: "black",
    7: "white"
};
document.write("<p>Array realisation: </p>");

for(var i=0;i<arr.length;i++){
    document.write(arr[i]+" ");
}

document.write("<p>Object realisation: </p>");
var count=-1;
while(obj.hasOwnProperty(count + 1)){
    count++;
}
for(var i=0;i<count+1;i++){
    document.write(obj[i]+" ");
}

document.write("<p>Property checking and changing: </p>");
document.write("<p>"+obj.hasOwnProperty(count+1)+"</p>");
obj[count+1]="cyan";
document.write("<p>"+obj.hasOwnProperty(count+1)+"</p>");
for(var i=0;i<count+2;i++){
    document.write(obj[i]+" ");
}