## Rock Paper Scissor

	### requires at least Nodejs v7.9.0 and npm v4.2.0

## Build and Run instructions
	
	1 - Build the client 

		Go to client directory and install dependencies

			cd rock-paper-scissors_angular/client/
			npm install

		Make sure you have @angular/cli installed then build

			npm install -g @angular/cli
			ng build

	2 - Get at the app root directory

		cd rock-paper-scissors_angular/

	3 - Install dependencies for server application

		npm install

	4 - Compile and build application with grunt

		npm run grunt

	5 - Start app

		npm run start

	6 - Open localhost:8080 on a web browser



## Stack description

	Grunt main task 
		- compile .ts files for server side into dist/ folder
		- copy views/ folder into dist directory
		- copy the distributed code of the client part into dist/public/

	Server side of the application is made with express framework.
	I set up a basic bootstrapper that handles the express server configuration. 
	Then I built several classes for handling the game manager and the server routes in express.

		Source files : 

			rock-paper-scissors_angular/src/

				server.ts

			rock-paper-scissors_angular/src/core

				game_manager.ts
			
			rock-paper-scissors_angular/src/routes

				router.ts
				index.ts  // render the index page
				game.ts   // GET request to play a game remotely

			app/src/interfaces

				i_weapon.ts

			app/views

				index.pug

	Client side is build on AngularJS 4.
	The interface is made with 3 components, one for the game logic, an other one for changing options and a last one which is the container component.
	The container component carries the history of all the played games.

		Source files : 

			rock-paper-scissors_angular/client/src/app

				i_weapon.ts
				i_options.ts

				app.component.ts
				app.component.html
				app.component.css

				game.component.ts
				game.component.html
				game.component.css
				
				options.component.ts
				options.component.html
				options.component.css

				app.module.ts
