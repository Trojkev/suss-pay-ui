import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient, private title: Title) { }

  /**
   * Returns the Root title
   */
  public get ROOT_TITLE(): string {
    return 'Suss Pay';
  }

  public get LOCAL_SERVER(): string {
    return 'http://127.0.0.1:8080/api/';
  }


  public get DEV_SERVER(): string {
    return 'https://suss-pay-backend.azurewebsites.net/api/';
  }

  /**
   * Sets the current title for the page using the set convention.
   * @param title Current Page Title.
   */
  public setPageTitle(title: string) {
    this.title.setTitle(title + ' - ' + this.ROOT_TITLE);
  }

  public initiateStkPush(data){
    // return this.http.post(this.LOCAL_SERVER + 'deposit/', data);
    return this.http.post(this.DEV_SERVER + 'deposit/', data);
  }

  public sendPostRequest(endpoint: string, data: object){
    return this.http.post(this.LOCAL_SERVER + endpoint, data);
    // return this.http.post(this.LOCAL_SERVER + endpoint, data);
  }

  public sendGetRequest(endpoint: string) {
    return this.http.get(this.LOCAL_SERVER + endpoint);
    // return this.http.get(this.DEV_SERVER + endpoint);
  }
}
