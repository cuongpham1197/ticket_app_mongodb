import TicketForm from "@/components/TicketForm";
import React from "react";

const TicketPage = ({ data }) => {
  console.log("1 ticket data: ", data);
  return <TicketForm ticket={data} />;
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  if (id === "new") {
    return { props: { data: { _id: "new" } } };
  }
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`);
  const data = await res.json();
  console.log("get 1 ticket data: ", data);
  return {
    props: { data: data.foundTicket },
  };
}

export default TicketPage;
