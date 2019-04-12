import { Component, OnInit } from '@angular/core';
import { SToDoListService } from '../core/services/s-to-do-list.service';
import { Task } from '../core/models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private sToDoList: SToDoListService, public router: Router) { }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private tareas: any ;
  private project_id = 2208487085;

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////// METODOS ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ngOnInit(): void {

    // LLamada al servicio de obtener todas las tareas

    this.sToDoList.getAllTask().subscribe(
      data => {
       this.tareas = data;
       console.log(data);
       });

  }

  /**
     * Metodo para Borrar
     */

  borrar(id: string): void {

    this.sToDoList.deleteTask(id).subscribe(
      data => {
        console.log('borrado' + id );

        window.location.reload();
       });
  }

  /**
     * Metodo de redirección en el cual se envia el id
     */

 obtenerTarea(task: Task) {
  this.router.navigate(['/task', task.id] );

}

}
