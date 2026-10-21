import {Component} from "@angular/core";

@Component({
    selector:"app-deportes", 
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent{
    public numeros: Array<number>;
    public sports: Array<string>;
    constructor(){
        this.numeros = [5, 66, 86, 23, 5]
        this.sports = [ "tennis", "futbol", "boxeo", "basket"]
    }

}