var arr = [1,2,3,4];
function getMultiple() {
    
    var i;

    function multipleBy10(val) {
        i = 10;
        return val * i;
    }
    //al redeclarar la i a 0 saca por pantalla el resultado buscado //[10,20,30,40]
    for (let i = 0; i < arr.length; i++) {
        arr[i]=multipleBy10(arr[i]);
        
    }
    console.log(arr);
    return arr;
}
getMultiple();

