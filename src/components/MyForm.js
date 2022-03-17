import './MyForm.css';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Select, Checkbox, TextArea, RadioGroup, Radio } from 'informed';
import { nameValidate, mailValidate, selectValidate } from '../utils/validation.js'
import { roleDropdownValue, userRecomendValue, mostLikeDropdownValue, checkboxValue } from '../utils/formTemplate.js'


function MyForm() {

  const onSubmit = ({ values }) => {
    console.log(values)
    alert('Form submited')
  };

  return (
    <div className="MyForm">

      <header>
        <h1 id="title" className="text-center">freeCodeCamp Survey Form</h1>
        <p id="description" className="description text-center">
          Thank you for taking the time to help us improve the platform
        </p>
      </header>

      <Form id='survey-form' onSubmit={onSubmit}>

        <div className='form-group'>
          <Input
            name="name"
            type='text'
            className='form-control'
            label="Name"
            required
            placeholder="Enter your name"
            validate={nameValidate}
            validateOn="blur-submit"
          />
        </div>

        <div className='form-group'>
          <Input
            name="e-mail"
            label="E-mail"
            type='e-mail'
            className='form-control'
            required
            placeholder="Enter your E-mail"
            validate={mailValidate}
            validateOn="blur-submit"
          />
        </div>

        <div className='form-group'>
          <label id="number-label">Age<span className="clue">(optional)</span></label>
          <Input
            name="age"
            type='number'
            placeholder='Age'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <Select
            name="role"
            id="dropdown"
            className="form-control"
            required
            label="Which option best describes your current role?"
            defaultValue={'notSet'}
            validate={selectValidate}
            validateOn="blur-submit"
          >
            <option disabled value="notSet" >Select current role</option>
            {roleDropdownValue.map(item => <option key={uuidv4()} value={item}>{item}</option>)}
          </Select>
        </div>

        <div className='form-group radio-group-wrap'>
          <p>Would you recommend freeCodeCamp to a friend?</p>
          <RadioGroup name="user-recommend" defaultValue='definitely'>
            {userRecomendValue.map(item => <label key={uuidv4()} className='iner-label'>
              <Radio className='input-radio' value={item.value} label={item.label} />
            </label>)}
          </RadioGroup>
        </div>

        <div className='form-group'>
          <Select
            name="mostLike"
            id="most-like"
            className="form-control"
            required
            label="What is your favorite feature of freeCodeCamp?"
            defaultValue={'notSet'}
            validate={selectValidate}
            validateOn="blur-submit"
          >
            <option disabled value="notSet" >Select an option</option>
            {mostLikeDropdownValue.map(item => <option key={uuidv4()} value={item}>{item}</option>)}
          </Select>
        </div>

        <div className='form-group'>
          <p>What would you like to see improved?<span className="clue">(Check all that apply)</span></p>
          {checkboxValue.map(item => <label key={uuidv4()} className='iner-label'>
            <Checkbox className="input-checkbox" name={item.name} label={item.label} />
          </label>)}
        </div>

        <div className='form-group' >
          <TextArea
            name='comment'
            placeholder="Enter your comment here..."
            className='input-textarea'
            id="comments"
            label='Any comments or suggestions?'
          />
        </div>

        <button type="submit" id="submit" className='submit-button' >Submit</button>
      </Form>
    </div>
  );
}

export default MyForm;