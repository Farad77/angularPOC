import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tache } from '../tache';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tacheCourante:Tache;
  listeTache:Tache[];
  constructor(private http:HttpClient) { 
    this.tacheCourante=new Tache();
    this.listeTache=new Array<Tache>();
    let a=1;
    this.recupererToutesLesTaches();
    a=2;
    
  }

  public recupererToutesLesTaches(){
    this.http.get<Tache[]>("http://localhost:8080/Projet/rest/taches")


    
    .subscribe(taches=>{
      this.listeTache=taches;console.log(taches)});
  }

  ngOnInit(): void {
   
  }

  public creerTache(){
    this.listeTache.push(this.tacheCourante);
    console.log("tache envoyée: "+this.tacheCourante);
    this.http.post("http://localhost:8080/Projet/rest/taches",this.tacheCourante)
    .subscribe(val=>{
      console.log(val)
      this.recupererToutesLesTaches(); 
    });
    this.tacheCourante=new Tache();
  }

  public delete(tache:Tache){
    this.http.delete("http://localhost:8080/Projet/rest/taches/"+tache.id)
    .subscribe(val=>{
      console.log("j'ai effacé la tache "+tache.id+" pîstache!");
   
      this.recupererToutesLesTaches(); 
    });
  }
}
