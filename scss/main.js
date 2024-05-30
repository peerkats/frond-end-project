// JavaScript

function progressbar(classname) {
    document.addEventListener("DOMContentLoaded", function() {
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true)
                document.querySelector(classname).classList.add('in-view');
            else
                document.querySelector(classname).classList.remove('in-view');
        }, { threshold: [0] });
    
        observer.observe(document.querySelector(classname));
    });

}

progressbar('.progress-bar');