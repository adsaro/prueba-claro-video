Este proyecto es un clon reducido de Claro Video.

El proyecto sólo muestra un listado de la programción disponible en Claro Video. Es posible seleccionar cualquiera de los shows de la lista para ver información más detallada del mismo.

Desde la lista de elementos es posible filtar en base al título del show.

Al dar click en algún elemento se abre una ventana modal que contiene la información más detallada del show. Este modal se puede cerrar dando click al boton rojo de la esquina superior derecha, dando click fuera del recueadro del modal o presionando la tecla Esc.

El proyecto funciona con Redux y React-Redux para una mayor facilidad en el manejo de la información dentro del mismo.

Lost tests aún no son exhaustivos pero ya es relativamente fácil extenderlos para lograr cubrir todos los posibles casos de uso.

## Scripts Disponibles

En la raíz del proyecto puedes ejecutar los siguientes scripts:

### `yarn`

Instala las dependencias del proyecto que permiten ejecutar el resto de los scripts. Es necesario ejecutar este comando antes de intentar ejecutar algún otro script.

### `yarn start`

Compila el código y lo ejecuta.<br />
Abre [http://localhost:3000](http://localhost:3000) para poder verlo en el navegador.

### `yarn test`

Ejecuta las suites de test que se encuentran en el proyecto.

### `yarn build`

Compila el proyecto para producción.


