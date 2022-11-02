const inversionInicial = prompt ('Escribe la cantidad a invertir:');
const plazoEnMeses= prompt("Plazo a meses:");
const tasaAnual = prompt("Tasa anual:");

var interesAculumado=0;
var interesGenerado;


if (inversionInicial >= 0){
    if (plazoEnMeses >=0){
        if (tasaAnual >=0){
            console.log('Desglose de intereses:')
            console.log('----------------------------------')
            
            
            for(i=1 ; i <= plazoEnMeses ; i++){
                                
                interesGenerado=calculoRendimiento(inversionInicial,tasaAnual,30)
                console.log('Interes mes ' + i + ': $ ' + interesGenerado);
                interesAculumado += interesGenerado
                
            }
            
            console.log('----------------------------------')
            console.log('Interes Acumulado: $' + interesAculumado);
            console.log('Inversion + Interes: $' + (parseFloat(inversionInicial) + parseFloat(interesAculumado)) );


            function calculoRendimiento(importe, tasa , dias){
                return Math.round(importe * (((dias*tasa)/360) /100)); 
            }
            500
        }
    }
}












