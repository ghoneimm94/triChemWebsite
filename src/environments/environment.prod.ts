export const environment = {
  production: true,
  loading : {
    showLoading: false
  },
  lang : {
    userLang: localStorage.getItem('lang') || 'en'
  },
  rootAPIURL : 'http://back.trichem-eg.com/api/'
};
