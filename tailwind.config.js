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
        'hero-pattern-lg': "url('https://lh3.googleusercontent.com/d8fA8w4ktDmbVvi0SUqG1RXueK17IOJ0WHqKpkIoJeKCxG3Jm_ZM6CTXMXNCj47MwuaPfGPIEtKD36U0BY67K4lddpcqHCRToIOkrba6dIig99R-DuJC_bMR4kGa5lj6MybXt8i7Fyay4XU-5nRAeaMTuhHDM3MTf6dwHTco728lRqoRx1YK7BxQ3Ft1aWpYDtLbXfPBDipi9uXcYXmGEGxXmClo7Joz0TxaG5PtqiO0LJrNQDH-qsvmUndOxDuWG8Sk2Hh0tCkmMqhQEo5VAR5KEdkm0o1DBQC7JwE8lfPZRSiYD3qRzos2d0jwg3THiBsgevgss8Ck3cg89w6cqvUmIznTDTA2Bc2AMO6F4r7oqvRL6OOaUQmC4yQZh-V1Czf4LddvobC6KXGGcZ6kN9lYt39rPyHjaBdlvN6ayFtHgyRKifna_xEHmD2dGFUCdEmn3Ln0XAU9_QgEhV0AuCN4E68e9RWDH88PubLa7P86EVdsdIg8D-pRenwcPUcyvP24gwk9ppuGZ_ULdyIMpPko4EXTg6ewxaG1fx_zYjiEwXsn1HUFti3ogLsmI2-WnLd3Wcvddg1uwXuIocGExlXDvpLJ1r-5cT-YGGxT2sFIXOJccpgN7VqmE6XQOzgygehXcZvKaSvGThrUxtIacTHN42ZYVC5cTmioPtWV1cVW7UvZjFU3qwL0ffTW8pE=w951-h634-no?authuser=0')",
        'hero-pattern-xs': "url('https://lh3.googleusercontent.com/Iq-vwaUSurDIDh0qKphqI96fgKiAwor3mOwlFMWJbfYMrnOeO7TcdWlL2ABgkUPR7QhHmsRQpjaPk2DVY445QFVs-PRCUsFncMexSxd4VJXYRRHUzOb9zbxORcvm92hkSwih4YwshcrnMr4-ACniNI3dcHr_H1qeWjF_1gD0oAcsU9E6W3O9fV8-ffwqLogMC6FljhOF6hPux94KnZS_XmbuJP1y8oP_5qlrO1iKgajtUwD0RVQLBJeTDt1DWgir1HSvBk8g5DGm_S9NrShZ5qmwiCR-OyiWc2KorcarG5ANOFAMMpKr-QVrIqo1o6SEGCpTc9ApdxFuNSE5r9m5iYHA2Esxog1r2DAeiDNMwqPbT8Kc8L-z7bImSFf9UNbgvR_bpHZ3cg8GMYQjZ3NZGYo-bhRoFlXrT5UFGesT_AB8ZUhLDJ1Ib7zHSCOyf1h5kGjC5JvUiFymfKpACHPK8Dpe2JnDzSOSWrMMHHCaAOXJv6sNXQ1hezwHCBw--VbMLz0CYckSzze6IX6dDxvn4YwsWN5FxO-nq729FCdAI8kV7HtpW_3DYqpJzLQBZuL7Dwqf5MTXGHGJgdRJK7lqQxQeq_U-Cq2Mbb7wqMcT5T5aww9nvqGrsz2HockNzgOj_dZhY6dOWtiGQ7H_nxh7n_JFXo2KXvVsJjUC84rw6g5abUBEZ4v3a0u4yKc2-U0=w341-h422-no?authuser=0')",
        'hero-blur': 'linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
        'card-unidade-sc': "url('https://www.sesc-sc.com.br/blog/Manager/show_image.php?show_arquivo=institucional&show_campo=institucional_imagem_pq&show_chave=Institucional_id=8277')",
        'card-blur': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))',
        'card-equipe': "url('https://images.pexels.com/photos/841125/pexels-photo-841125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        'card-prof': 'linear-gradient(180deg, #000000 1.82%, rgba(10, 18, 0, 0.96662) 21.46%, rgba(15, 27, 0, 0.947919) 35.57%, rgba(22, 39, 0, 0.926669) 45.15%, rgba(31, 55, 0, 0.89601) 54.72%, rgba(92, 163, 0, 0.69) 100%)'
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
