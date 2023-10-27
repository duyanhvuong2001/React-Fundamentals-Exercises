const DeleteLastItem = ({ onDeleteItem, noItemsFound }) => {
  const handleDeleteLastItem = (e) => {
    onDeleteItem();
  };
  return (
    <div className="delete-last-item">
      <button onClick={handleDeleteLastItem} disabled={noItemsFound}>
        Delete Last Item
      </button>
    </div>
  );
};

export default DeleteLastItem;
