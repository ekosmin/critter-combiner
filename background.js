chrome.app.runtime.onLaunched.addListener(function() {
    console.log("start");
    chrome.app.window.create('index.html', {
        'bounds': {
            'width': 805,
            'height': 805
        }
    });
});
