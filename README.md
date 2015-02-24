# critter-combiner
To run critter-combiner as a Chrome App, you'll first need to set up a file watcher to convert the TypeScript
Files into a JavaScript one.

To do this, set a watcher on the TypeScript files. Run tsc with the following arguments:
"--sourcemap $FileName$ --out game.js", refreshing these paths on build:
"$FileNameWithoutExtension$.js:$FileNameWithoutExtension$.js.map"

Follow the instructions here to run the app: https://developer.chrome.com/apps/first_app#five