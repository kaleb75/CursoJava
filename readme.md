# Curso de Desarrollo en Java: Proyecto Sistema de Gestión de Usuarios

Este curso te guiará paso a paso en el desarrollo de un sistema básico de gestión de usuarios utilizando **Java**, **Eclipse IDE** y **MySQL**. Aprenderás a conectar tu aplicación con una base de datos y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Contenidos del Curso

1. **Introducción**  
   - Qué es Java y su uso en aplicaciones del mundo real.
   - Importancia de integrar bases de datos con Java.
2. **Instalación y Configuración de Herramientas**
3. **Creación de la Base de Datos en MySQL**
4. **Configuración del Proyecto en Eclipse**
5. **Desarrollo del Código Java**
6. **Mejoras Futuras y Extensiones del Proyecto**

---

## Prerrequisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- **Java Development Kit (JDK):** [Descargar JDK](https://www.oracle.com/java/technologies/javase-downloads.html)  
  Instala la versión más reciente del JDK para desarrollar aplicaciones Java.

- **Eclipse IDE:** [Descargar Eclipse](https://www.eclipse.org/downloads/)  
  Eclipse es un entorno de desarrollo integrado para trabajar con Java.

- **MySQL Server y MySQL Workbench:** [Descargar MySQL](https://dev.mysql.com/downloads/)  
  MySQL es el sistema de gestión de bases de datos que utilizaremos para este proyecto.

---

## Introducción al Proyecto

En este curso, desarrollaremos un sistema de gestión de usuarios que permite:

- Agregar nuevos usuarios a la base de datos.
- Leer y mostrar usuarios existentes.
- Eliminar usuarios de la base de datos.

### ¿Qué aprenderás?

- Configuración de un entorno de desarrollo Java.
- Conexión de Java con bases de datos usando JDBC.
- Uso de consultas SQL para interactuar con MySQL.
- Escritura de código Java para realizar operaciones CRUD.

---

## Pasos Iniciales

### 1. Instalación y Configuración

Sigue las instrucciones del siguiente video para instalar y configurar todas las herramientas necesarias:  
🔗 [Guía de Instalación y Configuración](https://youtu.be/zz9vG4tdB2U?si=JaRFuHDdEHzYamFH)

### 2. Creación de la Base de Datos

Usa el siguiente script SQL en **MySQL Workbench** para crear tu base de datos:

```sql
-- Crear la base de datos
CREATE DATABASE sistema_usuarios;

-- Seleccionar la base de datos
USE sistema_usuarios;

-- Crear la tabla usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    edad INT NOT NULL
);
