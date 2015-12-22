import { Component } from 'angular2/core';
import { Hero }      from './hero';
import { NgForm, Component, FormBuilder, Validators, Control }    from 'angular2/common';



@Component({
	selector: 'hero-form',
	templateUrl: 'src/hero-form.component.html'
})
export class HeroFormComponent {
	/**
	 * Hero Form
	 */
	test = 'test';
	name = 'un nombre';
	powers  = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather changer'];
	model = new Hero(18,'Isidro',this.powers[0], 'Chuck');
	submitted = false;
	
	onSubmit() { this.submitted = true; }
	get diagnostic() { return JSON.stringify(this.model) }

	
	/**
	 * Custom Form
	 */
	constructor (fb: FormBuilder) {
		this.loginForm = fb.group({
			email: ["", this.containsMagicWord],
			password: ["", Validators.required]
		});
	}
	doLogin(event) {
		var formData = this.loginForm.value;
		// { email: 'blah@blah.net', password: 'imnottelling1' }
		
		var email = this.loginForm.controls.email.value
		
		event.preventDefault();
		
		alert('No he encontrado "magics" in' + email);
	}
	
	private containsMagicWord(c: Control) {
		if(c.value.indexOf('magic') >= 0) {
			return { noMagic: true }
		}
		// Null means valid, believe it or not
		return null
	}
}