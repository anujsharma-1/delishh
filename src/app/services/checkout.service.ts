import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
function _window() : any {
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  get nativeWindow() : any {
    return _window();
 }
  razorPayKeyconfig=".../../../../../assets/configs/keys.json";
  constructor() {}
  getRazorPayKey() {
    // return this.httpClient.get(this.razorPayKeyconfig);
  }

}
