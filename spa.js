//En particular, vamos a estudiar algunos aspectos de Olivia, Bruno y Ramiro. De cada uno de ellos nos van a interesar distintas cosas.


const olivia = {
  concentracion: 10,
  recibeMasaje(){
    this.concentracion+=3
  },
  discute(){
    this.concentracion-=1
  },
  tomaBañoDeVapor(){
  },
  gradoDeConcentracion(){
    return concentracion
  }
}

const bruno = {
  feliz: true,
  sed: false,
  peso: 55000,
  recibeMasaje(){
    this.feliz=true
  },
  estaFeliz(){
    return this.feliz
  },
  tomaBañoDeVapor(){
    this.peso-=500
    this.sed=true
  },
  tomaAgua(){
    this.sed=false
  },
  comeFideos(){
    this.peso+=250
    this.sed=false
  },
  corre(){
    this.peso-=300
  },
  veElNoticiero(){
    this.feliz=false
  },
  estaPerfecto(){
    return (this.feliz && this.peso>=50000 && this.peso<=70000 && !this.sed)
  }
}


const ramiro = {
  contractura: 5,
  pielGrasosa: true,
  gradoDeContractura(){
    return this.contractura
  },
  recibeMasaje(){
    if (this.contractura<2){
      this.contractura=0;
    }
    else {this.contractura-=2}
  },
  tomaBañoDeVapor(){
    this.pielGrasosa = false
  },
  comeBigmac(){
    this.pielGrasosa = true
  },
  bajaAlaFosa(){
    this.pielGrasosa = true
    this.contractura+=1
  },
  juegaAlPaddle(){
    this.contractura+=3
  },
  diaDeTrabajo(){
    this.bajaAlaFosa()
    this.comeBigmac()
    this.bajaAlaFosa()
  },
  tomaBañoDeVapor(){
    this.pielGrasosa = false
  }
}

const spa = {
  persona: bruno,
  atender(unapersona){
    this.persona = unapersona
    this.persona.recibeMasaje()
    this.persona.tomaBañoDeVapor()
  }
}


/*
console.log(`: ${}`)

*/
/*
console.log(`Bruno, esta feliz? ${bruno.feliz}`)
bruno.veElNoticiero()
console.log(`Bruno, esta feliz? ${bruno.feliz}`)
bruno.corre()
console.log(`Cuanto pesa bruno? ${bruno.peso}`)
console.log(`Bruno, tiene sed? ${bruno.sed}`)
console.log(`Bruno, esta perfecto? ${bruno.estaPerfecto()}`)
bruno.recibeMasaje()
console.log(`Bruno, esta perfecto? ${bruno.estaPerfecto()}`)
bruno.tomaBañoDeVapor()
console.log(`Bruno, esta perfecto? ${bruno.estaPerfecto()}`)
*/


spa.atender(ramiro)
console.log(`El nivel de contractura de ramiro es: ${ramiro.contractura}`)
console.log(`Tiene la piel grasosa?: ${ramiro.pielGrasosa}`)
ramiro.diaDeTrabajo()
console.log(`El nivel de contractura de ramiro es: ${ramiro.contractura}`)
console.log(`Tiene la piel grasosa?: ${ramiro.pielGrasosa}`)
spa.atender(ramiro)
console.log(`El nivel de contractura de ramiro es: ${ramiro.contractura}`)
console.log(`Tiene la piel grasosa?: ${ramiro.pielGrasosa}`)
