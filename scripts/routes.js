// call the redirectTo function by passing the page name as a parameter to direct to any page

const routes = [
  {
    pageName: 'query-page',  
    url: 'file:///home/sanuda/webdesigncwk01/pages/query.html',
  },
  {
    pageName: 'quiz-page',  
    url: 'file:///home/sanuda/webdesigncwk01/pages/quiz.html'
  },
  {
    pageName: 'student-details-page',
    url: 'file:///home/sanuda/webdesigncwk01/pages/studentDetails.html'
  },
  {
    pageName: 'buy-products-page',
    url: 'file:///home/sanuda/webdesigncwk01/pages/buyProducts.html'
  }
];
getRedirectionUrl = (object) =>{
    const[wrapper] = object
    const {url} = wrapper
    return url
}
redirectTo = (parameter) => {
    const redirectUrlArray = routes.filter(route => route.pageName === parameter)
    window.open(getRedirectionUrl(redirectUrlArray))
};
