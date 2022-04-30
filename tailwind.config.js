module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
          customcolor : {
            'nomals': '#C4C4C4',
          } 
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
        },
        fontFamily : {
          'Pretendard' : 'Pretendard'
        },
        height : {
          headers : '65px',
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
      },
      
    },
    plugins: [],
  }