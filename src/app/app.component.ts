import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify-a';
 //Puede almacenar dos valores
  // status: string |number = '0'
  // car: Array<CarModel> =[
  //   {
  //     brand: 'Ferrari',
  //     model: 'nose'
  //   },
  //   {
  //     brand: 'Ferrari',
  //     model: 'nose',
  //     year:2021
  //   }
  // ]
}

// interface CarModel {
//   brand:string,
//   model:string,
//   year?:number
// }
