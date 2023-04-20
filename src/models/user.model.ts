// 01. Se creó Interface y Enum
enum Genero {
  Masculino = 'masculino',
  Femenino = 'femenino',
  Otro = 'otro',
}

export interface Usuario {
  nombre: string
  apellido: string
  dni: string
  direccion: string
  genero: Genero
  edad: number
  fechaNacimiento: string
  pais: string
}
