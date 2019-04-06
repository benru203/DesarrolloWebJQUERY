let paises = [
    {
        codigo: 1,
        nombre: 'Colombia'
    }
];

let dptos = [
    {
        codigo: '0001',
        nombre: 'Atlantico',
        pais: 1
    },
    {
        codigo: '0002',
        nombre: 'Bolivar',
        pais: 1
    }
];

let ciudades = [
    {
        codigo: '0001-1',
        nombre: 'Barranquilla',
        dpto: '0001',
        pais: 1
    },
    {
        codigo: '0001-2',
        nombre: 'Soledad',
        dpto: '0001',
        pais: 1
    },
    {
        codigo: '0002-1',
        nombre: 'Cartagena',
        dpto: '0002',
        pais: 1
    },
    {
        codigo: '0002-2',
        nombre: 'Turbaco',
        dpto: '0002',
        pais: 1
    }
];


$(document).ready(()=>{
    
    let $selectPaises = $('#paises');
    let $selectDpto = $('#dptos');
    let $selectCiudades = $('#ciudades');

    $selectPaises.append($('<option />').val('').text('[SELECCIONE UN PAIS]'));
    paises.forEach((elemet,index)=>{
        $selectPaises.append($('<option />').val(elemet.codigo).text(elemet.nombre));
    });

    $selectPaises.on('change',(event)=>{
        $selectDpto.html('');
        $selectDpto.append($('<option />').val('').text('[SELECCIONE UN DEPARTAMENTO]'));
        dptos.forEach((element,index)=>{
            if(element.pais == event.target.value){
                $selectDpto.append($('<option />').val(element.codigo).text(element.nombre));
            }
        });
    });

    $selectDpto.on('change',(event)=>{
        $selectCiudades.html('');
        $selectCiudades.append($('<option />').val('').text('[SELECCIONE UNA CIUDAD]'));
        ciudades.forEach((element,index)=>{
            if(event.target.value == element.dpto){
                $selectCiudades.append($('<option />').val(element.codigo).text(element.nombre));
            }
        });
    });

    let btnAJAX = $('#ajax');
    btnAJAX.on('click',(event)=>{
        event.preventDefault;
        $.get('https://jsonplaceholder.typicode.com/posts',{userId:1},(data)=>{
            $('#consola').val(data);
        },'text');
    });

    let btnGenerar = $('#btnGenerar');
    btnGenerar.on('click',(event)=>{
        event.preventDefault;
        $('#response').load('https://jsonplaceholder.typicode.com/ .hero:first');
    });


});