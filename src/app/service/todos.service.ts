
import { Todo } from "../interface/todo";


let nuovo:Todo[] = [];
let id = 1;

 export async function recupera(){
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(<Todo[]>nuovo);
    }, 2000);
  });
}

export async function aggiungi(val:string){
  return await new Promise(resolve => {
    setTimeout(() => {
      nuovo.push({id:id, title:val, completed:false,modifica:false,data:null});
      id++;
      resolve(nuovo);
    }, 2000);
  });
}

export async function completa(task:Todo){
  return await new Promise(resolve => {
    setTimeout(() => {
      task.completed = true;
      task.data = new Date();
      resolve(nuovo);
    }, 2000);
  });
}

export async function modifica(task:Todo){
  return await new Promise(resolve => {
    setTimeout(() => {
      task.modifica = false;
      resolve(nuovo);
    }, 2000);
  });
}

export async function elimina(id:number){
  return await new Promise(resolve => {
    setTimeout(() => {
    let index =  nuovo.findIndex(task=>task.id == id);
    nuovo.splice(index,1);
      resolve(nuovo);
    }, 2000);
  });
}
