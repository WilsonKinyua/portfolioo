import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMessageService } from 'src/app/send-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private messageService: SendMessageService) {}

  showSuccessMessage = false;

  ngOnInit(): void {}

  sendMessage(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;
    const phone = form.value.phone;
    const subject = form.value.subject;
    this.messageService
      .sendMessage(message, name, email, phone, subject)
      .subscribe((response) => {
        console.log(response);
        this.showSuccessMessage = true;
        setTimeout(() => (this.showSuccessMessage = false), 6000);
        form.reset();
      });
  }
}
