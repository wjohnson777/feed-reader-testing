/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
		 
		 // verifies the variable is defined and not empty
        it('is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		 
		 // verifies that the URL is defined and not empty
		it('has URL defined', function() {
			allFeeds.forEach(function(feed) {
				var url = feed.url;
				
				expect(url).toBeDefined();
				expect(url.length).not.toBe(0);
			})
		});

		 
		 // verifies that the name is defined and not empty
		 it('has Name defined', function() {
			 allFeeds.forEach(function(feed) {
				var name = feed.name;
				
				expect(name).toBeDefined();
				expect(name.length).not.toBe(0);
			 })
		 })
    });


	describe('The Menu', function() {
		 
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);   // checks if menu is hidden by default
		});
		  
		it('visibility changes on click', function() {
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toEqual(false);   // checks if menu displays on click
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toEqual(true);    // checks if menu closes on click
		});
	});

	describe('Initial Entries', function() {
		 
		beforeEach(function(done) {
			loadFeed(0, done);
		});
		
		it('has element present', function() {
			expect($('.feed .entry').length).toBeGreaterThan(0);   // verifies there is at least one entry in feed
		});
	});
	
	describe('New Feed Selection', function() {
		 
		 var lastFeed;
		 var nextFeed;
		 
		 //  verifies that new content is loaded by loadFeed function
		 beforeEach(function(done) {
			 loadFeed(0, function() {
				 lastFeed = $('.feed').html();
				 loadFeed(1, function() {
					 nextFeed = $('.feed').html();
				 done();
				 });
			 });
		 });
		 
		 it('content changes when new feed is loaded', function(done) {
			 loadFeed(1, function() {
				 expect(nextFeed).not.toEqual(lastFeed);
				 done();
			 });
		 });
	});	 
}());
