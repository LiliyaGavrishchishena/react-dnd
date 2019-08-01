In order to strt the project you should:
1. git clone https://
2. yarn start

Web App Project
Общие требования к проекту
В рамках финального проекта нужно самостоятельно написать приложение, свое или предложенное ниже, с использованием React/Redux. Это должно быть SPA, т.е. все страницы должны быть реализованы с помощью React Router-a.

Приложение должно иметь как минимум 2 скрипта в package.json: start для запуска дев окружения (webpack-dev-server) и прод сборку с минимизацией файлов - build скрипт. Можно использовать create-react-app, но написание своего webpack конфига будет плюсом.

Сдать нужно ссылку на репозиторий, в которой финальная рабочая версия будет в ветке master. Если есть ньюансы запуска или сборки, их нужно описать в README. Если README не будет или будет пустым, проверяющая команда будет делать только npm install и npm run build / npm start

При реализации своего проекта по сложности стоит ориентироваться на предложенный проект и подбирать функционал соответственно.

Конструктор форм
Нужно реализовать конструктор форм с последующей возможностью их заполнения. Приложению будут нужны следующие странички

Список всех форм, с кол-вом полей внутри и кол-вом людей заполнивших эту форму. Здесь можно
Создать новую форму (отдельная страничка - Конструктор)
Отредактировать существующую форму, но только если ее еще никто не заполнял (отдельная страничка - Конструктор)
Просмотреть все заполнения формы (отдельная страничка)
Конструктор форм. Тут можно создать новую форму или отредактировать существующую (возможно это будут 2 разных странички). На фронте должно быть ограничение в 15 полей на форму. Пользователь должен иметь возможность в любом порядке добавлять поля в форму, удалять их и перемещать местами. В конце по нажатию на кнопку создания/сохранения нужно отправлять изменения на сервер.
Просмотр заполнений форм. Тут в виде таблички нужно отображать список всех тех, кто заполнил форму. Учесть, что заполнений может может быть много и их придется подгружать динамически.
Страница для заполнения формы. Здесь нужно отрисовать минимальный интерфейс, без возможности попасть в остальные части приложения (как если бы мы хотели отправить кому-то сылку для заполнения). В ссылке должен присутствовать айди формы, по которому мы и сможем подгрузить и отрисовать поля этой формы. После заполнения нужно показать модалку, о том, что данные успешно сохранены
Примеры запросов и ответов можно посмотреть в папке api. Все эти запросы следует делать на forms-app.brutgroot.com/[username], где username - ваш уникальный логин (например в телеграмме). Например, для получения списка всех форм (/forms/list) юзеру shpax стоит делать запрос на http://forms-app.brutgroot.com/shpax/forms/list. Также, в репе есть Postman-коллекция этих запросов

Чтобы не делать всю верстку самостоятельно, предлагаю использовать material-ui