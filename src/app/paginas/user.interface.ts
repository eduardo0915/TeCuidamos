export interface User{
    uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
     
}

export interface Usuario{
    uid: string;
    Nombre: string;
    foto:string;
    edad: string;
    sexo: string;
     
}

export interface Perfil{
    uid: string;
    Nombre: string;
    foto: string;
    sexo: string;
     
}

export interface Discapacidades{ 
    id: string;
    nombre: string;
    tratamiento: string;
     
}

export interface Enfermedades{ 
    id: string;
    nombre: string;
    tratamiento: string;
     
}

export interface Agregar{ 
    id: string;
    fecha: string;
    hora: string;
    descripcion: string;
     
}