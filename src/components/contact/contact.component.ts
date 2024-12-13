import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {WhatsappPipe} from "../../pipes/whatsapp.pipe";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, WhatsappPipe, NgOptimizedImage],
  styleUrl: "contact.component.scss",
  templateUrl: "contact.component.html"
})
export class ContactComponent {
  get twoGisLink(): string {
    return this._twoGisLink;
  }

  set twoGisLink(value: string) {
    this._twoGisLink = value;
  }
  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  contactForm: FormGroup;
  submissionStatus: string = '';

  private apiUrl = '/api/cloud/6759cf27f47e73a7ae20e63c/';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      message: ['', Validators.required],
    })
  }


  onSubmit() {
    if (this.contactForm.valid) {
      const payload = {
        surveyId: '6759cf27f47e73a7ae20e63c', // Укажите свой surveyId
        values: this.contactForm.value,
        parent: 'https://forms.yandex.ru/cloud/6759cf27f47e73a7ae20e63c/success/?akey=1936bc6e43cf43776a1848c0a07cf7de8159e697', // Укажите свой parent URL
        dryRun: false,
      };

      this.http.post(this.apiUrl, payload).subscribe({
        next: (response) => {
          this.submissionStatus = 'Сообщение успешно отправлено!';
          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Ошибка отправки:', err);
          this.submissionStatus = 'Произошла ошибка. Попробуйте позже.';
        },
      });
    }
  }

  // onSubmit() {
  //   console.log(this.contactForm.value);
  //   if (this.contactForm.valid) {
  //     console.log("valid")
  //     console.log(this.contactForm.value);
  //     this.http.post<FormResponse>("https://forms.yandex.ru/cloud/6759cf27f47e73a7ae20e63c/", this.contactForm.value)
  //         .subscribe(
  //             response => console.log("Data transfer",response),
  //             error => console.error("Error",error)
  //         )
  //   }s
  //   // event.preventDefault();
  //   // Here you would typically handle form submission
  //   console.log('Form submitted');
  // }
    private _phoneNumber = "+7 (923) 191-00-66";
    private _twoGisLink = "https://2gis.ru/novosibirsk/firm/70000001092012373";
}