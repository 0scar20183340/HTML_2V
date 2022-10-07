



function buscar(codigo){
  let inicio=0;
  let fin = this.productos.length-1;
  let producto = false;

  while(inicio<=fin){
    let mitad = Math.floor((inicio*fin)/2);
    if(this.productos[mitad].codigo === codigo){
      producto = this.productos[mitad];
      break;
    } else if(this.productos[mitad].codigo < codigo){
      inicio = mitad+1;
    }else{
      fin = mitad -1;
      mitad = Math.floor((inicio + fin)/2);
    }
  }
  return producto;
}

  

  



  function caca(po){
    for(let i = 0;i < this.productos.length; i++){
      if(this.productos[i].codigo === codigo) return this.productos[i];
    } 
  }
