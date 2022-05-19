module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Primary: {
          purple: '#6800BA',
          purple2: '#A634FF',
          lightPurple: '#BF6FFF',
        },
        Neutrals: {
          white: '#FFF',
          black: '#33323F',
          lightGray: '#cecece',
          lightGray2: '#eeeeee',
          ivory: '#fbfbfb',
          gray: '#777',
          deepGray: '#434051',
          whiteGray: '#f6f6f6',
          whiteGray2: '#f9f9f9',
        },
        Secondary: {
          orange: '#ff9e0d',
          lightOrange: '#ffce85',
        },
        Level: {
          red: '#e05656',
          orange: '#fcb370',
          yellow: '#efd886',
          green: '#c1dc95',
          sky: '#a1c7f4',
          navy: '#5760b1',
        },
        Etc: {
          whitePurple: '#fbf6ff',
        },
        Coin: {
          sol: '#8669d2',
          btc: '#e2923b',
          doge: '#b19947',
        },
      },
      padding: {
        auto: 'auto',
        '10s': '10px',
      },
      margin: {
        bottom: {
          '131s': '131px',
        },
      },
      fontSize: {
        xxs: ['10px', '12px'],
        btnxs: ['12px', '14px'],
        ch1: ['48px', '67px'],
        ch2: ['32px', '38px'],
        ch3: ['20px', '24px'],
        ch4: ['18px', '29px'],
        ch5: ['18px', '21px'],
        menus: ['15px', '18px'],
        logos: ['30px', '30px'],
      },
      fontFamily: {
        Pretendard: 'Pretendard',
        'Gmarket Sans': 'Gmarket Sans',
      },
      height: {
        headers: '60px',
        footers: '250px',
        contents: '765px',
        userinfo: '178px',
        followerrank: '802px',
        prevrank: '347px',
        matchs: '102px',
        realrank: '823px',
        btnh: '58px',
        h39: '39px',
        h34: '34px',
        h217: '217px',
        h185: '185px',
        h170: '170px',
        h29: '29px',
        h46: '46px',
        h5: '5px',
      },
      width: {
        container: '1200px',
        rankview: '793px',
        ranksideview: '384px',
        btnw: '275px',
        full: '100%',
        w130: '130px',
        w99: '99px',
        w141: '141px',
        w299: '299px',
        w732: '732px',
      },
      variants: {
        // ...
        scrollbar: ['dark'],
      },
      boxShadow: {
        box: '0px 0px 8px 0px rgba(0,0,0,0.07)',
        help: '0px 0px 20px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
