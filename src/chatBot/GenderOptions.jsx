import { genders } from './data';

const GenderOptions = (props) => {
  return (
    <div>
      {genders.map((gender) => (
        <button
          key={gender}
          onClick={() => props.actionProvider.handleGenderCheck(gender)}
        >
          {gender.charAt(0).toUpperCase() + gender.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default GenderOptions;