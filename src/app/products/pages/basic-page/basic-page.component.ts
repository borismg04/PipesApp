import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'fernando herrera';
  public nameUpper: string = 'FERNANDO HERRERA';
  public nameComplete: string = 'FeRnAnDo HeRrErA';

  public customDate: Date = new Date(); // current date

}
