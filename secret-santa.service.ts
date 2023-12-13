import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretSantaService {
  drawNames(participants: string[]): Map<string, string> {
    const results = new Map<string, string>();

    participants.forEach((participant, index) => {
      const santaIndex = (index + 1) % participants.length;
      const santa = participants[santaIndex];
      results.set(participant, santa);
    });

    return results;
  }
}
