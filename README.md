# A template template

This is a [title here] template including [what this template does].

This is part of the [mortar](https://github.com/mozilla/mortar/) template collection for building [Open Web Apps](https://developer.mozilla.org/en-US/Apps).

## Obtaining

There are a few ways to get this template:

If you use [Git](http://www.git-scm.com/):

````bash
git clone https://github.com/mozilla/mortar-template-template.git
````

Or download the latest version in this [ZIP file](https://github.com/mozilla/mortar-template-template/archive/master.zip).


## Usage

**(If it's a hosted app)**

Start a local server to simulate accessing the hosted app from the browser, and trying the install button flow.

For example:

````bash
python -m SimpleHTTPServer
````

then access `localhost:8000` using Firefox (Desktop or Mobile), or the Browser app in a Firefox OS simulator (or device).

Open ````index.html```` in your browser to run the game. Alternatively, since we include a `manifest.webapp` file, you can also install the app in your Firefox OS device or simulator using the [App Manager](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager).

**(If it's a packaged app)**

Import the app into the [App Manager](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager), then you can run it in the simulator or in a Firefox OS device.

## Code walkthrough

The `manifest.webapp` file contains metadata about the app, such as its name, description, icon and required permissions for running under Firefox OS.

The app logic is defined in `js/app.js`. This is where we define the app's behaviour. In the interest of keeping things tidy and easy to follow, we have extracted the code for `X` and `Y` onto `js/X.js` and `js/Y.js` that we then reference in `index.html`, right before `js/app.js`.

The appearance is defined in `css/app.css`.
