import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-new-merchandise',
  templateUrl: './new-merchandise.component.html',
  styleUrls: ['./new-merchandise.component.css']
})
export class NewMerchandiseComponent implements OnInit {

  constructor(private inventory: InventoryService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.inventory.onAddNewItem(form.value);
    this.router.navigate(["/"])
  }
}
