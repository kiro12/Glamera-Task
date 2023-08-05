import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
@Input() name: string | undefined;
@Input() type: string | undefined;
@Input() controlName: any ;
@Input() parentForm: any;
constructor() {
}
ngOnInit() {
}
}
