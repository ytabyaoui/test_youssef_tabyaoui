import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app';
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';
  values='abs';
  history: string[]=['yo'];

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  onEnter(value:string){   
    
    this.player.loadVideoByUrl(value);
    this.history.push(value)}
  
                        
}
