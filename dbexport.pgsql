--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: row; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."row" (
    id integer NOT NULL,
    date date,
    name character varying(255),
    amount integer,
    distance integer
);


ALTER TABLE public."row" OWNER TO postgres;

--
-- Name: row_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.row_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.row_id_seq OWNER TO postgres;

--
-- Name: row_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.row_id_seq OWNED BY public."row".id;


--
-- Name: row id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."row" ALTER COLUMN id SET DEFAULT nextval('public.row_id_seq'::regclass);


--
-- Data for Name: row; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."row" (id, date, name, amount, distance) FROM stdin;
1	2021-12-01	Детям — леденцы, диссиде — рицин	123	333
3	2021-12-02	Цветет гиацинт, идёт геноцид	124	315
4	2021-12-02	Пир империи времени упадка	10	100
5	2021-12-03	Гурманы падки на гуманитарку	10	100
6	2021-12-04	Скалистая бухта, в море кораблик	15	110
7	2021-12-06	Тема экскурсий — Горький на Капри	20	120
8	2021-12-06	Коллекция амфор великолепна	25	130
9	2021-12-09	Проблемы первого мира: депрессии, терзания	35	140
10	2021-12-10	Медленный интернет, РПП и стресс от экзаменов	45	150
11	2021-12-11	В десятитысячелетнем склепе	55	160
12	2021-12-11	Спит и видит сны Гебекли Тепе	55	160
13	2021-12-12	Меркнет небо	50	170
14	2021-12-13	Одинокий путник топает по полю	60	200
15	2021-12-15	Ветер гонит с тополя пух, и пророчит Пополь Вух	70	210
16	2021-12-16	Порой сказать непросто	80	220
17	2021-12-18	Где уродство, где красота	90	230
18	2021-12-19	Это шпионский детектив, вербовка, Кэт, Борман, эй	100	240
19	2021-12-20	Долгие гудки — секрет продан, вверх ворот	110	250
20	2021-12-20	Оглядись: кругом враги, это крот, вон сексот	120	260
21	2021-12-22	Мой позывной запросит МИД: Агент Борат, 7:40	130	265
22	2021-12-23	Все хором: иностранный агент	140	275
23	2021-12-23	Миссия невыполнима	150	285
24	2021-12-24	Лыбится портрет — это зловещая долина	160	290
25	2021-12-24	Трещина в картине, залатанные скрижали	260	320
26	2021-12-26	Ведь балом правит агент,	280	330
27	2021-12-27	но неясно, какой державы, явно	290	340
\.


--
-- Name: row_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.row_id_seq', 27, true);


--
-- Name: row row_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."row"
    ADD CONSTRAINT row_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

