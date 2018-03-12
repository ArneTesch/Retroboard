import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RetroBoard } from '../../entities/retro-board';

@Component({
  selector: 'app-create-retroboard-form',
  template: `
      <h2>Add retro board</h2>
      <form [formGroup]="retroBoardForm" (ngSubmit)="submit()" class="form-group">
        <input
          type="text"
          class="form-control form-control-input"
          placeholder="Enter a retro board title"
          formControlName="title">
        <ng-container
          *ngIf="retroBoardForm.controls['title'].invalid && retroBoardForm.controls['title'].touched">
          <span class="form-control-invalid">Please specify a value for this field.</span>
        </ng-container>
        <input
          type="submit"
          value="Create board"
          class="form-control form-control-button">
      </form>
  `,
  styleUrls: ['./create-retroboard-form.component.scss'],
})
export class CreateRetroboardFormComponent implements OnInit {

  retroBoardForm: FormGroup;

  @Output() createBoard: EventEmitter<RetroBoard> = new EventEmitter<RetroBoard>();

  constructor(private fb: FormBuilder) {
    this.retroBoardForm = this.fb.group({
      title: ['', { validators: Validators.required, updateOn: 'blur' }],
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.retroBoardForm.valid) {
      this.createBoard.emit({
        title: this.retroBoardForm.get('title').value,
        date: Date.now(),
      });
    }
  }

}
