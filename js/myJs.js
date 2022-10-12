const textConfig = {
  text1: "He luu Emily!",
  text2: "Em đang làm gì ấy 🧐. Dành xíu thời gian làm cái này nè",
  text3: "Hi, nói sao nhỉ 🥺. Người ta hay nói gặp nhau là do duyên, bên nhau là lựa chọn! Anh cũng không hoàn hảo đôi lúc cũng gây cho em những rắc rối không đáng có nhưng anh sẽ luôn luôn cố gắng để trở nên hoàn hảo hơn từng ngày! Anh thích em không bởi chỉ vì ngoại hình cute của em mà còn là vì sự dễ thương trong cách ăn nói, giỏi giảng của em. Cuối cùng thì anh siêu thích em rồi!",
  text4: "Em có thể trở thành bạn gái anh hong 🥺 Nếu cậu ko trả lời mà thoát ra tức là muốn làm vợ anh rùi đó nha :v",
  text5: "Anh mơ à???",
  text6: "Yêu ơi là yêu ❤️",
  text7: "lí do em thích anh đi :vvvv",
  text8: "Gửi cho tớ <3",
  text9: "Vì anh đẹp try vlllll, học dỏi nựa",
  text10: "Tớ biết mà ^^ Yêu em 300.000",
  text11:
    "Mốt gặp nhau làm trend này nhaaa: https://www.tiktok.com/@letrucphuong1003/video/7017781401529486618?is_from_webapp=1&sender_device=pc",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "http://fb.com";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
