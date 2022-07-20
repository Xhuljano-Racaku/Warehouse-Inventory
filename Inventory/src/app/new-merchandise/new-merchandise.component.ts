import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  urlImage: any;
  msg: string ="";
  newItemForm: FormGroup = new FormGroup({});

  constructor(private service: InventoryService,private router: Router) { }

  get itemImage() {
	return this.newItemForm.get('itemImage');
  }

  get description() {
	return this.newItemForm.get('description');
  }

  get category() {
	return this.newItemForm.get('category');
  }

  get price() {
	return this.newItemForm.get('price');
  }
  
  get metal() {
	return this.newItemForm.get('metal');
  }


  ngOnInit(): void {
	this.newItemForm = new FormGroup({
		itemNumber: new FormControl(0),
		itemImage: new FormControl('http://dummyimage.com/100x100.png/ff4444/ffffff', [Validators.required]),
		description: new FormControl('', Validators.required),
		category: new FormControl('', Validators.required),
		price: new FormControl(0, Validators.min(1)),
		metal: new FormControl('', Validators.required)
	})
  }
  
  save(): void {
    this.service.save(this.newItemForm.value).subscribe(() => {});
	setTimeout(()=> {
		this.router.navigate(['/list']);
	  },50)
  }

  onSelectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.urlImage = reader.result; 
		}
	}
}
