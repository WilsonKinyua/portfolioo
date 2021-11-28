import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  constructor(private http: HttpClient) {}

  sendMessage(
    message: string,
    name: string,
    email: string,
    phone: string,
    subject: string
  ) {
    const data = {
      message: message,
      name: name,
      email: email,
      phone: phone,
      subject: subject,
    };
    return this.http.post(
      'https://my-portfolio-website-82420-default-rtdb.firebaseio.com/messages.json',
      data
    );
  }
}
