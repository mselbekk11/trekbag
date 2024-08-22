import { useItemsContext } from "../lib/hooks";


export default function Counter() {

  const { numberOfItemsPacked, totalNumberOfItems} = useItemsContext()

  return (
    <p><b>{numberOfItemsPacked}</b> / {totalNumberOfItems} itemsssss packed</p>
  )
}
