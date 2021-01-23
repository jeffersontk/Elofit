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
      },
      black:{
        DEFAULT: '#000000'
      }
    },
    extend: {
      backgroundAttachment: false,
      backgroundImage: theme => ({
        'hero-pattern-lg': "url('https://i.pinimg.com/564x/04/30/b9/0430b961c686e5d8b451c0eea94417be.jpg')",
        'hero-pattern-xs': "url('https://i.pinimg.com/564x/ae/ce/f9/aecef98c28265d81d7c37b4135b0e1a1.jpg')",
        'hero-blur': 'linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
        'card-unidade-sc': "url('https://www.sesc-sc.com.br/blog/Manager/show_image.php?show_arquivo=institucional&show_campo=institucional_imagem_pq&show_chave=Institucional_id=8277')",
        'card-blur': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))',
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
