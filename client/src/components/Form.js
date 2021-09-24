import { useState } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { fetchNationlities } from '../actions';

const Form = (props) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { fetchNationlities } = props;

  const onSubmit = async (event) => {
    try {
      if (!name) {
        return setError('Name is required');
      } else {
        event.preventDefault();
        setError('');
        setLoading(true);

        await fetchNationlities(name);
        setLoading(false);
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 col-lg-5'>
        <div className='login-wrap p-4 p-md-5'>
          <div className='icon d-flex align-items-center justify-content-center'>
            <span className='fa fa-flag'></span>
          </div>
          <h3 className='text-center mb-4'>Find Your Nationality </h3>
          <form className='login-form'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control rounded-left'
                placeholder='Enter your name'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            {error ? <p className='text-danger'>{error}</p> : ''}
            <div className='form-group'>
              <button
                type='button'
                className='btn btn-primary rounded submit p-3 px-5 hvr-shrink'
                onClick={onSubmit}
                style={{ marginLeft: '80px' }}
              >
                {!loading ? (
                  <>Get Started</>
                ) : (
                  <>
                    <Spinner
                      as='span'
                      animation='border'
                      size='sm'
                      role='status'
                      aria-hidden='true'
                    />
                    Fetching
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { fetchNationlities })(Form);
