import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addItem, mockData, removeItem, updateItem } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url = 'http://localhost:8081/jewelry/items';
  constructor(private httpClient: HttpClient) { }

  getAllItems() { 

    return this.httpClient.get(this.url);
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
