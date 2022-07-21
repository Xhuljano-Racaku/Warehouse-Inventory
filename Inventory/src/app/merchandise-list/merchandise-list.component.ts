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
  isSorted: any = null;

  constructor(private service: InventoryService, private router: Router) {}

  itemList?: Item[];
  ngOnInit(): void {
    this.service.getAllItems().subscribe((data) => {
      this.itemList = data;
    })
  }
  
  deleteItem(itemNumber: number) {
    let confirmation = confirm("Are you sure you want to delete this item?");

    if(confirmation) {
      this.service.onRemoveItem(itemNumber).subscribe(()=> {
        this.itemList = this.itemList?.filter((item)=> item.itemNumber != itemNumber);
      })
    }
  }

  editItem(item_number: number) {
    this.router.navigate([`/edit`, item_number]);
  }

  getSort() {
    return this.isSorted;
  }

 sortByPrice() {
  if(this.isSorted === null) {
    this.isSorted = true;
    this.itemList = this.itemList?.sort((a,b)=> a.price-b.price);
  } else if(this.isSorted === true) {
    this.isSorted = false;
    this.itemList = this.itemList?.sort((a,b)=> b.price-a.price);
  } else {
    this.isSorted = null;
    this.service.getAllItems().subscribe((data) => {
      this.itemList = data;
    })
  }
 }

}
