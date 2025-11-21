-----------------------
BASE
----------------------

npm create vite@latest hola-mundo-react -- --template=react

Para que se cambie el puerto:
package.json
dev: " vite --port=numero"

npm install bootstrap
npm install sass -> para el css
npm install vite-plugin-sass

en app.jsx eliminamos todo menos el function, el return y el export

borramos app.css e index.css y creamos index.scss
en main.jsc cambiamos css a scss

en vite.config agregar import sassPlugin from 'vite-plugin-sass' plugins: [react(), sassPlugin()]

npm install primereact

hay que importar: 
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
en el main.jsx
y abajo del strict mode poner
<PrimeReactProvider>
y abajo del app
</PrimeReactProvider>

Asi todo lo de adentro tiene react

import "primereact/resources/themes/lara-light-cyan/theme.css";

o no ponerle con 
<PrimeReactProvider value={{ unstyled: true }}>


Para ponerle estilo
en el index.scss 
@import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
@import "../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css";
@import "../node_modules/primereact/resources/theme/ y elegir uno";
ej: @import "../node_modules/primereact/resources/themes/lara-light-purple/theme.css";
hasta aqui es la base


npm run dev para iniciar

--------------------
REACT ROUTER
--------------------
npm install react-router-dom

en el main 
import { BrowserRouter } from 'react-router-dom'
<BrowserRouter> arriba de app y abajo de primereact </BrowserRouter> abajo de app y arriba de primereact

crear capeta pages
crear un archivo por cada pagina

en app 
dentro del return 
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registrar" element={<RegistrarLectura />} />
      <Route path="/mediciones" element={<MedicionesExistentes />} />
    </Routes>

como usar las rutas en navbar
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

y 
command: () => navigate("/"),
para cada item