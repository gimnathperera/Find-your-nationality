import { connect } from 'react-redux';
import NationCard from '../components/NationCard';

const NationalityList = ({ countries }) => {
  const renderCountries = () => {
    return (
      countries &&
      countries.map((country, index) => {
        return <NationCard country={country} key={index} />;
      })
    );
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 col-lg-5'>
        <div className='nation-list'>{renderCountries()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  countries: Object.values(state.national)
});
export default connect(mapStateToProps)(NationalityList);
