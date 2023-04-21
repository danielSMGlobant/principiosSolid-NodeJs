# Título del proyecto
principiosSolid-NodeJs

# Descripción
Este proyecto esta basado en NodeJs y Express para estudiar los Principios SOLID

- Single Responsibility Principle (Principio de responsabilidad única).
  - CASO1: Se desea crear un ENDPOINT que la información de un usuario en específico pero validando que el parametro de entrada sea su DNI y que cumpla con ciertos criterios
  
- Open/Closed Principle (Principio de abierto/cerrado). 
  - CASO2: Se desea crear un ENDPOINT para ingresar la data de la compra de un producto, además se debe validar previamente que el producto antes de hacer la compra
  
- Liskov Substitution Principle (Principio de sustitución de Liskov).
  - CASO3: Se buca crear ENDPOINTs para calcular el área de una Figura, sea cual sea, puede que sea un Rectangulo o un Circulo u otro que se desee calcular. 
  
- Interface Segregation Principle (Principio de segregación de interfaces).
  - CASO4: Se busca crear dos ENDPOINTs de Login uno para un usuario Corporativo y otro para un usuario Externo
  
- Dependency Inversion Principle (Principio de inversión de dependencia).


# Instalación
Dirigirte a la ruta del archivo del proyecto
Abrir el terminar en esa ruta
Ingresar el comando > npm install 
Dejar que descargue las dependencias indicadas en el package.json
Ahora puedes abrir el proyecto en el editor de código deseado

# Despliegue
Dirigirte a la ruta del archivo del proyecto
Abrir el terminar en esa ruta
Ingresar el comando > npm run dev
