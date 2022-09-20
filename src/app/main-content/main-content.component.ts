import { Component, OnInit } from '@angular/core';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { faL, faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { LoginservService } from '../services/loginserv.service';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  min = 22;
  curr: any;
  lgn = this.serv.login;
  constructor(public serv: LoginservService) {
    var currentdate = new Date();
    var datetime =
      'Last Sync: ' +
      currentdate.getDay() +
      '/' +
      currentdate.getMonth() +
      '/' +
      currentdate.getFullYear() +
      ' @ ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds();
    console.log(datetime);
    this.curr = currentdate.getMinutes();
    console.log(this.curr);
    // window.setInterval(this.fun1(), 1000);
  }

  ngOnInit(): void {}

  filmIcon = faTrash;
  edt = faEdit;

  valu = '';
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'etc ....',
  ];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  test = [];
  ln = this.todo.length;
  ln2 = this.done.length;
  fin = Math.floor((this.ln / (this.ln + this.ln2)) * 100);
  fin2 = Math.floor((this.ln2 / (this.ln + this.ln2)) * 100);

  fun1() {
    // if (this.ln == 0) {
    //   alert('Hurray all tasks done');
    // }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.ln = this.todo.length;

    this.ln2 = this.done.length;
    this.fin = Math.floor((this.ln / (this.ln + this.ln2)) * 100);
    this.fin2 = Math.floor((this.ln2 / (this.ln + this.ln2)) * 100);
    this.fun1();
  }
  subm() {
    this.todo.push(this.valu);
    this.ln = this.todo.length;

    this.ln2 = this.done.length;
    this.fin = Math.floor((this.ln / (this.ln + this.ln2)) * 100);
    this.fin2 = Math.floor((this.ln2 / (this.ln + this.ln2)) * 100);
  }
  clr() {
    this.done.splice(0, this.done.length);
    this.ln = this.todo.length;

    this.ln2 = this.done.length;
    this.fin = Math.floor((this.ln / (this.ln + this.ln2)) * 100);
    this.fin2 = Math.floor((this.ln2 / (this.ln + this.ln2)) * 100);
  }
  del(itm: any) {
    const index = this.done.indexOf(itm, 0);
    if (index > -1) {
      this.done.splice(index, 1);
    }
    this.ln = this.todo.length;

    this.ln2 = this.done.length;
    this.fin = Math.floor((this.ln / (this.ln + this.ln2)) * 100);
    this.fin2 = Math.floor((this.ln2 / (this.ln + this.ln2)) * 100);
  }

  itm = false;
  getName() {
    if (this.itm) {
      return 'c1';
    } else {
      return 'c2';
    }
  }
  fncchk() {
    this.itm = !this.itm;
  }
  loc() {
    // localStorage.setItem('1',this.todo);
  }
}
