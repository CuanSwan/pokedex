import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgloadingService {
    imgSubject = new BehaviorSubject<boolean>(true)
    loading$ : Observable<boolean> = this.imgSubject.asObservable() 

    setLoading(value: boolean){
      this.imgSubject.next(value)
    }
}
