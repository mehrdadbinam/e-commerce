import CategoryItem from "../category-item/CategoryItem.component";
import './directory.stylese.scss';

const Directory = ({catagories}) => {
  return (
    <div className="directory-container">
      {catagories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      ;
    </div>
  );
};

export default Directory;
