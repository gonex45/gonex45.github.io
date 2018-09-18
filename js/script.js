function ready(fn) {
  console.log(111);
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
    console.log(123);
  } else {
    console.log(1234);
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function setMenuBtn() {
    // $(document).ready(function () {
      //   $('[data-toggle="offcanvas"]').click(function () {
      //     $('#aside').toggleClass('active')
      //   });
      // });
      var asidebtn = document.getElementById('asidebtn'); // or whatever triggers the toggle

      asidebtn.addEventListener('click', function(e) {
        var aside = document.getElementById('aside');
        aside.classList.toggle('active');
        asidebtn.classList.toggle('active');
      });
}
ready(setMenuBtn);
console.log("???");


function Gsitesearch(curobj){
  curobj.q.value="site:"+window.location.hostname+" "+curobj.qfront.value;
}

    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT
     *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR
     *  PLATFORM OR CMS.
     *
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
     *  https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
    var disqus_config = function () {
        // Replace PAGE_URL with your page's canonical URL variable
        this.page.url = PAGE_URL;

        // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        this.page.identifier = PAGE_IDENTIFIER;
    };
    */

    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement('script');

        // IMPORTANT: Replace EXAMPLE with your forum shortname!
        s.src = 'https://disqus_2n6aCcT1qB.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();