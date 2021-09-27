import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatDividerModule, MatMenuModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatCardModule, MatSortModule, MatSnackBarModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MAT_DATE_LOCALE, MatAutocomplete, MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule, 
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatAutocompleteModule
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule, 
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatAutocompleteModule
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue:'es-ES'}
  ]
})
export class MaterialModule { }
