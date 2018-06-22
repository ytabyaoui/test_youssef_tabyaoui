import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app';
  player: YT.Player;
  id: string = 'qDuKsiwS5xw';
  values='abs';
  history: string[]=["https://www.youtube.com/v/qDuKsiwS5xw?version=3"];
  bookmarks:string[]=[];
  currentUrl="https://www.youtube.com/v/qDuKsiwS5xw?version=3";

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  onEnter(value:string){   
    
    this.player.loadVideoByUrl(value);
    this.history.push(value);
    this.currentUrl=value;}
  hiClicked(i){
 
    this.player.loadVideoByUrl(this.history[i]);
    this.history.push(this.history[i]);
    this.currentUrl=this.history[i];}
  bClicked(j){
 
    this.player.loadVideoByUrl(this.bookmarks[j]);
    this.history.push(this.bookmarks[j]);
    this.currentUrl=this.bookmarks[j];}
  bookmark(){
    this.bookmarks.push(this.currentUrl);
    }
  
    



  
                        
}
