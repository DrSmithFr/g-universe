import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';

@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,

    // NOTE: Angular material imports
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatTableModule,
    MatSlideToggleModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatTabsModule,
    MatTabsModule,
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatDatepickerModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
  ],
})
export class SharedModule {}
