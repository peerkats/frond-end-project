
function progressbar(classname, id, target) {
    document.addEventListener("DOMContentLoaded", function() {
        let number = 0;
        let observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true) {
                document.querySelector(classname).classList.add('in-view');
                let intervalId = setInterval(function() {
                    number++;
                    document.getElementById(id).innerHTML = number + '%';
                    if (number >= target) {
                        clearInterval(intervalId);
                    }
                }, 25);
            } else {
                document.querySelector(classname).classList.remove('in-view');
                number = 0;
            }
        }, { threshold: [0] });

        observer.observe(document.querySelector(classname));
    });
}


progressbar('.progress-bar', 'progress', 70);
progressbar('.progress-bar1', 'progress1', 50);
progressbar('.progress-bar2', 'progress2', 50); // corrected here
