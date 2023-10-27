import PropTypes from "prop-types";

const ItemList = ({ itemList }) => {
  return (
    <div className="item-list-group">
      <p className="items">Items</p>
      <ol className="item-list">
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

ItemList.propTypes = { itemList: PropTypes.array.isRequired };

export default ItemList;
