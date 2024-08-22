const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log(pizzas);

/* a)  Las pizzas que tengan un id impar.
 */
console.log('Pizzas impares');
const impar = pizzas.filter((pizza) => (pizza.id % 2)!=0);
console.log(impar);

/* b) Responder: ¿Hay alguna pizza que valga menos de $600? */

console.log('Pizzas Pizzas cual costo es menor a 60');

const menosdesesientos = pizzas.filter((pizza) => (pizza.precio < 6000)!=0);



console.log('Pizza Cuyo valor son menores de 6000'+ menosdesesientos);


/* c) El nombre de cada pizza con su respectivo precio. */
console.log("\nNombre y precio de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});



/* 
d) Todos los ingredientes de cada pizza (En cada iteración imprimir 
  los ingredientes de la pizza que se esta recorriendo). 


  Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array
 de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes. */

 console.log("\nIngredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`Ingredientes de la ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => console.log(`- ${ingrediente}`));
});
