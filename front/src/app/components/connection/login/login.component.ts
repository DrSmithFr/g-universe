import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {ResetPasswordComponent} from '../reset-password/reset-password.component';

@Component({
             selector: 'app-login',
             templateUrl: './login.component.html',
             styleUrls: ['./login.component.scss'],
           })
export class LoginComponent implements OnInit {
  refererPath: string;

  isLoading = false;
  isFinish = false;
  isPasswordHidden = true;

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.isFinish = false;
    this.refererPath = <string> this.route.snapshot.queryParams['referer'] || '/';

    this.loginForm = this.fb.group(
      {
        username: [
          '',
          [Validators.required]
        ],
        password: [
          '',
          Validators.required
        ],
        rememberMe: [true],
      }
    );

    // TODO check reconnection
  }

  onSubmit(): void {
    this.isLoading = true;
    setTimeout(
      () => {
        this.isLoading = false;
        this.isFinish = true;

        this.router.navigate([this.refererPath]);
      },
      3000
    );
  }

  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  get rememberMe(): AbstractControl | null {
    return this.loginForm.get('rememberMe');
  }

  openDialog(): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(ResetPasswordComponent, {
      width: '400px',
      hasBackdrop: true,
      restoreFocus: true,
      position: {
        top: '15vh',
      },
      data: this.username.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      // animation ?
    });
  }
}
