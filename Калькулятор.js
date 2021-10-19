    function click1() {
      let f1 = document.getElementsByName("field1");
      let f2 = document.getElementsByName("field2");
      let r = document.getElementById("result");
      let re=/^\s*\d+\s*$/;
      if ((re.exec(f1[0].value))&&(re.exec(f2[0].value)))
      alert(f1[0].value*f2[0].value+" руб.");
      else alert("Некорректный ввод");
      return false;
    }
      window.addEventListener("DOMContentLoaded", function (event) {
        console.log("DOM fully loaded and parsed");
        let b = document.getElementById("button");
        b.addEventListener("click", click1);
      });