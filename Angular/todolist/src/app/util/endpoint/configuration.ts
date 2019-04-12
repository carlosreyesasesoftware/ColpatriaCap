/**
 * @author: Carlos Reyes
 * @fileoverview: El componente de configuracion se diseño para almacenar y centralizar las urls de
 * los servicios a utilizar dentro de Saps.
 * @version: 1.0 - Generacion inicial
 */

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UUID } from 'angular2-uuid';

@Injectable()
export class Configuration {

    constructor() {
    }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /**
     * Definicion de variables locales con las que se forma los endpoint.
     */
    private servidor = 'https://beta.todoist.com/API/v8/tasks';
    private project_id = '2208487085';
    private project_id_m = '?project_id=';
    private task_id_m = '/';
    private token = 'Bearer 10908ce97dfc96c1421c6dcf0dab66a5c559a0ac';
    private uuid = UUID.UUID();


    /**
     * Definicion de los endpoints necesarios para consumir servicios.
     */
    public epProject = this.servidor + this.project_id_m + this.project_id;
    public epTask = this.servidor + this.task_id_m ;
    public epPost = this.servidor;


    /**
     * Definicion de header necesarios para consumir servicios.
     */
    public headers = new HttpHeaders({
        'Authorization': this.token
      });

    public headersPost = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Request-Id': this.uuid,
        'Authorization': this.token
      });

}
