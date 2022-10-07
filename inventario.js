export default class Inventario {
  constructor(){
    this.productos = [];
  }

  acomodar(){
    if(this.productos.length != 0){
      let aux= 0;
      for(let i = 0; i < this.productos.length-1; i++){
        for(let j = 0; j < this.productos.length-1; j++){
          if(this.productos[j+1].codigo < this.productos[j].codigo){
            aux = this.productos[j+1];
            this.productos[j+1] = this.productos[j];
            this.productos[j] = aux;
          }
        }
      } 
    } else {
      return null;      
    }
  }


  agreagar(producto){
    this.productos.push(producto);
    this.acomodar();

  }

  buscar(codigo){
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


  eliminar(codigo){
    for(let i =0; i < this.productos.length; i++){
      if(this.productos[i].codigo === codigo){
        this.productos = this._eliminarElemento(this.productos, i);
      }
    }

  }

  _eliminarElemento(vec = [], index = 0){
    let modificar = [];

    vec[index] = 0;
    for(let i = 0; i< vec.length; i++){
      if(vec[i] != 0){
        modificar.push(vec[i])
      }
    }
    return modificar;
  }

  listado(){
    if(this.productos.length == 0) return '[]';
    let listTex =  `[`;
    for(let i = 0; i < this.productos.length - 1 ;i++){
      listTex += this.objetoTexto(this.productos[i]) + ", ";
    }
    listTex+= this.objetoTexto(this.productos[this.productos.length-1]);
    listTex += `]`
    return listTex;
  }

  listadoInv(){
    if(this.productos.length == 0) return '[]';
    let listadoInv = [];
    for(let i = this.productos.length-1; i >=0; i--){
      listadoInv.push(this.productos[i]);
    }
    let listTex =  `[`;
    for(let i = 0; i < this.productos.length - 1 ;i++){
      listTex += this.objetoTexto(listadoInv[i]) + ", ";
    }
    listTex+= this.objetoTexto(listadoInv[listadoInv.length-1]);
    listTex += `]`
    return listTex;
  }

  objetoTexto(producto ={}){
    return  `{codigo: ${producto.codigo}, nombre: ${producto.nombre}, cantidad: ${producto.cantidad}, costo: ${producto.costo}}`;
  }

}