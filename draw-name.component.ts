// draw-name.component.ts
import { Component } from '@angular/core';
import { SecretSantaService } from '../secret-santa.service';

@Component({
  selector: 'app-draw-name',
  templateUrl: './draw-name.component.html',
  styleUrls: ['./draw-name.component.css']
})
export class DrawNameComponent {
  newParticipant: string = '';
  participants: string[] = [];
  results: Map<string, string> = new Map();

  constructor(private secretSantaService: SecretSantaService) {}

  addParticipant() {
    if (this.newParticipant.trim() !== '') {
      this.participants.push(this.newParticipant);
      this.newParticipant = '';
    }
  }

  drawNames() {
    this.results = this.secretSantaService.drawNames(this.participants);
  }
}
