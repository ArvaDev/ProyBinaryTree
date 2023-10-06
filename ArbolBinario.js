// Creamos la clase de nodos
class Nodo {
    constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
    }
    }

    // Definimos el arbol
    class BinaryTree {
    constructor() {
    this.raiz = null;
    }

    // Función del árbol para agregar un valor
    insertar(valor) {
    // Crear nodo
    const nodoNuevo = new Nodo(valor);
    // Si el árbol está vacío
    if (this.raiz === null) {
    this.raiz = nodoNuevo;
    return true;
    }
    else {
    // Buscar la posición en el árbol si ya tiene datos
    let nodoActual = this.raiz;
    while (true) {
    // Si es menor se va al sub- árbol de la izquierda
    if (valor < nodoActual.valor) {
    // Si el hijo de la izquierda está vacío se inserta un nodo
    if (nodoActual.izquierda === null) {
    nodoActual.izquierda = nodoNuevo;
    return true;
    }
    // Se mueve hacia el nodo de la izquierda
    nodoActual = nodoActual.izquierda;
    }
    // Si es mayor o igual te vas a la derecha
    else {
    // Si el sub-árbol derecho es nulo, se inserta un nuevo nodo
    if (nodoActual.derecha === null) {
    nodoActual.derecha = nodoNuevo;
    return true;
    }
    // Te mueves al nodo de la derecha
    nodoActual = nodoActual.derecha;
    }
    }
    }
    }

    // Función para la búsquedaPP
    buscar(valor) {
    // Se inicia la búsqueda en la raíz
    let nodoActual = this.raiz;
    let coincidencias = [];
    // Función interna recursiva para realizar la búsqueda en el árbol
    function buscarRecursivo(nodo) {
    // Si el nodo actual es nulo, termina la recursión
            if (nodo === null) {
                return;
            
        }

        // Si encuentras el valor, lo agregas al array de coincidencias
        if (valor === nodo.valor) {
            coincidencias.push(nodo.valor);
        }

        buscarRecursivo(nodo.izquierda);
        buscarRecursivo(nodo.derecha);
    }
    // Llama a la función de búsqueda recursiva para encontrar todas las coincidencias
    buscarRecursivo(nodoActual);

    // Retorna el array de coincidencias encontrado
    return coincidencias;
    }
    }


    

    // Ejemplo de uso
        const binaryTree = new BinaryTree();
        binaryTree.insertar(5);
        binaryTree.insertar(2);
        binaryTree.insertar(2);
        binaryTree.insertar(8); 
        binaryTree.insertar(8); 
       
            
             //por que ahora si funciona, y un momento atras me decia que mi metodo no estaba definido en mi objeto
            console.log(binaryTree.buscar(5)); 
            console.log(binaryTree.buscar(8));
