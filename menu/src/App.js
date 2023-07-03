import React, { useState } from "react";
import Menu from './All';
import data from './Data';
import Category from './category'

const allCategories = ['all', ...new Set(data.map((item) => item.category))];
console.log(allCategories);
function App () {
  const [menuItem, setMenuItem] = useState(data);
  const [categories, setcategories] = useState(allCategories);
  const filterItem = (category) => {
    if (category === 'all'){
      setMenuItem(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItem(newItems);
  }
  return (
    <main className="App">
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Category filterItem={filterItem} categories={categories} />
        <Menu items={menuItem}/> 
      </section>
    </main>
  );
}

export default App; 