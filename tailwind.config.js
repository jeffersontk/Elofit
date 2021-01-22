module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      '50%': '50%',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        light:'#90FF00',
        DEFAULT: '#5CA300',
        dark: '#3D6904'
      },
      white: {
        DEFAULT: '#FFFFFF'
      },
      gray: {
        light: '#DDDDDD',
        DEFAULT: '#595959',
        dark: '#3D3D3D'
      }
    },
    extend: {
      backgroundAttachment: false,
      backgroundImage: theme => ({
        'hero-pattern-lg': "url('https://blog.academiaboaforma.com.br/wp-content/uploads/2019/09/305712-4-beneficios-de-frequentar-uma-academia-para-familia.jpg')",
        'hero-blur': 'linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.6))'
      }),
      outline: {
        linha: '2px solid #5CA300'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
