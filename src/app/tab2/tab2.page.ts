import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  newItem = '';
  newTime = '';
  items: {name: string, time: string}[] = [];

  addItem() {
    if (this.newItem.trim() !== '' && this.newTime.trim() !== '') {
      this.items.push({name: this.newItem, time: this.newTime});
      this.newItem = '';
      this.newTime = '';
    }
  }

  deleteItem(item: {name: string, time: string}) {
    this.items = this.items.filter(i => i !== item);
  }
}
