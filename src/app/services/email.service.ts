import { Injectable } from '@angular/core';
import { IEmailModel } from '../models/contact';
import { delay, Observable, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(email: IEmailModel): Observable<any> {
    if (environment.production) {
      return this.http.post('https://sendcontactemail-qp5by2uzra-uc.a.run.app', email).pipe(
        tap(() => { if (!environment.production) console.log('Email submitted') }),
      );
    } else {
      // Simulate success email sending with a delay
      return of("Email sent successfully").pipe(
        tap(() => console.log('Email is submitting...')),
        delay(2000), // Simulate a delay of 2 seconds
        tap(() => console.log('Email submitted:', email)),
      );

      // Simulate failure email sending with a delay
      // return throwError(() => new HttpErrorResponse({
      //   error: {
      //     message: 'Failed to send email',
      //     code: 'EMAIL_SEND_ERROR'
      //   },
      //   status: 500,
      //   statusText: 'Internal Server Error',
      //   url: '/api/send-email'
      // })).pipe(
      //   tap(() => console.log('Email is submitting...')),
      //   delay(2000), // Simulate a delay of 2 seconds
      //   tap(() => console.log('Email submission failed:', email)),
      // );

    }
  }
}
