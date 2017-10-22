import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOptions } from './i_options';

@Component({
	selector: 'options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.css']
})

export class OptionsComponent implements IOptions {

	_remoteMode:boolean = false;
	_lizardSpockMode:boolean = false;

	@Input() options:IOptions;

	@Output() onChange: EventEmitter<any> = new EventEmitter<any>();

	update(prop):void {
		this[prop] = !this[prop] ? true : false;
		this.onChange.emit({
			_remoteMode: this._remoteMode,
			_lizardSpockMode: this._lizardSpockMode
		});
	}

}
