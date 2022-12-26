-- Active: 1671686295394@@containers-us-west-166.railway.app@5826@railway@public
<<<<<<< HEAD
SELECT stock_ticket.*,  airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id;

SELECT ticket.*,  ticket_status.info AS info, ticket_status.detail AS detail FROM ticket INNER JOIN ticket_status ON ticket.status = ticket_status.info;
=======
SELECT ticket.*, ticket_status.info, ticket_status.detail, stock_ticket.origin, stock_ticket.destination FROM ticket INNER JOIN ticket_status ON ticket.status=ticket_status.info INNER JOIN stock_ticket ON ticket.stock_id=stock_ticket.id;
>>>>>>> dev-ridhwan
