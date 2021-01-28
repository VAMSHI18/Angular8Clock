import { Component, OnInit } from '@angular/core';
import { time } from 'console';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clock';
  timeNow: Date = new Date();
  hours:any;
  minutes:any;
  seconds: any;
  ampm: any;

  getTimeNow (): void {
    this.timeNow = new Date();
    this.hours = this.timeNow.getHours();
    this.minutes = this.timeNow.getMinutes();
    this.seconds = this.timeNow.getSeconds()< 10 ? '0' + this.timeNow.getSeconds() : this.timeNow.getSeconds()+'';

    
    this.ampm = this.hours >=12 ? 'PM' : 'AM';
    this.hours = this.hours % 12;
    this.hours = this.hours ? this.hours : 12;

    this.hours = this.hours<10 ? '0'+this.hours : this.hours;
  }

  ngOnInit(){
    setInterval(() => {
      this.getTimeNow();
    });
  }
  
}
