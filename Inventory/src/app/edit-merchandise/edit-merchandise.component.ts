import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-edit-merchandise',
  templateUrl: './edit-merchandise.component.html',
  styleUrls: ['./edit-merchandise.component.css']
})
export class EditMerchandiseComponent implements OnInit {
  currentItem?: any;
  currentItemIndex: number =0;

  constructor(private _activatedRoute: ActivatedRoute,
     private inventory: InventoryService,
     private router: Router) { }

  ngOnInit(): void {
   this._activatedRoute.paramMap.subscribe((params: any)=> {
    this.currentItem = this.inventory.getItem(+params.get("index"));
    this.currentItemIndex = +params.get("index");
   })
  }

  onSubmit(form: any) {
    const updatedItem = {...form.value, "price": ""+form.value.price}
    this.inventory.updateItem(form.value, this.currentItemIndex);
    this.router.navigate(['/'])
  }

}
