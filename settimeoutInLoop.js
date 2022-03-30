const array = [1, 2, 3, 4];
(function () {
  for (var i = 0; i < array.length; i++) {
    ((i) => {
      setTimeout(function () {
        console.log("I am at index " + i);
      }, 3000);
    })(i);
  }
})();
