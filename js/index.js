$(document).ready(function () {
  const aside = $("aside").innerWidth();

  $(".tapped-content").slideUp();
  $(".side-home").css({ left: -`${aside}` });

  $(".btn-open").on("click", function () {
    $(".side-home").animate({ left: "0" }, 1000);
  });
  $(".closeBtn").on("click", function () {
    $(".side-home").animate({ left: -`${aside}` }, 1000);
  });

  $(".tapped-header").on("click", function (e) {
    $(e.target).next().slideToggle(1500);
    $(e.target).parent().siblings().children(".tapped-content").slideUp(1500);
    console.log();
  });

  function startCountdown(endTime) {
    const countDownDate = new Date(endTime).getTime();

    const interval = setInterval(function () {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        $(".timer").html("Timer Expired");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        $(".days").text(`${days} D`);
        $(".hours").text(`${hours} h`);
        $(".mins").text(`${minutes} m`);
        $(".secs").text(`${seconds} s`);
      }
    }, 1000);
  }

  $(".textarea").on("input", function (e) {
    let remainingChar = 100 - e.target.value.length;
    if (remainingChar <= 0) {
      $(".ch-count").hide();
      $(".form-ch").text("You have reached the limit");
    } else {
      $(".ch-count").show();
      $(".ch-count").text(`${remainingChar}`);
      $(".form-ch").text("Characters remaining");
    }
  });

  const endTime = new Date("2024-12-31").getTime();
  startCountdown(endTime);
});
