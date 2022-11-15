export class Utilisateur {
    private _username: string;


    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    constructor(){
        this._username="";
    }

    public  toString():string{
        return this._username;
    }
  

}
