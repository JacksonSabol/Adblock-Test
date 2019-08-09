// var adBlockEnabled = false;

// var testAd = document.createElement('div');
// testAd.innerHTML = '&nbsp;';
// testAd.className = 'adsbox';
// document.body.appendChild(testAd);
// window.onload = function() {
//   if (testAd.offsetHeight === 0) {
//     adBlockEnabled = true;
//   }
//   testAd.remove();
//   console.log('AdBlock Enabled? ', adBlockEnabled)
// };
$(document).ready(function () {
    window.setTimeout(function () {
        var bottomad = $('#bottomAd');
        if (bottomad.length == 1) {
            if (bottomad.height() == 0) {
                console.log("adblocked");
            } else {
                console.log("not adblocked");
            }
        }
    }, 1000);
});