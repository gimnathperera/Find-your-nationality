import { useEffect } from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form';
import NationalityList from './NationalityList';
import { fetchAcessToken } from '../actions';

const DefaultLayout = (props) => {
  const { fetchAcessToken } = props;

  useEffect(() => {
    fetchAcessToken();
  }, [fetchAcessToken]);

  return (
    <section className='ftco-section'>
      <div className='container'>
        <Form />
        <NationalityList />
      </div>
    </section>
  );
};

export default connect(null, { fetchAcessToken })(DefaultLayout);
