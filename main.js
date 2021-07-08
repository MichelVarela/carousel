window.addEventListener('load',()=>{
    
    const fila = document.querySelector('.contenedor-carousel');
    const peliculas = document.querySelectorAll('.pelicula');
    const flechaIzquierda = document.querySelector('#flecha-izquierda');
    const flechaDerecha = document.querySelector('#flecha-derecha');
    
    /* **********Evenet listener para la flecha derecha********** */
    flechaDerecha.addEventListener('click',() => {
        fila.scrollLeft += fila.offsetWidth;/* cuando hagan click en flecha derecha, quiero que tomes el scroll de la fila(SCROL LEFT) y le sumes el OFFSET WIDTH */
        
        const indicadorActivo = document.querySelector('.indicadores .activo');
        
        if(indicadorActivo.nextSibling){/* si el indicador activo tiene un elemento a la derecha */
            indicadorActivo.nextSibling.classList.add('activo');/* le agregamos la clase activo al indicador que se encuentra a la derecha */
            indicadorActivo.classList.remove('activo');/* y al indicador que antes estaba activo se lo quitamos */
        }
    });
    
    /* **********Evenet listener para la flecha izquierda********** */
    flechaIzquierda.addEventListener('click',() => {
        fila.scrollLeft -= fila.offsetWidth;/* cuando hagan click en flecha izquierda, quiero que tomes el scroll de la fila(SCROL LEFT) y le restes el OFFSET WIDTH */
        
        const indicadorActivo = document.querySelector('.indicadores .activo');
        
        if(indicadorActivo.previousSibling){/* si el indicador activo tiene un elemento a la izquierda */
            indicadorActivo.previousSibling.classList.add('activo');/* le agregamos la clase activo al indicador que se encuentra a la izquierda */
            indicadorActivo.classList.remove('activo');/* y al indicador que antes estaba activo se lo quitamos */
        }
    });
    
    /* **********paginacion********** */
    const numeroPaginas = Math.ceil(peliculas.length / 5);/* cantidad de peliculas dividido la cantidad de peliculas que se muestran y MATH.CEIL para el redondeo hacia arriba en caso de resultado negativo*/
    
    for (let i = 0; i < numeroPaginas; i++) {
        const indicador = document.createElement('button');/* por cada pagina creamos un BUTTON */
        
        if(i == 0){
            indicador.classList.add('activo');
        }
        
        document.querySelector('.indicadores').appendChild(indicador);/* al selector .INDICADORES le agregamos con APPENDCHILD cada INDICADOR creado en la linea 21 */
        indicador.addEventListener('click', (e) => {/* cuando hagamos click en el BUTTON (INDICADOR) */
            fila.scrollLeft = i * fila.offsetWidth;/* accedemos a fila.SCROLL-LEFT y que sea igual al INDICE DE LA PAGE * el ANCHO DE FILA */
            
            document.querySelector('.indicadores .activo').classList.remove('activo');/* accedemos al INDICADOR ACTIVO, y eliminamos la CLASS ACTIVO */
            e.target.classList.add('activo');/* accedemos al INDICADOR con E.TARGET y agregamos la CLASS ACTIVO */
        })
        
    }

    /* **********hover********** */
    peliculas.forEach(pelicula => {/* iteramos las peliculas */
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;/* obtenemos el elemento al cual le pasamos el cursor (MOUSEENTER) */
            setTimeout(() => {
                peliculas.forEach(pelicula => pelicula.classList.remove('hover'));/* que a las peliculas le eliminen la clase HOVER */
                elemento.classList.add('hover')
            }, 300)
        })
    })

    fila.addEventListener('mouseleave', () => {/* cuando salga el cursor */
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    })
})