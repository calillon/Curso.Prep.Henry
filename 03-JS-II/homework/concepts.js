/* ## Instrucciones
---
1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

* `for`
* `&&`, `||`, `!`
##*/ 

//Explicación de for

/* El ciclo FOR nos permite iterar en un número de terminado de ciclos mediante el incremento del contabilizador de ciclos ej: for(var cont=0; cont<=n; cont++;)
    a partir de la definición de las condiciones para ejecutar el ciclo, todo lo que está dentro del ciclo se va repetir las veces que hayamos definido que se va recorrer.
    Ejemplo: Si queremos imprimir un número n veces, la condición del ciclo for(var cont=0; cont<=n; cont++;) se va ejecutar hasta que el contabilizador sea igual a n y
    una vez cumpliendo esta condición finalizaría el ciclo.

    var n = 5;
    for(var cont=0; cont<=n; cont++;){
        console.log(n);
    }
    //En este ejemplo definimos el valor de n como 5 y esto quiere decir que se va imprimir desde el número 0 hasta 5 en consola.

    --------

*/

// Explicación de los operadores lógicos

/* 
En JavaScript disponemos de los operadores lógicos habituales en lenguajes de programación como son 
“es igual”, “es distinto”, menor, menor o igual, mayor, mayor o igual, and (y), or (o) y not (no). 
La sintaxis se basa en símbolos como veremos a continuación y cabe destacar que hay que prestar
atención a no confundir == con = porque implican distintas cosas.

Operadores lógicos y relacionales   Descripción           Ejemplo
                ==                      Es igual            a==b
                ===                es estrictamente igual   a===b
                !=                      Es distinto         a!=b
                !==              Es estrictamente distino   a!==b
            <, <=, >, >=      Menor, menor o igual,         a<=b
                                mayor, mayor o igual
                &&                Operador anidación (y)    a && b
                ||                Operador decisión (o)     a || b
                !                  Operador negación (not)    !a
-------------

Ejemplos:
Si las variables A = 5, B = 3, C = -12 las expresiones darían como resultado lo siguiente:
A > 3  (True)        A > C  (True)        A < C  (False)
B < C  (False)       B!= C  (True)        A == 3 (False)
A * B == 15 (True)   A * B == -30 (True)  C/B < A (True)    
C / B == -10 (False)  C/B == - 4 (True)   A + B + C == 5 (False)
*/

