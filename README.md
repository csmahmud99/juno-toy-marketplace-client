Live Site URL of this [Project] (https://toy-marketplace-juno.web.app).

* Primary Tools used for developing this app:
    * This full app is built with HTML, CSS & JavaScript
        * CSS Library used: Tailwind CSS and DaisyUI
        * JavaScript Library Used: React JS
    * We have used 'Vite' to develop this app in local development purpose.
    * Icons Library used in this app: React Icons.
    * Front-end Deploy: Firebase.
    * Back-end Deploy: Vercel.

* Activities:
    * This app has 7 Main Pages/Routes:
        * Home
        * All Toys
        * My Toys
        * Add a Toy
        * Blog
        * Login
        * Register
    * This app has 2 sub-pages:
        * Single Toy Page
        * Update a Toy Page
    * After entering into Home Route, user can view a Slide Banner above an 'About' section, a 'Counter' section, a 'Shop by Category' section with 3 sub-category tabs with at least 2 Cards in each tab and an 'Image Gallery' section.
    * In Home page, each of the card has a button named 'View Details'. When a user click on that 'View Details' Button, if user is logged in, then the user will be redirected to single toy information page. If user is not logged in, he/she will notice an alert and redirected to the log in page. If the user have no account, then he/she have to create an account at first. If he/she log in, then he/she will be redirected to the desired single toy page.
    * In all toys page, logged in user or, without logged in user - both can see the toys that all users have added (limited to 20 only). User can see a 'View Details' button to view the single toy information here also which is required to be a logged in user.
    * My Toys page is for logged in user, and a logged in user can only watch from here which toys he/she have added so far.
    * Add a Toy Page is also for logged in user which provide the form-facility to add a toy in the website.
    * In Blog page, both logged-in and without logged-in users can watch and read 4 questions-answer.
    * An attractive menu bar with log/in and log-out button is shown in the header, where a logged in user can also view his/her picture and tooltip name beside the log-out button.
