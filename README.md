Тестовое задание Biocad

В папке client содержиться клиентская часть приложения на NextJS
В папке server находится api с данными на NestJS

Для работы приложения должны быть запущены и клиент и сервер.

В режиме разработки

yarn dev

В режиме production:

yarn build
yarn start

Также, перед тем как запустить сервер нужно установить базу данных Mongo https://www.mongodb.com и в папке server/seed засеять базу данных командой:

node seed.js
