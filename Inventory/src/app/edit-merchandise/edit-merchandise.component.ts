import { Component, OnInit } from '@angular/core';
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
  
  constructor(private service: InventoryService, private router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this._activatedRoute.paramMap.subscribe((params: any)=> {

    this.service.getAllItems().subscribe((itemList) => {
      this.currentItem = itemList.find((item)=> {
        return item.itemNumber === +params.get("id");
      });
    });
   })
  }

  edit(): void {
    this.service.edit(this.currentItem).subscribe(() => {});
    setTimeout(()=> {
      this.router.navigate(['/list']);
    },50)

  }
}
