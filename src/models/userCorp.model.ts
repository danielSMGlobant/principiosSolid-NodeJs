export interface IUser {
  name: string
  age: number
  mail: string
}

export interface IUserCorp {
  mailCorp: string
  studio: string
  login: (username: string, password: string) => boolean
}

export interface IUserExt {
  corpExt: string
  register: (username: string, password: string) => boolean
  login: (username: string, password: string) => boolean
}

export class UserCorp implements IUser, IUserCorp {
  name: string
  age: number
  mail: string
  mailCorp: string
  studio: string

  constructor (
    nameUser: string,
    ageUser: number,
    mailUser: string,
    mailCorpUser: string,
    studioUser: string
  ) {
    this.name = nameUser
    this.age = ageUser
    this.mail = mailUser
    this.mailCorp = mailCorpUser
    this.studio = studioUser
  }

  login (_username: string, _password: string): boolean {
    console.log(`${this.name}, bienvenido a Globant`)
    console.log(`Perteneces al Studio de ${this.studio}`)
    console.log('Tu mail corporativo es:', this.mailCorp)
    return true
  }
}

export class UserExt implements IUser, IUserExt {
  name: string
  age: number
  mail: string
  corpExt: string

  constructor (
    nameUser: string,
    ageUser: number,
    mailUser: string,
    corpExtUser: string
  ) {
    this.name = nameUser
    this.age = ageUser
    this.mail = mailUser
    this.corpExt = corpExtUser
  }

  register (_username: string, _password: string): boolean {
    console.log(`${this.name}, Registro realizado, bienvenido a Globant`)
    console.log('Tu mail es:', this.mail)
    return true
  }

  login (_username: string, _password: string): boolean {
    console.log(`Hola ${this.name}, Globant te da la bienvenida.`)
    console.log(`También queremos brindate los mejores servicios para tu empres ${this.corpExt}`)
    console.log('Tu mail es:', this.mail)
    return true
  }
}
