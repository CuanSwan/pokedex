import { Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgloadingService } from '../../services/imgloading.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-pokepic',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './pokepic.component.html',
  styleUrl: './pokepic.component.css'
})

export class PokepicComponent implements OnChanges{
  @Input() imgUrl!: any;
  loadingService = inject(ImgloadingService);
  faPlay = faPlay;
  placeholder = 'question.png';
  currentIndex: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['imgUrl'] && this.imgUrl){
        this.setupTrigger();
      }
  }

  setupTrigger(){
    this.loadingService.loading$.subscribe(value =>
     this.findFront(this.imgUrl, value)
    )
  }

  findFront = (imgs: any, value: boolean) => {
    if(value){
      console.log("IMAGES NOT LOADED YET")
    }else{
      for (let i=0; i<imgs.length; i++){
        if (this.imgUrl[i][0] === 'front_default'){
          this.currentIndex = i
        }
    }}
  }

  next(){
   this.currentIndex = (this.currentIndex+1)%this.imgUrl.length 
  }

  prev(){
    this.currentIndex = (this.currentIndex-1+this.imgUrl.length)%this.imgUrl.length
  }
}
