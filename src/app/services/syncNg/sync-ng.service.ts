import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apisList } from 'src/app/api';
import { jsonpFactory } from '@angular/http/src/http_module';

interface OptionInterface {
  filter: string;
  filterClean: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SyncNgService {

  constructor(private http: HttpClient) { }

  get(api: string, option: OptionInterface) {
    if (option.filterClean === true) {
      api = `${apisList[api]}?${option.filter}`;
    } else if (option.filterClean === false) {
      api = `${apisList[api]}${option.filter}`;
    }
    return this.http.get(api);
  }

  post(api: string, data: any, option: OptionInterface) {
    if (option.filterClean === true) {
      api = `${api}?${option.filter}`;
    } else if (option.filterClean === false) {
      api = `${api}${option.filter}`;
    }
    return this.http.post(api, data);
  }
}
