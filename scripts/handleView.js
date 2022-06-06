const View = ({ body}) => {
   const changeView = () => {
    body.classList.toggle('viewTwo');
   }
   
   return changeView
  };
  
  export default View;
  