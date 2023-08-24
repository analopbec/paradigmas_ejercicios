/*
luisa, --> jugadora (ultimo en modelar)

personajes:
floki, un personaje guerrero,
  tiene un arma

mario, un personaje trabajador,

armas:
  ballesta 
  jabalina

elementos:
castillo
  altura(20) NO ES ATRIBUTO, NO SE MODIFICA
  defensa 150 ES ATRIBUTO, //VARIABLE
    crece si aurora esta viva
aurora 
  altura(1) NO ES ATRIBUTO, NO SE MODIFICA
  viva=true --> ATRIBUTO BOOLEANO
tipa() 
  altura=8 puede crecer --> ATRIBUTO // VARIABLE
  
LO QUE NO VARIA NO ES UN ATRIBUTO
*/


const ballesta = {
  flechas:10,
  registrarUso() {
    this.flechas -= 1
  },
  estaCargada() {
    return this.flechas>0
  },
  potencia() {
    return 4
  }
}
const torres = {
  guardias:250,
  recibirAtaque(potencia){
    
  }
    
}

const revolver = {
  balas:10,
  registrarUso() {
    this.flechas -= 1
  },
  estaCargada() {
    return this.balas>0
  },
  potencia() {
    return 50
  }
}

const jabalina = {
  estaCargada: true,
  registrarUso() {
    this.estaCargada = false
  },
  estaCargada(){
    this.estaCargada    
  },
  potencia() {
    return 30
  }
}

/*
ballesta.registrarUso()
console.log(`La cantidad de flechas es: ${ballesta.flechas}`)
console.log(`La jabalina esta cargada?: ${jabalina.estaCargada()}`)
jabalina.registrarUso()
*/

const castillo = {
  nivelDeDefensa:150,
  recibirAtaque(potencia){
    this.nivelDeDefensa -= potencia
  },
  altura(){
    return 20
  },
  valorQueOtorga(){
    return this.nivelDeDefensa*0.2
  },
  recibirTrabajo(){
    this.nivelDeDefensa+=20
  }
}

const aurora = {
  viva:true,
  recibirAtaque(potencia){
    this.viva= potencia<10 && this.viva
  },
  altura(){
    return 1
  },
  valorQueOtorga(){
    return 15
  },
  recibirTrabajo(){
  }
}

const tipa={
  alto:8,
  recibirAtaque(potencia){
  },
  altura(){
    return this.alto
  },
  valorQueOtorga(){
    return this.alto*2
  },
  recibirTrabajo(){
    this.alto+=1
  }
}

/*
castillo.recibirAtaque(15)
console.log(`Nivel defensa ${castillo.nivelDeDefensa}`)
console.log(`${aurora.viva}`)
aurora.recibirAtaque(15)
console.log(`${aurora.viva}`)
*/


const floki = {
  arma: jabalina,
  cambiarArma(unArma){
    this.arma= unArma
  },
  encontrar(unElemento) {
    if (this.arma.estaCargada()){
    unElemento.recibirAtaque(this.arma.potencia())
    this.arma.registrarUso()
    }
  }
}

/*
floki.cambiarArma(ballesta)
floki.encontrar(aurora)
floki.encontrar(castillo)
console.log(`nivel de defensa del castillo: ${castillo.nivelDeDefensa}`)
console.log(`armas de la ballesta: ${ballesta.flechas}`)

floki.cambiarArma(jabalina)
floki.encontrar(aurora)
console.log(`esta viva aurora?: ${aurora.viva}`)
console.log(`la jabalina esta cargada: ${jabalina.estaCargada()}`)
*/

//

const mario={
  valorRecolectado:0,
  encontrar(unelemento)	{
    unelemento.recibirTrabajo()
    this.valorRecolectado+=unelemento.valorQueOtorga()
  }
}

/*
mario.encontrar(castillo)
console.log(`nivel de defensa del cast ${castillo.nivelDeDefensa}`)
console.log(`nivel recolectado ${mario.valorRecolectado}`)

mario.encontrar(tipa)
console.log(`nivel recolectado ${mario.valorRecolectado}`)
*/

const luisa = {
  personaje:floki,
  aparece(elemento){
    this.personaje.encontrar(elemento)    
  },
  cambiaPersonaje(unpersonaje){
    this.personaje=unpersonaje
  }
}

luisa.aparece(castillo)
console.log(`nivel de defensa del castillo: ${castillo.nivelDeDefensa}`)

