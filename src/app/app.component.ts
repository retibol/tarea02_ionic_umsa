import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes!: Observable<Componente[]>;

  constructor(private menuCrtl:MenuController,
              private dataService:DataService) { }

  ngOnInit() {
    this.componentes=this.dataService.getMenuOpts();
  }

  /*mostrarMenu(){
   // console.log("Menu principal");
    this.menuCrtl.open('first');
  }*/
}
