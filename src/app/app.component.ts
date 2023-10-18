import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toAddValue = '';
  toDoList: string[] = [];
  isEdit = false;
  toEditIndex = -1;

  remove(index: number) {
    this.toDoList.splice(index, 1);
  }

  add() {
    this.toDoList.push(this.toAddValue);
    this.toAddValue = '';
    this.isEdit = false;
  }

  edit(index: number) {
    this.isEdit = true;
    this.toAddValue = this.toDoList[index];
    this.toEditIndex = index;
  }

  updateEntry() {
    const list = [...this.toDoList];
    list.splice(this.toEditIndex, 1, this.toAddValue);
    this.toDoList = list;
    this.isEdit = false;
    this.toAddValue = '';
    this.toEditIndex = -1;
  }

  cancelEdit() {
    this.isEdit = false;
    this.toAddValue = '';
    this.toEditIndex = -1;
  }
}
