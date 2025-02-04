import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({initialMenuItems}) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO 2: maintaining current menu items as array state using initial menu items as a base
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  // TODO 3: adding new menu item to existing item array
  let addMenuItem = useCallback(() => { setMenuItems([newMenuItem, ...menuItems]); }, [newMenuItem])
  // filtering for a match to the inputted filter regardless of case
  let filteredMenuItems = menuItems.filter((items) => items.toLowerCase().includes(filter.toLowerCase()))

  // TODO 1 & 4: rendering list of items in ul element
  return (
    <div>
      <ul>
        {filteredMenuItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem /*using function to add new menu item on button click*/}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
