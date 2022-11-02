 
export class Usuario {
    id:number = 0;
    nome:string = '';
    sobreNome:string='';
    email:string='';
    dataNascimento:Date= null;
    escolaridade:number=1; 

    Usuario (us:Usuario){
        this.id = us.id;
        this.nome = us.nome;
        this.sobreNome = us.sobreNome;
        this.email = us.email;
        this.dataNascimento = us.dataNascimento;
        this.escolaridade = us.escolaridade; 
        this.dataNascimento = new Date(us.dataNascimento);
    }
}