import { Injectable } from '@angular/core';
import { IEmailModel } from '../models/contact';
import { delay, Observable, of, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendEmail(email: IEmailModel): Observable<any> {
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

    return of("Email sent successfully").pipe(
      tap(() => console.log('Email is submitting...')),
      delay(2000), // Simulate a delay of 2 seconds
      tap(() => console.log('Email submitted:', email)),
    );
  }
}
