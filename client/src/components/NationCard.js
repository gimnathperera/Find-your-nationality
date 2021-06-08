const NationCard = ({ country }) => {
  return (
    <div className='login-wrap nation-card hvr-forward'>
      <div className='row'>
        <div className='col-sm'>
          <div className='card-image'>
            <img src={country?.flag} alt='flag' className='card-image' />
          </div>
        </div>
        <div className='col-sm card-text'>
          <p className='crd-text'>{country?.name}</p>
        </div>
        <div className='col-sm card-text'>
          <p className='accuracy'>{country?.probability.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default NationCard;
