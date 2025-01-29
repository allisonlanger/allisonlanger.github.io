$(document).ready(function() {
	if ($(".gallery-slider").length != 0) {
		jQuery('.gallery-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			useCSS: true,
			pauseOnFocus: true,
			pauseOnHover: true,
			dots: true,
			fade: true,
			adaptiveHeight: true
		});
	}
});

// on pageload, set all submenus in mobile nav to display:none
      var submenus = document.getElementsByClassName(
        "c-primary-menu-link-list"
      );
      for (var i = 0; i < submenus.length; i++) {
        submenus[i].style.display = "none";
      }
      function toggleList(button, id) {
        const plus = button.getElementsByClassName("fa-plus")[0];
        const minus = button.getElementsByClassName("fa-minus")[0];
        var list = document.getElementById(id);
        if (!list.classList.contains("menu-hidden")) {
          list.classList.remove("menu-visible");
          list.classList.add("menu-hidden");
          minus.classList.remove("menu-visible");
          minus.classList.add("menu-hidden");
          plus.classList.remove("menu-hidden");
          plus.classList.add("menu-visible");
        } else {
          list.classList.remove("menu-hidden");
          list.classList.add("menu-visible");
          minus.classList.remove("menu-hidden");
          minus.classList.add("menu-visible");
          plus.classList.remove("menu-visible");
          plus.classList.add("menu-hidden");
        }
      }