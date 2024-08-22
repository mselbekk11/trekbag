import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {

  const { handleMarkAllAsComplete, handleMarkAllAsIncomplete, handleResetToInitial, handleRemoveAllItems } = useItemsContext()
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">Mark all as complete</Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">Mark all as incomplete</Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">reset to initial</Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">remove all items</Button>
      {/* {secondaryButtons.map((button) => (
        <Button key={button.text + button.onClick.toString()} onClick={button.onClick} buttonType="secondary">{button.text}</Button>
      ))} */}
    </section>
  )
}
