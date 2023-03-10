import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ISkillModel } from '../models/skill';
import { TypeSkillEnum } from '../models/type-skill.enum';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getTypesSkills(): Array<Object> {
    return Object.keys(TypeSkillEnum).filter((item) => {
      return isNaN(Number(item));
    });
  }

  /** GET SKILLS from the server */
  getLstSkillsFromServeur(): Observable<ISkillModel[]> {
    console.log('getLstSkillsFromServeur')
    return this.http.get<ISkillModel[]>('api/skills')
      .pipe(
        tap(_ => this.log('fetched SKILLS')),
        catchError(this.handleError<ISkillModel[]>('getSKILLS', []))
      );
  }

  getSkillFromServeur(id: number): Observable<ISkillModel> {
    return this.http.get<ISkillModel>(`api/skill/${id}`).pipe(
      tap(_ => this.log(`fetched Skill id=${id}`)),
      catchError(this.handleError<ISkillModel>(`getSkill id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a SkillService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`Skillervice: ${message}`);
  }
}
