export class User {
    id: number;
    username: string;
    password: string;
    nome: string;
    sobreNome: string;
    cargo: string;
    token?: string;

    constructor(id: number, username: string, password: string, nome: string, sobreNome: string, cargo: string, token?: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.cargo = cargo;
        this.token = token;

    }

    // public string  toJson() {

    //     result: string;

    //     return result;
    // }

    
    // public fromJson() {

    //     result: string;

    //     return result;
    // }

}