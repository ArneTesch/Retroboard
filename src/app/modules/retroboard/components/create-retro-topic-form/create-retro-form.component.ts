import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RetroItem } from '../../entities/retro-item';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-create-retro-form',
  template: `
      <h2>Add topic to board</h2>
      <form novalidate *ngIf="retroForm" [formGroup]="retroForm" (ngSubmit)="submit()" class="form-group">
        <input
          type="text"
          formControlName="title"
          class="form-control form-control-input"
          placeholder="Title">
        <ng-container *ngIf="retroForm.controls['title'].invalid && retroForm.controls['title'].touched">
          <span class="form-control-invalid">Please specify a value for this field.</span>
        </ng-container>
        <textarea
          formControlName="description"
          class="form-control form-control-input"
          placeholder="Description"
          maxlength="280"></textarea>
        <ng-container *ngIf="retroForm.controls['description'].invalid && retroForm.controls['description'].touched">
          <span class="form-control-invalid">Please specify a value for this field.</span>
        </ng-container>
        <select
          class="form-control form-control-select"
          formControlName="categories">
          <option value="" disabled>Please select the category</option>
          <option *ngFor="let option of categories" value="{{ option.value }}">{{ option.title | captalize }}</option>
        </select>
        <ng-container
          *ngIf="retroForm.controls['categories'].invalid && retroForm.controls['categories'].touched">
          <span class="form-control-invalid">Please select a category.</span>
        </ng-container>
        <input
          type="submit"
          class="form-control form-control-button"
          value="Add topic"
        />
      </form>
  `,
  styleUrls: ['./create-retro-form.component.scss'],
})
export class CreateRetroFormComponent implements OnInit {

  retroForm: FormGroup;
  categories = [
    {
      title: 'keep doing',
      value: 'keepDoing',
    },
    {
      title: 'start doing',
      value: 'startDoing',
    },
    {
      title: 'stop doing',
      value: 'stopDoing',
    },
  ];

  @Output() createItem: EventEmitter<RetroItem> = new EventEmitter<RetroItem>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.retroForm = this.fb.group({
      title: ['', { validators: Validators.required, updateOn: 'blur' }],
      description: ['', { validators: Validators.required, updateOn: 'blur' }],
      categories: ['', { validators: Validators.required, updateOn: 'blur' }],
    });
  }


  submit() {
    if (this.retroForm.valid) {

      this.createItem.emit({
        id: UUID.UUID(),
        title: this.retroForm.get('title').value,
        description: this.retroForm.get('description').value,
        category: this.retroForm.get('categories').value,
      });

      this.retroForm.reset({ categories: '' });
    } else {
      this.retroForm.get('title').markAsTouched();
      this.retroForm.get('description').markAsTouched();
      this.retroForm.get('categories').markAsTouched();
    }
  }

}
