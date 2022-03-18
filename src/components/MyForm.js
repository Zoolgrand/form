import './MyForm.css';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Select, Checkbox, TextArea, RadioGroup, Radio } from 'informed';
import { nameValidate, mailValidate, selectValidate } from '../utils/validation.js'
import { roleDropdownValue, userRecomendValue, mostLikeDropdownValue, checkboxValue } from '../utils/formTemplate.js'
import { FormattedMessage, useIntl } from 'react-intl'


function MyForm() {
  const intl = useIntl();

  const onSubmit = ({ values }) => {
    console.log(values)
    alert('Form submited')
  };


  return (
    <div className="MyForm">

      <header>
        <h1 id="title" className="text-center"><FormattedMessage id='header.h1' defaultMessage='freeCodeCamp Survey Form' /></h1>
        <p id="description" className="description text-center">
          <FormattedMessage id='header.p' defaultMessage='Thank you for taking the time to help us improve the platform' />
        </p>
      </header>

      <Form id='survey-form' onSubmit={onSubmit}>

        <div className='form-group'>
          <Input
            name="name"
            id='name'
            type='text'
            className='form-control'
            label={intl.formatMessage({ id: "name.label" })}
            required={intl.formatMessage({ id: "required.message" })}
            placeholder={intl.formatMessage({ id: "name.placeholder" })}
            validate={nameValidate}
            validateOn="blur-submit"
          />
        </div>

        <div className='form-group'>
          <Input
            name="e-mail"
            id='e-mail'
            label={intl.formatMessage({ id: "email.label" })}
            type='e-mail'
            className='form-control'
            required={intl.formatMessage({ id: "required.message" })}
            placeholder={intl.formatMessage({ id: "email.placeholder" })}
            validate={mailValidate}
            validateOn="blur-submit"
          />
        </div>

        <div className='form-group'>
          <label
            id="number-label">
            <FormattedMessage id='age.label' defaultMessage='Age' />
            <span className="clue">{<FormattedMessage id='age.optional' defaultMessage='(optional)' />}
            </span>
          </label>
          <Input
            name="age"
            type='number'
            placeholder={intl.formatMessage({ id: "age.placeholder" })}
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <Select
            name="role"
            id="dropdown"
            className="form-control"
            required
            label={intl.formatMessage({ id: "role.select.label" })}
            defaultValue={'default'}
            validate={selectValidate}
            validateOn="blur-submit"
          >
            {roleDropdownValue.map(item =>
              <option
                key={uuidv4()}
                disabled={item.isDefault}
                value={item.translationKey}
              >
                {intl.formatMessage({ id: `role.option.${item.translationKey}` })}
              </option>)}
          </Select>
        </div>

        <div className='form-group radio-group-wrap'>
          <p><FormattedMessage id='radioGroup.p' defaultMessage='Would you recommend freeCodeCamp to a friend?' /></p>
          <RadioGroup name="user-recommend" defaultValue='definitely'>
            {userRecomendValue.map(item => <label key={uuidv4()} className='iner-label'>
              <Radio className='input-radio' value={item.value} label={<FormattedMessage id={`radioGroup.radio.${item.value}`} />} />
            </label>)}
          </RadioGroup>
        </div>

        <div className='form-group'>
          <Select
            name="mostLike"
            id="most-like"
            className="form-control"
            required
            label={intl.formatMessage({ id: "mostLike.select.label" })}
            defaultValue={'default'}
            validate={selectValidate}
            validateOn="blur-submit"
          >
            {mostLikeDropdownValue.map(item =>
              <option
                key={uuidv4()}
                defaultValue={item.isDefault}
                disabled={item.isDefault}
                value={item.translationKey}>
                {intl.formatMessage({ id: `mostLike.select.${item.translationKey}` })}
              </option>)}
          </Select>
        </div>

        <div className='form-group'>
          <p>
            <FormattedMessage id='checkbox.p' defaultMessage='What would you like to see improved?' />
            <span className="clue"><FormattedMessage id='checkbox.p.brackets' defaultMessage='(Check all that apply)' />
            </span>
          </p>
          {checkboxValue.map(item => <label key={uuidv4()} className='iner-label'>
            <Checkbox className="input-checkbox" name={item.name} label={<FormattedMessage id={`checkbox.input.${item.name}`} />} />
          </label>)}
        </div>

        <div className='form-group' >
          <TextArea
            name='comment'
            placeholder={intl.formatMessage({ id: "textArea.placeholder" })}
            className='input-textarea'
            id="comments"
            label={intl.formatMessage({ id: "textArea.label" })}
          />
        </div>

        <button
          type="submit"
          id="submit"
          className='submit-button'
        >
          <FormattedMessage id='submit.button' defaultMessage='Submit' />
        </button>
        
      </Form>
    </div>
  );
}

export default MyForm;