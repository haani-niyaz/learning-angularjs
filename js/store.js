(function(){ 
	var app = angular.module('store',[]);

	var books = [
		{
			name: 'Deep Work',
			price: 9,
			desc: 'Rules for focued success in a distracted world',
			buy: false,
			soldOut: false,
			reviews: []
		},
		{
			name: 'The One Thing',
			price: 9.99,
			desc: 'The Surprisingly Simple Truth Behind Extraordinary Results',
			buy: false,
			soldOut: false,
			reviews: []
		}		
	]

	app.controller('StoreController',function(){
		this.products = books;	
	});


	app.controller('TabController',function(){
		// Assign a default value
		this.tab = 1;

		this.selectTab = function (setTab){
			this.tab = setTab;
		};


		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		}

	});


	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			
			// Clear form when submit button is hit
			this.review = {};
		}
	});



})();