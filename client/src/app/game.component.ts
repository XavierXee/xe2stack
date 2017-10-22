import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOptions } from './i_options';
import { IWeapon } from './i_weapon';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {

	@Input() options:IOptions;
  
	@Output() onPlay: EventEmitter<any> = new EventEmitter<any>();

	currentPick:IWeapon = {id:0,name:""};

	weapons:IWeapon[] = [
		{id:1, name:"rock"},
		{id:2, name:"paper"},
		{id:3, name:"scissors"},
		{id:4, name:"lizard"},
		{id:5, name:"spock"},
	];

	lock:boolean = false;
	endGameStatus:string = "";
	oponentPick:IWeapon = null;

	rules:any = {
		'1' : [[3,4],[2,5]],
		'2' : [[1,5],[3,4]],
		'3' : [[2,4],[1,5]],
		'4' : [[2,5],[1,3]],
		'5' : [[1,3],[4,2]]
	}

	public pick(pick: IWeapon): void {

		this.currentPick = pick;
	}

	getRemoteGame(){

		this.lock = true;

		return this.http.get("/game?player="+this.currentPick.id+"&_lizardSpockMode="+this.options._lizardSpockMode).subscribe(data => {
      		this.oponentPick = data['oponentPick'];
      		this.endGameStatus = data['status'];
      		this.notifyEndGame();
		});

	}

	game():string{
		
		var status;
		var rule = this.rules[this.currentPick.id];

		var range = this.options._lizardSpockMode ? 5 : 3;
		this.oponentPick = this.weapons[(Math.floor(Math.random() * range))];

		if(this.currentPick.id == this.oponentPick.id){
			status = "DRAW";
		} else if(rule[0].indexOf(this.oponentPick.id) != -1){
			status = "WON";
		} else if(rule[1].indexOf(this.oponentPick.id) != -1){
			status = "LOST";
		}
	
		return status;

	}

	notifyEndGame():void {
		
		this.onPlay.emit({
			player:this.currentPick,
			oponent:this.oponentPick, 
			status: this.endGameStatus,
			remote:this.options._remoteMode,
			lizardspock: this.options._lizardSpockMode,
			date:new Date()
		});

		setTimeout(() => {
			this.oponentPick = null;
			this.endGameStatus = "";
			this.lock = false;
		}, 2000);

	}

	play():void {

		this.oponentPick = null;

		if((this.currentPick.id == 4 || this.currentPick.id == 5) && this.options._lizardSpockMode == false){
			this.currentPick = {id:0,name:""};
		}

		if(this.currentPick.id && !this.lock){

			this.lock = true;

			if(this.options._remoteMode){
				
				this.getRemoteGame();

			} else {

				this.endGameStatus = this.game();
				this.notifyEndGame();

			}
		}

	}

    constructor(private http: HttpClient) {}

}
