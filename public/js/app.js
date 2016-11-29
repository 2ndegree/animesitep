"use strict";

class App{
	constructor(){
		this.movies = [
			/*
                remove soon
              
			 {
				"id": 1,
				"Title":"Winter Is Coming",
				"Year":"2011",
				"Director":"Timothy Van Patten",
				"Poster":"img/winteriscoming.jpg",
				"Actors":"Sean Bean, Mark Addy, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"id": 2,
				"Title":"The North Remembers",
				"Year":"2012",
				"Director":"Alan Taylor",
				"Poster":"img/thenorthremembers.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"id": 3,
				"Title":"Valar Dohaeris",
				"Year":"2013",
				"Director":"Daniel Minahan",
				"Poster":"img/valar.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington"
			},
			{
				"id": 4,
				"Title":"Two Swords",
				"Year":"2014",
				"Director":"D.B. Weiss",
				"Poster":"img/twoswords.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"id": 5,
				"Title":"The Wars to Come",
				"Year":"2015",
				"Director":"Michael Slovis",
				"Poster":"img/thewarstocome.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"id": 6,
				"Title":"The Red Woman",
				"Year":"2016",
				"Director":"Jeremy Podeswa",
				"Poster":"img/redwoman.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			} */
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

    /*  remove soon
	createMovie(){
		let t = document.getElementById('newTitle');
		let y = document.getElementById('newYear');
		let d = document.getElementById('newDirector');
		let p = document.getElementById('newPoster');
		let a = document.getElementById('newActors');

		let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Actors":a.value};
		this.movies.push(movie);

		t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
		this.movieListInfo();
	}

	deleteMovie(key){		
		let table = document.getElementById('movieListInfo');
		table.deleteRow(key);
		this.movies.splice(key,1);

		// let m = this.movies;
		// let dummy = [];
		// for(let i=0;i<m;i++){
		// 	if(key!=i){
		// 		dummy.push(m[i]);
		// 	}
		// }
		// this.movies = dummy;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();	
		this.showMovieList();	
	}

	updateMovie(key){
		let t = document.getElementById('updateTitle');
		let y = document.getElementById('updateYear');
		let d = document.getElementById('updateDirector');
		let a = document.getElementById('updateActors');

		let m = this.movies[key];
		let movie = {"id":m.id,"Title":t.value,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":a.value};

		this.movies[key] = movie;
		let details = document.getElementById('movieDetails');
		details.innerHTML = "";
		
		this.movieListInfo();
		this.showMovieList();
	}

	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showMovieCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	

	searchMovie(value=""){
		let objects = [];
		let r = this.movies;
		for(let i=0;i<r.length;i++){
			// console.log("r:",r[i].Title.toUpperCase().indexOf(title.toUpperCase()));
			let expr1 = (r[i].Title.toUpperCase().indexOf(value.toUpperCase()) > -1);
			let expr2 = (r[i].Year.toUpperCase().indexOf(value.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr1 || expr2){
				objects.push(r[i]);
			}
		}
		return objects;		
	}
	*/
}

class Component extends App{
	constructor(){
		super();
	}

	movieList(){
		this.render(
			`	      
		<div class="header clearfix">
                       
            <h3 class="text-muted">
            	<img class="anime-logo" src="img/animelogo.png"  />
            	Anime Site <br>
            	<h4 class="wow">Welcome Otaku</h4>
            </h3>	
          </div>


		<div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 60px 100px 60px 100px; border: 1px solid #EEE;">

          <form class="col s12" method="post">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

             <label style='float:center;'>
              <h4 class='pink-text'>Login</h4>
             </label>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='email' name='email' id='email' />
                <label for='email'>Enter your email</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input class='validate' type='password' name='password' id='password' />
                <label for='password'>Enter your password</label>
              </div>
               <label style='float: right;'>
					<a class='pink-text' href='#!'><b>Register Here</b></a>
				</label>
            </div>

            <br />
            <center>
              <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>

                   

		</div>
				
				<hr>
				
          <footer class="footer">
            <a href="#!"><img class="foot-logo" src="img/fblogo.png"  /></a>
            <a href="#!"><img class="foot-logo1" src="img/twitlogo.png"  /></a>
            <a href="#!"><img class="foot-logo1" src="img/goologo.png"  /></a>
          </footer>

			`
			,document.getElementById('app'));
		this.movieListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}	
}

let component = new Component();
component.movieList();
component.movieCreate();