import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pwa-test';
  
  private modalService: NgbModal =inject(NgbModal);

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
