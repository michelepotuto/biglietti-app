import TicketsItem from "./TicketsItem";

const Tickets = (props) => {
  return (
    <>
      {props.tickets.map((ticketsItem) => (
        <TicketsItem
          key={ticketsItem.codeRep}
          band={ticketsItem.band}
          city={ticketsItem.city}
          placeName={ticketsItem.placeName}
          dataConcert={ticketsItem.dataConcert}
          codeRep={ticketsItem.codeRep}
        />
      ))}
    </>
  );
};

export default Tickets;
