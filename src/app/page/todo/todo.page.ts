import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { recupera, aggiungi, completa , modifica, elimina } from 'src/app/service/todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {
  tasks!: Todo[];
  messaggio:string = 'Caricamento in corso...'
  caricamentoCompletato:boolean = false;
  valore!:string;
  control!:number;

  constructor() {
    recupera().then(tasks => {
      this.tasks = <Todo[]>tasks;
      this.caricamentoCompletato = true;
       this.control = this.tasks.filter(ele=>ele.completed == false).length;
    });

  }

   aggiungi(){
    this.caricamentoCompletato = false;
     aggiungi(this.valore).then(tasks => {
      this.tasks = <Todo[]>tasks;
      this.control = this.tasks.filter(ele=>ele.completed == false).length;
      this.caricamentoCompletato = true;
    });
  }

  completa(task:Todo){
    this.caricamentoCompletato = false;
    completa(task).then(tasks => {
     this.tasks = <Todo[]>tasks;
     this.control = this.tasks.filter(ele=>ele.completed == false).length;
     this.caricamentoCompletato = true;
   });
 }

  modifica(task:Todo) {
    this.caricamentoCompletato = false;
    modifica(task).then(tasks => {
      this.tasks = <Todo[]>tasks;
      this.caricamentoCompletato = true;
    })
 }
 elimina(id:number) {
  this.caricamentoCompletato = false;
  elimina(id).then(tasks => {
    this.tasks = <Todo[]>tasks;
    this.control = this.tasks.filter(ele=>ele.completed == false).length;
    this.caricamentoCompletato = true;
  })
}


  ngOnInit(): void { }
}
