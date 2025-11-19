//Ejer 1
let compras = ["Manzanas"];

compras.push("Leche", "Pan");
compras.unshift("Huevos");
compras.splice(1, 1);

console.log(compras);

//Ejer 2 
let tareas = ["Revisar emails"];

tareas.unshift("Llamar al cliente");
tareas.unshift("Preparar reporte");
tareas.shift();
tareas.shift();

console.log(tareas);

//Ejer 3 
let historial = ["google.com", "youtube.com", "facebook.com"];

historial.pop();
historial.pop();

console.log(historial);

//Ejer 4 
let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

colaImpresion.shift(); 
colaImpresion.push("doc4.txt"); 
colaImpresion.shift(); 

console.log(colaImpresion);

//Ejer 5 
let fila = ["Ana", "Luis", "Carlos", "Maria"];

fila.splice(1, 1); 
fila.splice(1, 0, "Jorge"); 

console.log(fila);

//Ejer 6 
let mazo = ["As", "Rey", "Reina", "Jota"];

mazo.reverse(); 
mazo.shift();   

console.log(mazo);

//Ejer 7 
let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

asientos.fill("Reservado", 1, 4);

console.log(asientos);









