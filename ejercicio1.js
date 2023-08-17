//console.log("hola mundo")


//clase: fabrica o molde para generar objetos
class Guerrero {
    //dos atributos: edad y energía --> lo hacemos a traves de un contructor.
    constructor() {
      this.edad = 19
      this.energia = 0
    }
    estaFeliz() {
      return this.energia >= 50 && this.edad % 2 == 1
    }
    comer(comida, gramos) {
      this.energia += gramos * comida.energiaQueAporta()
    }
    cumplirAnios() {
      this.edad += 1
    }
    visitar(lugar) {
      this.energia += lugar.recargar()
    }
  }
  
  
  //comidas
  
  //objeto puntual pescado
  const pescado = {
    energiaQueAporta() {
      return 5
    }
  }
  
  const bigMac = {
    energiaQueAporta() {
      return 10
    }
  }
  
  let queso = {
    estaMojado: false,
    energiaQueAporta() {
      if (this.estaMojado)
        return 1
      else
        return 3
    }
  }
  
  /*
  Lugares:
    Sierras: 150
    Patagonia: 180
    Mar del plata
      Alta: 200
      baja: -50
      Media: 0
  */
  
  const sierrasCordobesas = {
    recargar() {
      return 150
    }
  }
  
  const patagonia = {
    recargar() {
      return 180
    }
  }
  
  let marDelPlata = {
    temporada(unatemporada) {
      temporada = unatemporada
    },
    recargar() {
      return temporada.recargaEnergia()
    }
  }
  
  //temporadas
  const baja = {
    recargaEnergia() {
      return -50
    }
  }
  
  const media = {
    recargaEnergia() {
      return 0
    }
  }
  const alta = {
    recargaEnergia() {
      return 200
    }
  }
  
  
  //generar nuevo gerrero:  ```` alt 96
  const floki = new Guerrero()
  floki.comer(queso, 100)
  console.log(`La energía de floki es ${floki.energia}`)//getter
  
  console.log(`La edad de floki es ${floki.edad}`)
  floki.cumplirAnios()
  console.log(`La edad de floki es ${floki.edad}`)
  console.log(`Esta feliz floki? ${floki.estaFeliz()}`)
  
  const ragnar = new Guerrero()
  
  ragnar.cumplirAnios()
  ragnar.cumplirAnios()
  console.log(`La edad de ragnar es ${ragnar.edad}`)
  console.log(`Esta feliz ragnar? ${ragnar.estaFeliz()}`)
  /*
  
  Muchas lineas de comentarios
  */
  //ciudades y temporadas, 
  
  
  floki.visitar(patagonia)
  console.log(`La energía de floki es ${floki.energia}`)
  
  marDelPlata.temporada(baja)
  floki.visitar(marDelPlata)
  console.log(`La energía de floki es ${floki.energia}`)
  
