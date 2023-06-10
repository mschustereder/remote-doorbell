import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-doorbell';

  constructor(private http: HttpClient) {}

  ringDoorbell() {
    const data = { message: 'Ring the doorbell in HWGWG' };

    this.http.post('http://localhost:5000/ring', data).subscribe(
      (response) => {
        console.log('Request successful:', response);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
}
