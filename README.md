# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Heroku delpoy
[welbex-app.herokuapp.com](https://welbex-app.herokuapp.com/)

### `npm start`

Runs the app in the production mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Техническое задание
Нужно разработать таблицу в формате Single Page Application.

**Требования к таблице.**
1. Таблица должна содержать 4 колонки:
    1. Дата
    2. Название
    3. Количество
    4. Расстояние
2. База данных может быть PostgreSQL
3. Таблица должна иметь сортировку по всем полям кроме даты. Фильтрация должна быть в виде двух выпадающих списков и текстового поля:
    1. Выбор колонки, по которой будет фильтрация
    2. Выбор условия (равно, содержать, больше, меньше)
    3. Поле для ввода значения для фильтрации
4. Таблица должна содержать пагинацию

Вся таблица должна работать без перезагрузки страницы.

**Можно использовать:**
- Возможности node.js
- React/Axios
- css библиотеки

**Нельзя использовать:**
- Библиотеки с готовыми компонентами или плагины для React, которые
предоставляют готовый функционал, требуемый в задании
- Библиотеки и плагины для валидации
- Библиотеки и плагины для работы с БД, ORM
- CMS системы

**Критерии оценки:**
- Работоспособность согласно ТЗ
- Архитектура решения
- Удобство чтения кода и комментарии
- Удобство проверки
