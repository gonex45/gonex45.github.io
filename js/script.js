function onReady(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

onReady(function () {
  var asidebtn = document.getElementById('asidebtn'); // or whatever triggers the toggle

  asidebtn.addEventListener('click', function (e) {
    var aside = document.getElementById('aside');
    aside.classList.toggle('active');
    asidebtn.classList.toggle('active');
    aside.classList.remove('noactived');
  });
});


function Gsitesearch(curobj) {
  curobj.q.value = "site:" + window.location.hostname + " " + curobj.qfront.value;
}


// disqus

/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT
 *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR
 *  PLATFORM OR CMS.
 *
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
 *  https://disqus.com/admin/universalcode/#configuration-variables
 */

(function () { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
  var d = document,
    s = d.createElement('script');

  // IMPORTANT: Replace EXAMPLE with your forum shortname!
  s.src = '//blog-gorendo.disqus.com/embed.js';

  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();