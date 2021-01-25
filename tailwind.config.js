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
        'hero-pattern-lg': "url('https://previews.dropbox.com/p/thumb/ABCCs_HUqWltTt--FVQHuG_B_XqwrbhSzJDXruXbQOKAzeG8nNrA9CiDu91O-UI1bISWUoQlKa9OeBicnRk2KgbRMPlyxgXa-RGqDrlvl8uNUf0HkuEqMe4hXNP2sX5bAyOOW6dsbi_mLyU7XhiV_9k9PDBHMQChfKmtQlytJIHix1nPC5fPWNebA_p0VRP_o64jEcBrkxPxkGlhhw8WkFv-tIp76kNxukBVO70q0i7ewtGqE9mhuHZwSqYlMqDIAHoHB7F3f18MVF7w0SjOUrH7jYOBtO81QHa0v0LVi_VJ2yt89iaqoVgTQD37q529zSXmgBjzE_kASTXsgiksdL0UB7O5ZsmZ_L107BOMsQdouA/p.jpeg?fv_content=true&size_mode=5')",
        'hero-pattern-xs': "url('https://previews.dropbox.com/p/thumb/ABCgqRSB51knEyJFhO3w5ut1sI8rr10VDfMvbWUq40x8plZQjb90QygIQZnJ71desHQWT1CjsLNl9XqHjj6r3WtIb84EDJ_JchN9xY1N_V3PPCDhhiUWSSHIoRtHCwe80WvcAJYJ-lMNLdwz4qDPLs2pIVT3z6NlOiBskGqn-TFcVtmldoiNWQQ7vwGYTwi61zf6_6NaQp3th6dHXAONXYnRnvCw4ZfaYbo6wKN3pXSM-T7BodQjWW0hJGrzMEFXnwydmrhdGfMoZg9Q3F8VK7v5IE9iWsUySmhu3i6zDOHe_QPZjLUwBRL5WCKAJZH22CIMP-61yc_OnRky80ZhvR8De-FRdMcO7dgbIewqSl60GA/p.png?fv_content=true&size_mode=5')",
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
