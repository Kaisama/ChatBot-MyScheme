import { categories } from "./data";


const CategoryOptions = (props) => {
    const capitalizeWords=(str)=>{
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');    }
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => props.actionProvider.handleCategoryCheck(category)}
        >
          {capitalizeWords(category)}
        </button>
      ))}
    </div>
  );
};

export default CategoryOptions;