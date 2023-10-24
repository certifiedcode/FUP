<script>
  function fup() {
    console.info(`Hey! I am FUP.`);
    var _fup_isValid = true;
    var _fup_init = null;
    var path = window.location.pathname;
    window.addEventListener("message", function (event) {
      if (event?.data?.fup?.init) {
        _fup_init = event.data.fup.init;
      }
      if (event?.data?.fup?.isValid !== undefined) {
        _fup_isValid = event.data.fup.isValid;
      }
    });
    setInterval(() => {
      if (_fup_init) {
        var element = document.getElementById(_fup_init);
        var options = document.querySelector(
          '[data-hook="product-options-inputs"]'
        );
        if (options && element) {
          // check if it is already moved by checking parent
          var isMoved = element.parentElement === options.children[0];
          if (!isMoved) {
            options.children[0].appendChild(element, options.children[0]);
          }
        }
      }
      var addToCart = document.querySelector('[data-hook="add-to-cart"]');
      if (addToCart) {
        if (_fup_isValid) {
          addToCart.style.display = "block";
        } else {
          addToCart.style.display = "none";
        }
      }
      if (path !== window.location.pathname) {
        path = window.location.pathname;
        _fup_init = null;
        _fup_isValid = true;
      }
    }, 1000);
  }
</script>
