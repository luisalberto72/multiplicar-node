
//Tipos de require

//const fs = require('express');
//const fs = require('./fs');

// let base=6;
// let data='';

// for (let i=1;i<=10;i++){

//     data+=`${ base } * ${ i } = ${ base * i }\r\n`;
// }

// fs.writeFile(`tablas/tabla-${ base }.txt`,data,(err)=>{

//     if(err) throw err;
//     console.log('El fichero tabla-${ base }.txt ha sido creado');
// })

// //2*1=2
// //2*2=4
// //2*3=6
// //...

// crearArchivo(base)
//    .then(archivo=>console.log(`Archivo creado: ${ archivo }`))

const argv=require('./config/yargs').argv;
//var colors = require('colors');
const colors=require('colors/safe');



// const argv=require('yargs')
// .command('listar','Imprime en consola la tabla de multiplicar',{
//     base:{

//         demand:true,
//         alias:'b'
//     },
//     limite:{

//         alias:'l',
//         default:10
//     }
// })
// .command('crear','Genera un archivo con la tabla de multiplicar',{
//     base:{

//         demand:true,
//         alias:'b'
//     },
//     limite:{

//         alias:'l',
//         default:10
//     }
// })
// .help()
// .argv;

//const multiplicar=require('./multiplicar/multiplicar')
 const {crearArchivo,listarTabla}=require('./multiplicar/multiplicar')

// let base='5';

//console.log(multiplicar);
//console.log(process.argv);

//console.log(argv);
let comando=argv._[0];

switch(comando){

    case 'listar':
    //console.log('Listar');
    listarTabla(argv.base,argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo=>console.log(`Archivo creado:`,colors.green(archivo)))
            .catch(e=>console.log(e)); 
    break;
    default:console.log('comando no reconocido');

}

//let argv2=process.argv;

//console.log(argv.base);
//console.log('Limite',argv.limite);
//console.log(argv2);

//let argv=process.argv;
//let parametro=argv[2];
//let base=parametro.split('=')[1];

// console.log(base);

// crearArchivo(base)
//  .then(archivo=>console.log(`Archivo creado: ${ archivo }`))
//  .catch(e=>console.log(e)); 

