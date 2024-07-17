import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Learning';
  getName(name: string | number) //we can also take variable with 2 different datatypes.
  {
    console.warn(name);
  }
  displayVal=''
  getValue(val: string){
    console.warn(val);
    this.displayVal=val;
  }
  count=0;
  counter(val:string){
    val === 'Increment'?this.count++:this.count--;
    console.log(val);
  }
  name='Nilay';
  // if-else condition for boolean value.
  show=false;
  //if-else condition for string value.
  val='no';

  // switch-case in Angular
  color = 'yellow';

  // for-loop in angular
  months = 'All Months in a year.'
  users = [1,2,3,4,5,6,7,8,9,10,11,12]
  monthDetail = [{
    month: 'January',
    days: 31
  },
  {
    month: 'February',
    days: 28
  },
  {
    month: 'March',
    days: 31
  },
  {
    month: 'April',
    days: 30
  },
  {
    month: 'May',
    days: 31
  },
  {
    month: 'June',
    days: 30
  },
  {
    month: 'July',
    days: 31
  },
  {
    month: 'August',
    days: 31
  },
  {
    month: 'January',
    days: 30
  },
  {
    month: 'October',
    days: 31
  },
  {
    month: 'November',
    days: 30
  },
  {
    month: 'December',
    days: 31
  },
]

// Style Binding in Angular
bgColor = 'blue';
updateColor(){
  this.color="red";
  this.bgColor="yellow";
}
}
