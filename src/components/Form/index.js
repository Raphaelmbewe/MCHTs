import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './form.css';
import { Row, Container} from 'react-bootstrap';

export const Form = () => {

    return (
      <>
        <Container>
          <div className='p-2 pt-md-4 pb-md-3 mx-auto text-center'>
            <h1 className='display-4'>Your details</h1>
          </div>

          <Row>
            <div className='col-8 offset-2'>
              <form name="contact" method="POST" data-netlify="true">
                <Row>
                  <div className='col-md-6 mb-3 form-group'>
                    <label htmlFor="myInput" > Name</label>
                    <input
                      type='text'
                      class='form-control'
                      id='name'
                      placeholder='Your names'
                    />
                  </div>

                  <div className='col-md-6 mb-3 form-group'>
                    <label htmlFor="myInput"> Email</label>
                    <div className='input-group'>
                      <input
                        type='text'
                        class='form-control'
                        id='email'
                        placeholder='@'
                      />
                    </div>
                  </div>
                </Row>
                <div className='mb-3 form-group'>
                  <div className='input-group'>
                    <input
                      type='text'
                      class='form-control'
                      id='textarea'
                      placeholder='How did you hear about us?'
                    />
                  </div>
                </div>

                <div className='mb-3 form-group'>
                  <div className='input-group'>
                    <input
                      type='text'
                      class='form-control'
                      id='textarea'
                      placeholder='How can we help you?'
                    />
                  </div>
                </div>

                <div className='mb-3 form-group'>
                  <div className='input-group'>
                    <textarea
                      type='text'
                      class='form-control'
                      id='textarea'
                      placeholder='Type your message here'
                    />
                  </div>
                </div>
                <button
                  class='btn btn-success btn-lg btn-block mb-3 button-color'
                  type='submit'
                >
                  Send
                </button>
              </form>
            </div>
          </Row>
        </Container>
      </>
    );
}