import { Component,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  @Output() getCartDetails:EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.getCartDetails.emit('data received');
  }
}
