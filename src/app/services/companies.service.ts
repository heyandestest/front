import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  _url = environment.api_url;
  constructor(
    private http: HttpClient //
  ) {}
  getCompanies() {
    let headers = new HttpHeaders().set('Type-content', 'application//json');
    return this.http.get(`${this._url}/companies`, { headers });
  }
  getCompany(company: string) {
    let headers = new HttpHeaders().set('Type-content', 'application//json');
    return this.http.get(`${this._url}/companies/${company}`, { headers });
  }
  topCompany() {
    let headers = new HttpHeaders().set('Type-content', 'application//json');
    return this.http.get(`${this._url}/companies/top/seller`, { headers });
  }
  topMonth() {
    let headers = new HttpHeaders().set('Type-content', 'application//json');
    return this.http.get(`${this._url}/companies/top/month`, { headers });
  }
}
