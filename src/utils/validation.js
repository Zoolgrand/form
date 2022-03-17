
export const nameValidate = value => {
    if (!value || value.length < 5)
      return 'Field must be at least five characters';
  };

 export const mailValidate = value => {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)))
      return 'Wrong E-mail format';
  };

 export const selectValidate = value => {
    if (value ==='notSet')
      return 'Select option from dropdown';
  };