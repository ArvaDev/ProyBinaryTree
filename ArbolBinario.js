// Creamos la clase de nodos
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Definimos el árbol binario de búsqueda
class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    // Función del árbol para agregar un valor
    insertar(valor) {
        // Crear nodo nuevo
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
                // Si es menor se va al sub-árbol de la izquierda
                if (valor < nodoActual.valor) {
                    // Si el hijo de la izquierda está vacío, se inserta un nodo
                    if (nodoActual.izquierda === null) {
                        nodoActual.izquierda = nodoNuevo;
                        return true;
                    }
                    // Se mueve hacia el nodo de la izquierda
                    nodoActual = nodoActual.izquierda;
                }
                // Si es mayor o igual, se va al sub-árbol de la derecha
                else {
                    // Si el sub-árbol derecho es nulo, se inserta un nuevo nodo
                    if (nodoActual.derecha === null) {
                        nodoActual.derecha = nodoNuevo;
                        return true;
                    }
                    // Se mueve hacia el nodo de la derecha
                    nodoActual = nodoActual.derecha;
                }
            }
        }
    }

    // Función para buscar y retornar un arreglo de coincidencias
    buscarCoincidencias(valor) {
        const coincidencias = []; // Arreglo para almacenar las coincidencias

        // Función recursiva para buscar coincidencias en el árbol
        function buscarRecursivo(nodo) {
            if (nodo === null) {
                return;
            }

            if (valor === nodo.valor) {
                coincidencias.push(nodo.valor);
            }

            buscarRecursivo(nodo.izquierda); // Buscar en el subárbol izquierdo
            buscarRecursivo(nodo.derecha);   // Buscar en el subárbol derecho
        }

        buscarRecursivo(this.raiz); // Comenzar la búsqueda desde la raíz

        return coincidencias; // Retornar el arreglo de coincidencias
    }
}


const binaryTree = new BinaryTree();

binaryTree.insertar(5);
binaryTree.insertar(2);
binaryTree.insertar(2);
binaryTree.insertar(3);
binaryTree.insertar(8);


// Llamar a buscarCoincidencias para encontrar coincidencias del valor 3
const coincidencias = binaryTree.buscarCoincidencias(2);

console.log(coincidencias); 

