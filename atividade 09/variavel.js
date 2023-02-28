{
    {
        {
            {
                var Sera= "Sera??"
                console.log(Sera)
            }
        }
    }
}
console.log(Sera);
//dentro do escopo o var é global, agora dentro de uma funcao ela fica inacessivel, como no exemplo abaixo

function teste () {
    var local = 123
    console.log(local)
}
//teste()
//console.log(local)


//usando var 02
var numero = 1
{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)
//usando o var em loop
for (var i = 0; i < 100; i++){
    console.log(i)
}
console.log("i = ", i)