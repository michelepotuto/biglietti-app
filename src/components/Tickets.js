import TicketsItem from "./TicketsItem";

const Tickets = (props) => {
  return (
    <>
      {props.tickets.map((ticketsItem) => (
        <TicketsItem
          band={ticketsItem.band}
          city={ticketsItem.city}
          placeName={ticketsItem.placeName}
          dataConcert={ticketsItem.dataConcert}
          key={ticketsItem.codeRep}
        />
      ))}
    </>
  );
};

export default Tickets;
