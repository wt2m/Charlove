import { Component, OnInit } from '@angular/core';
import LateralMenuOption from 'src/models/LateralMenuOption.model';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})

export class LateralMenuComponent  {

 
  options:LateralMenuOption[] = [{
    option: 0,
    text: "Opção 1",
    video: 'https://youtu.be/zcAalMeaKso'
  },
  {
    option: 1,
    text: "Opção 2",
    video: "https://youtu.be/2N9KA6UHjmw"
  },
  {
    option: 2,
    text: "Opção 3",
    video: "https://www.youtube.com/embed/vqz8c4ZP3Wg"
  },
  {
    option: 3,
    text: "Opção 4",
    video: "https://youtu.be/U44qKaKpAMk"
  },];

  selectedOption:number = this.options[0].option;
  selectedVideo:string = this.options[0].video;


  changeMenu(menu: number){
    this.selectedOption = menu;
    this.selectedVideo = this.options.filter(x => x.option == menu)[0].video;
  }
}


