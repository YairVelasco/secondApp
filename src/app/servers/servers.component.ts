import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  ServerConstructionStatus = "I'm not being constructed";
  allowServerCreation = false;
  ShowInfo = '';
  inputText = "";
  constructor() {
    setTimeout(() => {
      this.allowServerCreation = true;
    }, 2000);
  }

  ngOnInit() {
  }
  OnServerConstruction(){
    this.ServerConstructionStatus = "I'm being constructed";
    this.ShowInfo = "CLICKED!";
  }
  gettingText(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }

}
