-- Active: 1671550680831@@containers-us-west-166.railway.app@5826@railway@public
-- SELECT * FROM airlines WHERE name ILIKE '%air%'


-- DELETE FROM airlines WHERE id=3

-- SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id limit 3 offset 0;

SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id WHERE (name) ilike '%%' limit 100 offset 0