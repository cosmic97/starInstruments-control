$(document).ready(function () {
  var hamburger = $(".hamburger");
  var navLinks = $(".nav-links");

  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });

  //slick slider
  $(".slideshow .slick").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  //hamburger menu to show navigation links on click
  hamburger.click(function () {
    hamburger.toggleClass("active");
    navLinks.toggleClass("active");
    $("body").toggleClass("hide-scroll");
  });

  const form = $("#form");
  const name = $("#name");
  const email = $("#email");
  const subject = $("#subject");

  form.on("submit", (e) => {
    e.preventDefault();
    checkInputs();
    // alert('thank you')
  });

  function checkInputs() {
    const nameValue = name.val().trim();
    const emailValue = email.val().trim();
    const subjectVal = subject.val().trim();

    if (nameValue === "") {
      setErrorFor(name, "name cannot be blank!");
    } else {
      setSuccessFor(name);
    }

    if (emailValue === "") {
      setErrorFor(email, "Email cannot be blank!");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "Not a valid Email");
    } else {
      setSuccessFor(email);
    }

    if (subjectVal === "") {
      setErrorFor(subject, "Subject cannot be empty");
    } else {
      setSuccessFor(subject);
    }
  }

  function setErrorFor(input, message) {
    const formControl = input.parent();
    const small = formControl[0].querySelector("small");
	formControl.attr('class','form-control error');
    // formControl[0].addClass("form-control error");
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parent();

    formControl.attr('class','form-control success');
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
});
