import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // Für ngModel
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    MatDialogModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
