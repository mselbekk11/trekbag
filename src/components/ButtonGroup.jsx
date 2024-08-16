import Button from "./Button";

export default function ButtonGroup({handleRemoveAllItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsIncomplete}) {

  // const secondaryButtons = [
  //   { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
  //   { text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
  //   { text: "reset to initial", onClick: handleResetToInitial },
  //   { text: "remove all items", onClick: handleRemoveAllItems },
  // ]

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
