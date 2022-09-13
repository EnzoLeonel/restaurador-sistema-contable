# Restaurador de Base de Datos Web
Sencilla aplicación Node Express diseñada para reparar y borrar los datos corruptos de base de datos MYSQL pública usada para el proyecto [Sistema Contable](https://github.com/EnzoLeonel/SistemaContable).

## ¿Porqué usar un restaurador?
Para poder probar de forma fácil el software de Sistema Contable, se necesitó usar un servicio público de Bases de datos, en este caso, Clever Cloud, pero con la desventaja de exponerlo a ingreso de datos erroneos o uso malintencionado.

Al ingresar al [restaurador web](https://restaurador-sistema-contable.onrender.com/), ejecuta una serie de comandos que elimina las tablas y las crea nuevamente, mostrando una notificacion de "Restauracion exitosa".

Se utilizó el servicio de Render para alojar los archivos necesarios, ejecutar la aplicación web y tener un dominio público de fácil acceso. Podés ingresar con el siguiente link: https://restaurador-sistema-contable.onrender.com/
