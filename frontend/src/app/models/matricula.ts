export class Matricula {
    constructor(
        public tipo: string,
        public placa: string,
        public marca: string,
        public tipoUsuario: string,
        public fechaMatricula: string,
        public propietario: {
            id: string,
            tipo: string,
            nombre: string,
            direccion: string
        }
    ) { }
}