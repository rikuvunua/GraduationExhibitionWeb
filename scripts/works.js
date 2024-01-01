$(".slide-items").slick({
  autoplay: true,
  slidesToShow: 3, // デスクトップ時の表示枚数
  infinite: true,
  slidesToScroll: 1,
  dots: true,
  initialSlide: 0,


  responsive: [
    {
      breakpoint: 844, // モバイルのブレークポイント
      settings: {
        slidesToShow: 2, // モバイル時の表示枚数
      },
    },
  ],
});

