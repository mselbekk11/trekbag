import { useMemo, useState } from "react";
import EmptyView from "./EmptyView"
import Select from "react-select"
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  }
]


export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState("default");



  // useMemo is used to memorize the sortedItems array so that it is not recalculated on every render and only when the items or sortBy changes (Performance optimization)
  const sortedItems = useMemo(() => [...items].sort((a, b) => {
    if (sortBy === 'packed') {
      return b.packed - a.packed;
    }

    if (sortBy === 'unpacked') {
      return a.packed - b.packed;
    }

    return;
  }), [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

    {
      items.length > 0 ? 
      <section className="sorting">
        <Select onChange={option => setSortBy(option.value)} defaultValue={sortingOptions[0]} options={sortingOptions} />
      </section> : null
    }

      {sortedItems.map((item) => (
        <Item key={item.id} item={item} onDeleteItem={deleteItem} onToggleItem={toggleItem}/>
      ))}
    </ul>
  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
      <input checked={item.packed} type="checkbox" onClick={() => onToggleItem(item.id)}/>
        {item.name}
        </label>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
  )
}