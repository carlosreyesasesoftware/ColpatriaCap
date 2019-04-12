/**
 * @author: Carlos Reyes
 * @fileoverview: El componente de configuracion se diseño para almacenar y centralizar las urls de
 * los servicios a utilizar dentro de Saps.
 * @version: 1.0 - Generacion inicial
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/util/endpoint/configuration';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class SToDoListService {

  constructor(private http: HttpClient, private configuration: Configuration) { }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
  * Endpoints
  */
  private endpointProject = this.configuration.epProject;
  private endpointTask = this.configuration.epTask;
  private endpointPost = this.configuration.epPost;

  /**
  * Headers
  */
  private headers = this.configuration.headers;
  private headersPost = this.configuration.headersPost;

  /**
  *  Options para invocar el servicio por http
  */
  private httpOptions = { headers: this.headers };
  private httpOptionsPost = { headers: this.headersPost };

  /**
  *  Options
  */
  public url = this.configuration.epTask;

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////// METODOS ////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 /**
  *  Obtener tareas
  */

  getAllTask(): Observable<Task> {
    const r = this.http.get<Task>(this.endpointProject, this.httpOptions);
    return r;
  }

  /**
  *  Obtener una tarea por id
  */

  getTask(id: string): Observable<Task> {
    const r = this.http.get<Task>(this.endpointTask + id, this.httpOptions);
    return r;
  }


  /**
  *  Borrar una tarea por id
  */

  deleteTask(id: string): Observable<HttpResponse<any>> {
    const r = this.http.delete<any>(this.endpointTask + id, this.httpOptions);
    return r;
  }


   /**
  *  Crear una nueva tarea
  */

  createTask(task: Task): Observable<Task> {
    const r = this.http.post<Task>(
      this.endpointPost,
      task, this.httpOptionsPost
    );
    return r;
  }

  /**
  *   Actualizar una nueva tarea
  */
  updateTask(id: string, task: Task): Observable<Task> {
    const r = this.http.post<Task>(
      this.endpointTask + id,
      task,
      this.httpOptionsPost
    );
    return r;

  }


}
