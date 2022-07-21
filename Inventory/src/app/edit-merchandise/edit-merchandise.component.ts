import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import Item from '../models/Item';

@Component({
  selector: 'app-edit-merchandise',
  templateUrl: './edit-merchandise.component.html',
  styleUrls: ['./edit-merchandise.component.css']
})
export class EditMerchandiseComponent implements OnInit {
  currentItem: any = new Item();
  editForm: FormGroup = new FormGroup({
        itemNumber: new FormControl(''),
        itemImage: new FormControl(''),
        description: new FormControl(''),
        category: new FormControl(''),
        price: new FormControl(''),
        metal: new FormControl(''),
  });
  
  get itemImage() {
    return this.editForm?.get('itemImage');
  }
  

  get description() {
    return this.editForm?.get('description');
  }

  get category() {
    return this.editForm?.get('category');
  }

  get price() {
    return this.editForm?.get('price');
  }

  get metal() {
    return this.editForm?.get('metal');
  }
  
  constructor(private service: InventoryService, private router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this._activatedRoute.paramMap.subscribe((params: any)=> {

    this.service.getAllItems().subscribe((itemList) => {
      this.currentItem = itemList.find((item)=> {
        return item.itemNumber === +params.get("id");
      });

      this.editForm = new FormGroup({
        itemNumber: new FormControl(this.currentItem.itemNumber),
        itemImage: new FormControl(this.currentItem.itemImage),
        description: new FormControl(this.currentItem.description, [Validators.required]),
        category: new FormControl(this.currentItem.category, [Validators.required]),
        price: new FormControl(this.currentItem.price, [Validators.required, Validators.min(1)]),
        metal: new FormControl(this.currentItem.metal, [Validators.required]),
      });

    });
   })
  }

  edit(): void {
    console.log(this.editForm.value);
    this.service.edit(this.editForm.value).subscribe(() => {});
    setTimeout(()=> {
      this.router.navigate(['/list']);
    },50)

  }
}
