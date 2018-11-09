import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URL = '/api/categories/';

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get(this.API_URL);
  }
}
