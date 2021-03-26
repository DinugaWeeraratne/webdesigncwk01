// call the redirectTo function by passing the page name as a parameter to direct to any page

const routes = [
  {
    pageName: 'query-page',  
    url: './query.html',
  },
  {
    pageName: 'quiz-page',  
    url: './quiz.html'
  },
  {
    pageName: 'student-details-page',
    url: './studentDetails.html'
  },
  {
    pageName: 'buy-products-page',
    url: './buyProducts.html'
  }
];
getRedirectionUrl = (object) => {
  const [wrapper] = object
  const { url } = wrapper
  return url
}
redirectTo = (parameter) => {
  const redirectUrlArray = routes.filter(route => route.pageName === parameter)
  window.open(getRedirectionUrl(redirectUrlArray))
};
