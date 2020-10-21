export const checkSize = (size) => {
  switch(size){
    case 1:
      return 'base';
    case 2:
      return 'lg';
    case 3:
      return 'xl';
    case 4:
      return '2xl';
    case 5:
      return '3xl';
    case 6:
      return '4xl';
    default:
      return 'base';
  }
}