Template.main.onCreated(function() {
	Session.set("date", "1927");

	// this.date = new ReactiveVar("1927");
	this.subscribe("SanAntonioWaterLevel");
	this.subscribe("ComalWaterLevel");
	this.subscribe("HondoWaterLevel");
	this.subscribe("UvaldeWaterLevel");
	this.subscribe("SanMarcosWaterLevel");


  // browser window scroll (in pixels) after which the "menu" link is shown
	let offset = 300;

	let navigationContainer = $('#cd-nav'),
		mainNavigation = navigationContainer.find('#cd-main-nav ul');

  function checkMenu() {
    if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
      navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        mainNavigation.addClass('has-transitions');
      });
    } else if ($(window).scrollTop() <= offset) {
      //check if the menu is open when scrolling up
      if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
        //close the menu with animation
        mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          //wait for the menu to be closed and do the rest
          mainNavigation.removeClass('is-visible is-hidden has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
        });
      //check if the menu is open when scrolling up - fallback if transitions are not supported
      } else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
          mainNavigation.removeClass('is-visible has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
      //scrolling up with menu closed
      } else {
        navigationContainer.removeClass('is-fixed');
        mainNavigation.removeClass('has-transitions');
      }
    }
  }
	//hide or show the "menu" link
	checkMenu()
	$(window).scroll(function(){
		checkMenu()
	})
});



Template.main.onRendered(function () {
	// Load Map
  mapboxgl.accessToken = "pk.eyJ1Ijoiaml0b3MiLCJhIjoiOXE1SHc4VSJ9.RRtkSxtWwF2e7jBnLskfiQ";
	let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jitos/cinxck8ox0001b4nh3j7c9zz5'
	});
});


Template.main.helpers({
	date: () => {
		return Session.get("date");
	},

	sanAntonio: () => {
		let current = SanAntonioWaterLevel.find({}, {sort: {pdate: -1, limit: 1,}}).fetch();
		if (current !== undefined) {
			return current && current[0].MaxLevel;
		}
	},

	comal: () => {
		let current = ComalWaterLevel.find({}, {sort: {pdate: -1, limit: 1,}}).fetch();
		console.log("comal", current);

		if (current !== undefined) {
			return current && current[0].MaxLevel;
		}
	},

	hondo: () => {
		let current = HondoWaterLevel.find({}, {sort: {pdate: -1, limit: 1,}}).fetch();
		if (current !== undefined) {
			return current && current[0].MaxLevel;
		}
	},

	sanMarcos: () => {
		let current = SanMarcosWaterLevel.find({}, {sort: {pdate: -1, limit: 1,}}).fetch();
		if (current !== undefined) {
			return current && current[0].MaxLevel;
		}
	},

	uvalde: () => {
		let current = UvaldeWaterLevel.find({}, {sort: {pdate: -1, limit: 1,}}).fetch();
		if (current !== undefined) {
			return current && current[0].MaxLevel;
		}
	}
});



Template.main.events({

  'click .cd-nav-trigger': function(){
    let navigationContainer = $('#cd-nav'),
      mainNavigation = navigationContainer.find('#cd-main-nav ul');
    $(this).toggleClass('menu-is-open')
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible')
  },

	'change input[type=range]': function(event){
		var sliderValue = event.currentTarget.value
		// Template.instance().date.set(sliderValue);
		Session.set("date", sliderValue);

 }
});
