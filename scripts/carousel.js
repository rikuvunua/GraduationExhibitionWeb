$('.carousel').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    variableWidth: true,

    responsive: [
        {
          breakpoint: 1024, // モバイルのブレークポイント
          settings: {
            slidesToShow: 2, // モバイル時の表示枚数
          },
        },
      ],
});

