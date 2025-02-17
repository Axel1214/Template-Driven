import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-form-app';
  anytext: string = "";
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  contact: string = "";
  submitted: boolean = false;

onSubmit() {
  this.submitted = true;
}

}
