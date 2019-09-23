DROP TABLE IF EXISTS nodes;
CREATE TABLE nodes (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(30) NOT NULL UNIQUE,
    ip varchar(20) NOT NULL,
    port integer NOT NULL,
    parent_id bigint REFERENCES nodes (id) ON DELETE CASCADE,
    UNIQUE (ip, port)
);

INSERT INTO nodes (name, ip, port, parent_id) VALUES
  ('What is Love?', '127.0.0.1', 1, null),
  ('Baby dont hurt me', '127.0.0.1', 2, null),
  ('Dont hurt me', '127.0.0.1', 3, null),
  ('No more', '127.0.0.1', 4, null),
  ('Yeah!', '127.0.0.1', 5, null);
