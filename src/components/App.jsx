import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"

import { useState } from 'react';
import { intialItems } from '../lib/constants'


function App() {
  
  const [items, setItems] = useState(intialItems);

  const handleAddItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  }

  return (
    <>
<BackgroundHeading />
<main>
  <Header />
  <ItemList items={items} />
  <Sidebar handleAddItem={handleAddItem}/>
</main>
<Footer />
    </>
  )
}

export default App
