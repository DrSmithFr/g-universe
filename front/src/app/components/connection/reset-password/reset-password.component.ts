import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component(
  {
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
  }
)
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;

  get username() {
    return this.form.get('username');
  }

  constructor(
    public dialogRef: MatDialogRef<ResetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        username: [
          this.data,
          [Validators.required]
        ],
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.close();
  }
}
