module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
          'curp' : '#6800BA',
          'curr' : '#E5606B',
          'curb' : '#4380F8',
          'neutrals1' : '#33323F',
          'neutrals2' : '#45425E',
          'neutrals3' : '#777777',
          'neutrals4' : '#CECECE',
          'neutrals5' : '#FFFFFF',
        },
        padding : {
          auto : 'auto',
          '10s' : '10px',
          
        },
        margin : {
          bottom : {
            '131s' : '131px',
          }
        },
        fontSize : {
          xxs : ['10px','12px'],
          btnxs : ['12px','14px'],
          ch1 : ['48px','67px'],
          ch2 : ['32px','38px'],
          ch3 : ['20px','24px'],
          ch4 : ['18px','29px'],
          ch5 : ['18px','21px'],
          menus : ['15px','18px'],
          logos : ['30px','30px'],
        },
        fontFamily : {
          'Pretendard' : 'Pretendard',
          'Gmarket Sans' : 'Gmarket Sans',
        },
        height : {
          headers : '60px',
          footers : '250px',
          contents : '765px',
          userinfo : '178px',
          followerrank : '802px',
          prevrank : '347px',
          matchs : '102px',
          realrank : '823px',
          btnh : '58px',
          'h39' : '39px',
          'h34' : '34px',
          'h217' : '217px',
          'h185' : '185px',
          'h170' : '170px',
          'h29' : '29px',
          'h46' : '46px',
          'h5' : '5px',
        },
        width : {
          container : '1200px',
          rankview : '793px',
          ranksideview : '384px',
          btnw : '275px',
          full : '100%',
          'w130' : '130px',
          'w99' : '99px',
          'w141' : '141px',
          'w299' : '299px',
          'w732' : '732px',
        },
        variants: {
          // ...
          scrollbar: ['dark']
        },
      },
      
    },
    plugins: [
      // ...
      require("tailwind-scrollbar"),
      
    ],
  }