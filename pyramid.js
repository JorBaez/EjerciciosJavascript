//Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:

//para valor 6

//1
//12
//123
//1234
//12356

    function pyramidnumbers (number){
    for (let i=1; i <=number; i++) {
        let line= '';
    for (let j=1; j <= i; j++) {
        line += j+'';
       }
    
    console.log(line);
    }
}
pyramidnumbers(6)

//para valor 3

//1
//12
//123

function pyramidnumbers (number){
    for (let i=1; i <=number; i++) {
        let line= '';
    for (let j=1; j <= i; j++) {
        line += j+'';
       }
    
    console.log(line);
    }
}
pyramidnumbers(3)