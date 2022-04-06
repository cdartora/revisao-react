import { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends Component {
  render() {
    const {
      image,
      moreInfo,
      averageWeight,
      name,
      type,
    } = this.props.pokemon;

    const { value, measurementUnit } = averageWeight;

    return (
      <div className="pokemon-container" >

        <h4>{name}</h4>

        <p>{type}</p>

        <p>{`AverageWeight: ${value} ${measurementUnit}`}</p>

        <img src={image} alt={`${name} sprite`} />

        <a href={moreInfo} target="_blank" rel="noreferrer">
          <button type='button' className='button'>
            Leia mais
          </button>
        </a>

      </div>
    );
  }
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({

    moreInfo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({

      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,

    }).isRequired,

  }).isRequired,
};

export default Pokemon;
