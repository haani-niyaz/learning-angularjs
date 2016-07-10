(function(){ 
	var app = angular.module('store',[]);

	var books = [
		{
			name: 'Deep Work',
			price: 9,
			desc: 'Rules for focued success in a distracted world',
			buy: false,
			soldOut: false
		},
		{
			name: 'The One Thing',
			price: 9.99,
			desc: 'The Surprisingly Simple Truth Behind Extraordinary Results',
			buy: false,
			soldOut: false
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


})();