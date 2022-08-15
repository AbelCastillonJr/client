import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Resident } from './resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private url = 'http//localhost:5200';
  private residents$: Subject<Resident[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshResidents() {
    this.httpClient.get<Resident[]>(`${this.url}/residents`)
    .subscribe(residents => {
      this.residents$.next(residents);
    });
  }

  getResidents(): Subject<Resident[]> {
    this.refreshResidents();
    return this.residents$;
  }

  getResident(id: string): Observable<Resident> {
    return this.httpClient.get<Resident>(`${this.url}/residents/${id}`);
  }

  createResident(resident: Resident): Observable<string> {
    return this.httpClient.post(`${this.url}/residents`, resident, { responseType: 'text' });
  }
  
  updateResident(id: string, resident: Resident): Observable<string> {
    return this.httpClient.put(`${this.url}/residents/${id}`, resident, { responseType: 'text' });
  }
  
  deleteResident(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/residents/${id}`, { responseType: 'text' });
  }
}
