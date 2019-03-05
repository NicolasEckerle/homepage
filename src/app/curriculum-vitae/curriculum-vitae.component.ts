import {Component, OnInit} from '@angular/core';
import {CurriculumvitaeService} from './curriculumvitaeservice.service';
import {Curriculumvitae2Service} from './curriculumvitae2service.service';
import {Curriculumvitaetext} from './curriculumvitaetext';


@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {

  public cvs: Curriculumvitaetext[];
  public cvs2: Curriculumvitaetext[];

  constructor(private curriculumvitaeService: CurriculumvitaeService, private curriculumvitae2Service: Curriculumvitae2Service) {
  }

  ngOnInit() {
    this.getCVs();
    this.getCVs2();
  }

  getCVs2(): void {
    this.curriculumvitae2Service.getCurriculumvitaelements()
      .subscribe(curriculumvitaeelements => this.cvs2 = curriculumvitaeelements);
  }

  getCVs(): void {
    this.curriculumvitaeService.getCurriculumvielements()
      .subscribe(curriculumvitaeelements => this.cvs = curriculumvitaeelements);
  }
}
