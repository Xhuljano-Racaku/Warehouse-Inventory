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

// Initialize the field all empty for editForm
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
  
  // Get all their current values
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

    // Get the id of the current item and display it to the url
    this.service.getAllItems().subscribe((itemList) => {
      this.currentItem = itemList.find((item)=> {
        return item.itemNumber === +params.get("id");
      });

      /** Autofill the editForm with the current values and all fields are required to fill
          excpet the image field and the itemNumber which we can not update it since it's unique
          Also set min for price to be 1
      */
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

  /** Update the item in editForm and render back to the list. I added a 50 milliseconds
      waiting time so once we are back to the list page we can see the updated item witout
      the need of refreshing the page
  */
  edit(): void {
    console.log(this.editForm.value);
    this.service.edit(this.editForm.value).subscribe(() => {});
    setTimeout(()=> {
      this.router.navigate(['/list']);
    },50)

  }
}
