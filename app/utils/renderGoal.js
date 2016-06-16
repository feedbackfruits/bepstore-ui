function render(route, parent, inModal){
  let setting = { into: 'application' };
  if(inModal){
    setting = { into: 'application', outlet: 'modal' };
  }
  route.render(parent, setting);
}

export const renderGoal= {
 render
};

export default renderGoal;
