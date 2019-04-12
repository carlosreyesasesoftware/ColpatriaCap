import { Component, OnInit } from '@angular/core';
import { SToDoListService } from '../core/services/s-to-do-list.service';
import { DateTask } from '../core/models/dateTask';
import { Task } from '../core/models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private sToDoList: SToDoListService, private route: ActivatedRoute,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 public formBuilder: FormBuilder, public router: Router) { }

    public dataBasicoForm: FormGroup;
    private taskid: string;
    private project_id = 2208487085;

    public editar: boolean;

    private prioridad = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    private fecha = new DateTask('2016-09-01', '2016-09-01T11:00:00Z', '2017-07-01 12:00', 'Europe/Lisbon');

  private tarea = new Task(0, false, null, this.fecha, 3137421328, 1,   this.sToDoList.url );
  private taskmodificado = new Task(0, false, 'Prueba modificación', this.fecha, 3137421328, 4, this.sToDoList.url);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////// METODOS ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ngOnInit() {
    this.taskid = this.route.snapshot.params['taskbyid'];

    this.dataBasicoForm = this.formBuilder.group({
      completed: ['', Validators.required],
      priority: ['', Validators.required],
      content: ['', Validators.required],
    });

    if (this.taskid ) {
      this.editar = true;

    this.sToDoList.getTask(this.taskid).subscribe(
      data => {
        this.tarea = data;
        console.log(data.completed);
        this.dataBasicoForm = this.formBuilder.group({
          completed: [data.completed, Validators.required],
          priority: [data.priority, Validators.required],
          content: [data.content, Validators.required],
        });
       });

      } else {
        this.editar = false;
      }

  }


  crearEditar() {

    this.tarea.completed = this.dataBasicoForm.get('completed').value;

    this.tarea.content = this.dataBasicoForm.get('content').value;

    this.tarea.priority = Number(this.dataBasicoForm.get('priority').value);

    if (this.editar) {
      this.edit(this.taskid);
    } else {
      this.create();

    }
  }

    /**
     * Metodo para crear
     */

  create() {

    this.sToDoList.createTask(this.tarea).subscribe(
      data => {
        console.log('respuesta');
        console.log(data);

        this.router.navigate(['/']);
      });

  }

  /**
     * Metodo para editar
     */
  edit(id) {
    console.log('task');
    console.log(this.tarea);
    this.sToDoList.updateTask(id, this.tarea).subscribe(
      data => {
        this.router.navigate(['/']);
      });

  }

}
