import { DateTask } from './dateTask';
export class Task {
    public comment_count: number;
    public completed: boolean;
    public content: string;
    public due: DateTask;
    public id: number;
    public order: number;
    public priority: number;
    public project_id: number;
    public url: string;



    constructor(comment_count: number, completed: boolean, content: string, due: DateTask,
        id: number, priority: number, url: string) {

        this.comment_count = comment_count;
        this.completed = completed;
        this.content = content;
        this.due = due;
        this.id = id;
        this.priority = priority;
        this.project_id = 2208487085;
        this.url = url;

    }
}
