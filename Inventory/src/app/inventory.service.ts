import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addItem, mockData, removeItem, updateItem } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getAllItems() {
    // return this.http.get("http://localhost:8081/jewelry/items") as Observable<any>;
    return mockData;
  }
  getItem(index: number) {
    return mockData[index];
  }

  onAddNewItem(newItem: any) { 
    addItem(newItem);
  }

  onRemoveItem(index: number) {
    removeItem(index);
  }

  updateItem(updatedItem: any, index: number) {
    updateItem(updatedItem, index);
  }
}
