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

Start a local server to simulate accessing the hosted app from the browser, and trying the *Install* button flow.

For example:

````bash
python -m SimpleHTTPServer 8000
````

then access `localhost:8000` or `your.computer.ip:8000` (for example, `192.168.0.25`) using Firefox (Desktop or Mobile), or the Browser app in a Firefox OS simulator (or device).

You'll need to use the IP address when using a physical device. Change the port accordingly, if you're running a webserver in this port already.

**(If it's a packaged app)**

Import the app into the [App Manager](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager). Then you can run it in the simulator, or in a Firefox OS device.

## Code walkthrough

The `manifest.webapp` file contains metadata about the app, such as its name, description, icon and required permissions for running under Firefox OS.

The app logic is defined in `js/app.js`. This is where we define the app's behaviour. In the interest of keeping things tidy and easy to follow, we have extracted the code for app installation onto `js/install.js` that we then reference in `index.html`, right before `js/app.js`.

If you plan on building a packaged app, you can delete all the install portions, as packaged apps are installed using a different mechanism (mostly a ZIP file with the app contents). Similarly, you can remove the mentions to `appcache` both in `index.html` and `manifest.webapp` in this case too, as the entire app is copied to the device when installed, and no caching mechanism is in place.

The appearance is defined in `css/app.css`. There are just some very basic rules.

## Getting help

If you find something that doesn't quite work as you'd expect, we'd appreciate if you [filed a bug](https://github.com/mozilla/mortar-template-template/issues)!

We need your help in order to help you. Therefore:

1. Tell us which version of the template are you using. Where did you get the code from?
* Specify the environment where the bug occurs i.e. which browser were you using, or which version of the Simulator or Firefox OS device. An example would be `Firefox 30.0a1 Nightly 20140210`. You can generally get this data from the *About* menu in your browser. Also maybe tell us if you have experimental features enabled in your browser (for example, support for web components).
* Describe the problem in detail. What were you doing? What happened? What did you expect to happen?
* Probably also provide a test case so we can see what is happening and try to reproduce the error.

Ultimately it all boils down to the fact that if we can't reproduce it, we can't help you or fix it either.

## Contributing

Contributions are always welcome! If you want to collaborate, whether that is with a new feature or fixing a bug, we recommend you...

1. Have a look at the [issue tracker](https://github.com/mozilla/mortar-template-template/issues) first--to make sure there isn't anyone working on that already.
* If it's a new issue/feature, or no one is working on it already, fork the project in GitHub (you'll need an account if you don't have one yet).
* Create the bug to let us know you want to work on this. That way we are aware of and can keep an eye on it, or maybe tell you that it is not a bug but an intended feature, and save you the hassle of working on something that is not needed.
* Clone your fork to your computer (i.e. get the code onto your computer)
* Make a new branch, and switch to that new branch
* Do the changes you deem necessary
* Push the branch to GitHub
* Send a pull request

To make your changes as easy to merge back onto the project as possible, you should only work on one feature per branch. That makes code review simpler and faster!
