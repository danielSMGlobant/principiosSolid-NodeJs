import { Usuario } from '../models/user.model'
import usuarioData from '../data/usuarioData.json'

// 02. Se convirtió la data JSON en una data Array de tipo Usuario
const usuarios: Usuario[] = usuarioData as Usuario[]

export const userByDNI = (params: string): Usuario | undefined => {
  // 07. Se creó función para filtro
  return usuarios.find((d) => d.dni === params)
}
