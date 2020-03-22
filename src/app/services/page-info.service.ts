import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo, TeamMember } from '../interfaces';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PageInfoService {


  info: PageInfo = {};
  team: TeamMember[] = [];
  loaded = false;

  constructor(private http: HttpClient) {
    this.loadPageInfo();
    this.loadTeam();
    this.loaded = true;
  }

  private loadPageInfo() {
    this.http.get<PageInfo>(environment.pageInfoPath).subscribe((res: PageInfo) => {
      this.info = res;
    });
  }

  private loadTeam() {
    this.http.get<TeamMember[]>(`${environment.firebaseEndpoint}/team.json`).subscribe((res: TeamMember[]) => {
      this.team = res;
    });
  }
}
