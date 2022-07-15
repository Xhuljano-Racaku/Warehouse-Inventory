import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import Item from '../models/Item';

@Component({
  selector: 'app-new-merchandise',
  templateUrl: './new-merchandise.component.html',
  styleUrls: ['./new-merchandise.component.css']
})
export class NewMerchandiseComponent implements OnInit {

  itemToSave: Item | any;
  constructor(private service: InventoryService) { }
  
  save(): void {
    this.service.save(this.itemToSave).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    // this.inventory.onAddNewItem(form.value);
    // this.router.navigate(["/"])
  }
 }
