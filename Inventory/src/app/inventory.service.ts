import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Item from './models/Item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url = 'http://localhost:8081/jewelry/items/';
  constructor(private httpClient: HttpClient) { }

  getAllItems(): Observable<Item[]>{ 

    return this.httpClient.get<Item[]>(this.url);
  }

  save(item: Item): Observable<Item>{
    return this.httpClient.post<Item>(this.url, item);
  }

  edit(item: Item): Observable<Item>{
    return this.httpClient.put<Item>(this.url, item);
  }

  onRemoveItem(itemNumber:number): any {
      return this.httpClient.delete<any>(this.url, {"body":{"itemNumber": itemNumber}});
    }
 }
