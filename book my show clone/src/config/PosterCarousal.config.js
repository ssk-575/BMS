const settings={
    IntialState:0,
    arrows:true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
        {
            breakpoint:1024,
            settings: {
                slidesToShow:3,
                slidesToScroll:3,
            }
        },
        {
            breakpoint:600,
            settings: {
                slidesToShow:2,
                slidesToScroll:2,
            }
        },
        {
            breakpoint:400,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
    ]
};

export default settings;