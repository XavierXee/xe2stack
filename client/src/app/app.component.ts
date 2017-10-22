import { Component } from '@angular/core';
import { IOptions } from './i_options';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	title = 'Rock Paper Scissors';

	options:IOptions = {
		_remoteMode:false,
		_lizardSpockMode:false
	}

	isRemoteMode:boolean = false;
	isLizardSpockMode:boolean = false;
	gamesHistory:any[] = [];

	update(game):void {

		this.gamesHistory.unshift(game);

		setTimeout(() => {
  			this.isLizardSpockMode = true;
  		}, 2000);

	}

	updateOptions(options){

		this.options = options;

	}

}
