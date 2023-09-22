
const personajesSimpsons = [
    {
      nombre: "Homer Simpson",
      edad: 39,
      rol: "Padre de familia"
    },
    {
      nombre: "Marge Simpson",
      edad: 38,
      rol: "Madre de familia"
    },
    {
      nombre: "Bart Simpson",
      edad: 10,
      rol: "Hijo mayor"
    },
    {
      nombre: "Lisa Simpson",
      edad: 8,
      rol: "Hija mediana"
    },
    {
      nombre: "Maggie Simpson",
      edad: 1,
      rol: "Hija menor"
    }
  ];

  const personajesSimpsonsDos = [
    {
      nombre: "Ned Flanders",
      edad: 45,
      rol: "Vecino amable"
    },
    {
      nombre: "Montgomery Burns",
      edad: 104,
      rol: "Dueño de la Planta Nuclear"
    }
  ];
  
  console.log(personajesSimpsonsDos);
  
  
  console.log(personajesSimpsons);

  const nuevoArray = personajesSimpsons.filter(elemento => elemento.edad < 18)
  const resultado = personajesSimpsons.reduce((Acumulador,elemento) => Acumulador + elemento.edad, 0  )
  const nombres = personajesSimpsons.map(elemento => elemento.nombre)

  const combinado = [...personajesSimpsons.nombre, ...personajesSimpsonsDos.nombre];


  console.log(combinado)
  