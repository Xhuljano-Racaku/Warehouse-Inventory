import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import Item from '../models/Item';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.component.html',
  styleUrls: ['./merchandise-list.component.css']
})
export class MerchandiseListComponent implements OnInit {
  // allItems?: any;

  constructor(private service: InventoryService) {} // constructor(private invetory: InventoryService, private router: Router) { }

  itemList: Item[] | any;
  ngOnInit(): void {
    this.service.getAllItems().subscribe((data) => {
      this.itemList = data;
      console.log(this.itemList);
    })

    // this.allItems = this.invetory.getAllItems();
    // this.allItems = this.invetory.getAllItems().subscribe((data) => {
    //   this.allItems = data.data;
    // });
  }
  
  
  // deleteItem(index: number) {
  //   let confirmation = confirm("Are you sure you want to delete this item?");

  //   if(confirmation) {
  //     this.invetory.onRemoveItem(index);
  //   }
  // }

  // editItem(index: number) {
  //   this.router.navigate([`/edit`, ""+index]);
  // }
}
