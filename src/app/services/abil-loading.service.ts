import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbilLoadingService {
    loadingSubject = new BehaviorSubject<boolean>(true);
    loading$ : Observable<boolean> = this.loadingSubject.asObservable()

    setLoading(value: boolean){
      this.loadingSubject.next(value )
    }
}
