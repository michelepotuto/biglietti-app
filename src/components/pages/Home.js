import { useState } from "react";
import Tickets from "../Tickets";
import tickets from "../../tickets.json";
import FilterForm from "../../logic/FilterForm";

const stringComparer = (s1, s2) => s1.toLowerCase().includes(s2.toLowerCase());

function Home() {
  const filterHandler = (filterCity, filterBand, filterCode) => {
    setMenuItems(
      tickets.filter(
        (m) =>
          (!filterCity || stringComparer(m.city, filterCity)) &&
          (!filterBand || stringComparer(m.band, filterBand)) &&
          (!filterCode || stringComparer(m.codeRep, filterCode))
      )
    );
  };
  const [menuItems, setMenuItems] = useState(tickets);

  const [showFilter, setShowFilter] = useState(true);
  const showFilterHandler = () => {
    setShowFilter((previousState) => !previousState);
  };

  return (
    <>
      {showFilter && <FilterForm onFilter={filterHandler} />}
      <div text="Menu"></div>
      <Tickets tickets={menuItems} />
    </>
  );
}
export default Home;
