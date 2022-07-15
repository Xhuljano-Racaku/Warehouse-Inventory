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

  itemToSave: Item = new Item();
  constructor(private service: InventoryService) { }
  
  save(): void {
    this.service.save(this.itemToSave).subscribe((data) => {
      console.log(data);
    });
  }

  urlImage : any;
  onSelectFile(event:any) {
    if (event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        reader.onload = (event:any) => {
             this.urlImage= event.target.result;
        }

    }
}

  ngOnInit(): void {
  }

  // onSubmit(form: any) {
  //   // this.inventory.onAddNewItem(form.value);
  //   // this.router.navigate(["/"])
  // }
 }
