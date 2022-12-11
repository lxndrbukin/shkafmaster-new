module.exports = ({ req }, input) => {
  const { errors } = req;
  if (errors) {
    if (errors[input]) {
      return 'input-error';
    } else {
      return '';
    }
  } else {
    return '';
  }
};
