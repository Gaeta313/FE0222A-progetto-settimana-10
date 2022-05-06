import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { recupera } from 'src/app/service/todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {
  tasks!: Todo[];
  messaggio:string = 'Caricamento in corso...'
  caricamentoCompletato:boolean = false;
  control!:number;
  constructor() {
    recupera().then(tasks => {
      this.tasks = <Todo[]>tasks;
      this.caricamentoCompletato = true;
      this.control = this.tasks.filter(ele=>ele.completed == true).length;
      console.log(this.tasks);
    });
  }

  ngOnInit(): void {
  }

}
