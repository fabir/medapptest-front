import { Especialidad } from "./especialidad";

export class Medico{
    idMedico : number;
    nombres: string;
    apellidos: string;
    cpf: string;
    direccion: string;
    correo: string;
    telefono: string;
    sexo:string;
    edad:number;
    especialidades:Especialidad[];
}