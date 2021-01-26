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
        light: '#EEEEEE',
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
        'card-prof': "linear-gradient(180deg, #000000 1.82%, rgba(10, 18, 0, 0.96662) 21.46%, rgba(15, 27, 0, 0.947919) 35.57%, rgba(22, 39, 0, 0.926669) 45.15%, rgba(31, 55, 0, 0.89601) 54.72%, rgba(92, 163, 0, 0.69) 100%)",
        'card-fitdance': "url('https://lh3.googleusercontent.com/pRmzlvy968CeeEjYqKSUudh_7MT44gNVCaVURKX50UgZUcpyPBVvH0Rk8b5ietsdSvBNF2wWnvjWrHrK5ApqJ1OixwyAiAIyN85a5OQm-IZ9OJjs5_RCUINhiuD1-sk4DnweBAUAqIAul9gx91GeVDntqp0kJJ9-oLpo4ZcX0o7JqWS67hrpzPpaPCHtWlkK1tdp6S9ndqfQ6IzX-bsvBFA8Op8JTPlt5ubfaCzCaXe9ypBlhkRe0jg0AwhjtMJ5LE9CjlJgtTuQBW86-Pq2sDN2pl9DCxH-Eq8ai6j2jDqCuq1r_16CSl1vKSHalRqHdv5q-pfCtAVLt-lMO3RfcXOzW-LooCq4z6Nq2sxckvOqletqavOgdj0YOEZLJiZ9oNZk_DhKUJLzYZDY2pnVae-Cd5FsUoQ0eW5uJLS_wzE8fKk-tpwvBGYhOIwqRpHWknJqdG9MNh-nvHAshnnKFhjjEq0Uuc5SgLm-f5FmUUyQfgh9qyZTO6VIMC69HsU5ZEyKUGYvknj-qM5dE2yvsl2px3yjVQ1C8_1DYYbUQvJfQIVarGU1hrM7XT0EGCsKBWnxpxig6Y4jUqQ2DvkR1DWE39F6ecrVOuZF1V24sxjuy3gAtuSoobfaAf9JFgtUv_eDv1Fx6ZG4raPO_Jm5tXYwtFRTLJE73zveq47lLnJ0O2as3nSiKZO3jZKIi3k=w250-h165-no?authuser=0')",
        'card-luta': "url('https://lh3.googleusercontent.com/fK1vIDznwv6bAM0jgOaSF46nIdPtidvyOdVXfKyer_TIizFfedZVko4aXpV4Xj8DkxcPp8HU_pVkWDCHsa8HY6_KB7IHzk_dEaMW8SnIAG8h8Clbx5b5tKwJ4wdzvmk6olrA2Xi_RCmnlIzj-Z0vFzst2_K8GsDLWYlCwR9uTJREoqTty7tg71hRLufeGnAotJa-Zt0EPBKFguz46_qjxKJXZL14Sf5UCXrH0AZemyjf6ee5_zeRl3Jwrb0-IYx8Ew69dLxPPaGanirsdYrKAqcF8XoiZMGrCwxYPEOKStLIxUZT992zfQT-hvXck_Y2jDaW3rlRhCQS4_7cOZ0ehoeg2yHh2pWegyydchLLAGE0Uxpr71wGVonamY8A5Fk8tNa-hXdFbuuFfJc3vvTyvsO44o0xqjTGnPAAu_4XZd-1JuspNjtevXVk1GZ38F_hLW2BuhrT923nvKpJjMZQiJh-xzMCULyx8buvhbtIm2GChydst_Go0vnTWmcqzWKlGbbsddqRs794Q4jI3j077iUIm_ioIWPBNKgculwMUJ2N1Nm8aTzqkvjD5XNSPZ_R9-wHHWWxHiKYfnisvvn15Fm6nEby3zGvRvKHPKSbx8H6elZBXiJxmigm2jbo78i6eDWEH1Aw5V1bHx_S1p0oE0j_oZTk6HH4grhXqXWDl18lF7hxRKVV6GDJX7v2DE4=w250-h166-no?authuser=0')",
        'card-musculacao': "url('https://lh3.googleusercontent.com/mHenwAIdw6H-RDw9BF8mMuj_XLhIQ0ubhi8i4j0X-BIPZ845fprgj4FBmw_6V2M3STn3l2YN5JFI4v-IT7O5lxjTNyKLLOxEOQ4yQZkpfRhk7ZLNVidLMI5P_0Mq94tFoR8CgRfK-L92D1-mhTgpXnpnVrnonGgRIYL942oxaknXGQvYbWQuXycG4EunwJf-poYwldxC-JzBTvU33Z_zUMffbnsolSmIHL3WCbW8f0GrmFEIMcg9CBPrYYhX9phAryyQF717X4vXoV6boSLtXlJUpMlZfB0ZcXqCI_XzyGUBkbnmdP_RJaemr9iMue0g4l8YrDIeA72OYYGrq1OfsYXH4GzubxJqx-jKmDyDb0R7_wpEQ41bzkkIs1hzsD5Iu4KBfP-g1bMn6kIbH8qU5c56reoQYcr81EHFaKh6akD2iWr7rKzV16AjdOE4jrjwQXqqphEuVfq1dvdoiOyyFu7LmdRpgCSZaWqBnWjnh0DVBZcSqvuQfftXWlnPZNwT8i0WTwdJxeBXF6YK-pByhvn2xI-k1orM9NIuSOpnCd2SVF4_HR6D1T45xCNyUG_Exmbrli1-B8nCahag07sWbmuJmdg-BssFXYWvf7hC2z3KeCH9ZNh53-MtO8pxyJPMOmFnkM6dL9JNyt4XAe6ps8wWRtaHhX1czCX0dYer4uui50oJveNCo4zfeSE3fCo=w250-h166-no?authuser=0')",
        'card-funcional': "url('https://lh3.googleusercontent.com/hKO5Jte_E6TEoEUV6gUJV56gpLKk0J_OiiDN33LrpfS3PBaSZwYXqUH919kYXSG-b-hqEjWiq_EipgG0ac8WbGU6LF7_FLJPieYDtdW7PmKaz4VMgkLKa9N_IUlGSeXAnG3ozhb0AEWHX8uq2SlEubqhOVgk1V1XdRjJgY63Hb8pyUT1937KglhHoofR4ien7Cc7t9xMm8ggGyFMCUy134fKFER-O00HLbkYUBPCk5OMwq9-m6R9ez7Km4tnHF_7W8ZNZQ67y9ds0WV8UfZz7bYHHt4bFLlmjPq2hVkc7eAHo2Ikp4unVT5QBs-PHkLZ68V5s2wOeiEvPwlZ_wVnXDIQulhcWj1JIsupq_uau1GhkqOYgT_XfPMqelpshC188E58dEBHy07HxqsnGmYcMstuje95mGRJJ-pXzO9CQapG6EFguf2XEgblzWXFAruOMGph6lrKYXmU328t4itJqtp_a1WBVY93v9-yXf3oWXDrcG2r00KMOqOzRclyN8kuVElIGkf3LN3ueSqL4yXniK9koWyNayNDqGh-yc51Ck_hwUNHAj9RAiqbcUWIEdaWA0xAuKV3qtC1MzkAX1J0X5w4dQxXhUn8GCqhbyqYLfZBP2Bd0FjcjXgvu0quutjRGYWdAnk4_nWmiYWAHFFu1RR4Dc7YiPAD5M-AQ6s6GV_ncaf12AhKQLOnGtVE0dI=w250-h166-no?authuser=0')",
        'contato': "url('https://lh3.googleusercontent.com/QQCWWoolTp-avbXTwpofGbRLqp9ycOACJP1Lk3eun2RuKW8oNLoNOyvQXA-NEUyaDxl-HhoWTbBSNoTpKRDR7o-piGsaEL3rvVPjn7qmEiLIHuj0le-C3LZFQ-TEakYCDNBFP43H2MN62Z5aztxaxfy4HMAWMAemwbslD2sFnFr0N05RlphbEO-leSiOGViRpMqbJNBTR-Zk-h1-BbAmQH6oZkfeCFioWZa1ktI4rVvkJXTq8EYvm9172bjf2LqV9Niy84kQfyNY9j4d5MfvbTtu8nsqfGepGXltjaLDBEkIpDsedBIXuIu6oL-drHv6Ut1iB49PT7uey3lGJllNp9n_pWK9aRby6ncomvoGsyeDpCp0BfPB4h8hmqSQGp6yILtXXp50V_x56qCjYEK_2d30MHIha6mC91ZPJIQiLXSmGovq4cRSVboqRd8rQhob2gqjqIppX6bEnxP4KhgcRv9OkAlQOtGdUPpCRG7spyrYpEsxQxLDcO3kGyu6d66eyhsaFZ9Bzws2Bwr-JJQoTXnB1x9Ax3U1My6Gme3k0qc2HPc7_UWAf-quenFqujqpJ6Nmam0WevtkiHtsq0F0v0nXvMtHXgLvpA-j6Q4KIeN7nPMgDaIBynxBKMz1ObENanWyRFEACYgDzbDzqoHENFq8dnVY1fOfEOmvBmEIvveV8KFNbuWlmVocWcl9KdE=w1318-h387-no?authuser=0')"
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
