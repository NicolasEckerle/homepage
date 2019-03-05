import {Injectable} from '@angular/core';
import {Curriculumvitaetext} from './curriculumvitaetext';
import {Observable, of} from 'rxjs';
import {CVS2} from './curriculum-vitae2-mock';

@Injectable({
  providedIn: 'root'
})
export class Curriculumvitae2Service {

  constructor() {
  }


  getCurriculumvitaelements(): Observable<Curriculumvitaetext[]> {
    const elements: Curriculumvitaetext[] = [];
    elements.push(new Curriculumvitaetext('', '', ''));

    return of(CVS2);
  }
}
