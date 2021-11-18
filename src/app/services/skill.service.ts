import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { SKILLS } from '@app/models/mock-skills';
import { TypeSkill } from '@app/models/type-skill';
import { ISkillModel } from '@app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private SkillsUrl = 'api/skills';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // getTypesSkills(): TypeSkill[] {

  // }

  getSkillsFromMock(): Observable<ISkillModel[]> {
    const ListSkills = of(SKILLS);
    this.messageService.add('SkillService: fetched SKILLS');
    return ListSkills;
  }

  /** GET SKILLS from the server */
  getSkillsFromServeur(): Observable<ISkillModel[]> {
    return this.http.get<ISkillModel[]>(this.SkillsUrl)
      .pipe(
        tap(_ => this.log('fetched SKILLS')),
        catchError(this.handleError<ISkillModel[]>('getSKILLS', []))
      );
  }

  getSkill(id: number): Observable<ISkillModel> {
    const url = `${this.SkillsUrl}/${id}`;
    return this.http.get<ISkillModel>(url).pipe(
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
