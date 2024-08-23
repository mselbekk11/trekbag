import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";


export default function ButtonGroup() {

  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">Mark all as complete</Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">Mark all as incomplete</Button>
      <Button onClick={resetToInitial} buttonType="secondary">reset to initial</Button>
      <Button onClick={removeAllItems} buttonType="secondary">remove all items</Button>
      {/* {secondaryButtons.map((button) => (
        <Button key={button.text + button.onClick.toString()} onClick={button.onClick} buttonType="secondary">{button.text}</Button>
      ))} */}
    </section>
  )
}
