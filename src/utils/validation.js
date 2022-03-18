import { FormattedMessage} from 'react-intl'

export const nameValidate = value => {
  if (!value || value.length < 5)
    return <FormattedMessage className='err' id='invalid.name' defaultMessage='Field must be at least five characters' />;
};

export const mailValidate = value => {
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)))
    return <FormattedMessage id='invalid.email' defaultMessage='Wrong E-mail format' />
};

export const selectValidate = value => {
  if (value === 'default')
    return  <FormattedMessage id='required.dropdown.message' defaultMessage='Select option from dropdown' />;
};