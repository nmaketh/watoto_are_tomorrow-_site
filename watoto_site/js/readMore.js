
    document.addEventListener("DOMContentLoaded", function() {
        var readMoreBtns = document.querySelectorAll(".read-more-btn");

        readMoreBtns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                var moreText = this.previousElementSibling.querySelector(".more-text");
                if (moreText.style.display === "none") {
                    moreText.style.display = "inline";
                    this.textContent = "Read Less";
                } else {
                    moreText.style.display = "none";
                    this.textContent = "Read More";
                }
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var readMoreBtn = document.querySelector(".read-more-btn");
        var moreText = document.querySelector(".more-text");

        readMoreBtn.addEventListener("click", function() {
            if (moreText.style.display === "none") {
                moreText.style.display = "block";
                readMoreBtn.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });
    });