import { Component, OnInit, Input  } from '@angular/core';
import { ApiService } from './api/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'wordscount';
  // @Input() employeeDetails = { sentence: '', email: '', phone: 0 };
    @Input() SentenceDetails = { sentence: ''};
  constructor(
    public restApi: ApiService
  ) { }

  ngOnInit() { }

    addSentence(dataSentence) {
    this.restApi.createSentence(this.SentenceDetails).subscribe((data: {}) => {
      console.log(data);
    });
  }

}
