import {Injectable} from '@angular/core';
import {Curriculumvitaetext} from './curriculumvitaetext';
import {Observable, of} from 'rxjs';
import {CVS} from './curriculum-vitae-mock';

@Injectable({
  providedIn: 'root'
})
export class CurriculumvitaeService {

  constructor() {
  }


  getCurriculumvielements(): Observable<Curriculumvitaetext[]> {
    const elements: Curriculumvitaetext[] = [];
    elements.push(new Curriculumvitaetext('', '', ''));

    return of(CVS);
  }
}
