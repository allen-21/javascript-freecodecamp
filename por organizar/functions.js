// verificar idade 

let idades = [18, 25, 11, 48, 8]
let somaDasIdades = 0;

const somarIdades =(somatorio,idade)=>{
    return somatorio + idade;
}

const verificaSeEMaiorDeIdade=(idade)=> {
    return idade >= 18;
    
}
for (let i = 0; i < idades.length; i++){
    let idade = idades[i];
    somaDasIdades = somarIdades(somaDasIdades, idade)
    
}
console.log ("Soma das idades: ", somaDasIdades);

