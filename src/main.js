import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueKinesis from "vue-kinesis";
import { createI18n } from 'vue-i18n/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

import STORED_API_KEY from '../apikeys.txt'
const API_KEY = STORED_API_KEY


const messages = {
    en: {
        message: {
            navHome: 'Home',
            navContacts: 'Contacts',
            navPortfolio: 'Portfolio',
            name: 'Nick Zemlin',
            bioOverline:'Absolute best of the average',
            position: 'Front-end developer & graphic designer',
            bio: 'Somedays you stumble onto an app or website, and you think to yourself: " huh, this UI is horrible ". Fear not, you are not the only one. After almost 20 years of internet usage I have seen them all, the great, the good, the bad, the horrible, and I studied them. And after years of doing graphic design and recently getting into coding I started my mission to increase the amount of THE GREAT interfaces. So yeah, if you need a coherent User Interface with a concomitant graphic design solution, I might be the guy.',
            whatIWorkWith: 'What i work with',
            design: 'Design:',
            dev: 'Development:',
            portfolioEntries: ['Protochny Bar Menu', 'Marriott FIFA 2018', 'Studia', 'QR-menu', 'Partyhaus Condor'],
            formHeader: 'Best way to contact me is to use the form',
            formName: 'Name',
            contact: 'Contact',
            contactHelper: 'Email or Telegram',
            formError: 'Names usually dont include numbers',
            submit: 'Submit',
            contactsSnack: 'Info was submitted',
            contactsSnackError: 'Something went wrong',
            close: 'close'
        },
        article:{
            protochny1: 'Protochny Bar Menu',
            protochny2: 'What i had to accomplish:',
            protochny3: 'Creation of menu design and layout. Menu had to follow established design rules of the bar, while being easy to use.',
            protochny4: 'Layout design, graphical elements',
            protochny5: 'Layout',
            protochny6: 'I did minimalistic layout. With high contract navigaion. Lack of excess, all graphical elements reflect bar style. and hard to read information became easy, especially in menu articles regarding wine, beer, and their volumes',
            protochny7: 'Fonts',
            protochny8: 'Monstserrat became the main font of the establishment. That urbanistic typeface fits perfectly into the atmosphere of the bar. And as for complimentary font, i decided to go with Roboto Slab, which goes well with the big amounts of text you would see in bar menus',
            protochny9: 'Stickers',
            protochny10: 'To make menu navigation easier, I also came up with stickers. Which can help guests to find important menu positions, and also get their attention. Those stickers are easy to apply next to any position, and they are easy to remove. They also help to sell more positions from the Go List, while making overall layout a little more friendly',
            protochny11: 'Cocktail Menu',
            protochny12: 'I separated cocktails from the main menu, and decided to have them in "Panton-like" fan thingy. Element like that could be fun to fiddle with, especially for a tipsy guest, which can increase aplchohol sales. On top of color codes for different base ingredients make it easier to decided which drink to go for.',
            studia1: 'Studia',
            studia2: 'Whats that ?',
            studia3: 'Initially Studia started as a group of designers and developers',
            studia4: 'Blog',
            studia5: 'Our main activity was a blog, where we talked about typography, those are some posters that we made for out posts:',
            marriott1: 'Marriott menu',
            marriott2: 'Project was done jointly with with Studia team',
            marriott3: 'How the project came to be',
            marriott4: 'We started handling the project by setting up goals that we need to achieve with our design. Those goals were:',
            marriott5: 'Menu has to be simple and easy to read',
            marriott6: 'Menu had to positively impact amount of sales',
            marriott7: 'Cut the cost. we had to use free fonts, and optimize the output files for in-house printing',
            marriott8: 'While first 2 goals were standart for menu designs, the third one was hard to achieve. Main constrain was in-house printing. when you cant use printing houses, you have to deal with sourcing paper, and adjusting your files to look as good as possible, even when they are printed on a standart office printer',
            marriott9: 'Layout',
            marriott10: 'Layout of the page was spit into three horizontal blocks of content',
            marriott11: 'Header',
            marriott12: 'Body',
            marriott13: 'Footer',
            marriott14: 'Just like your standart webpage',
            marriott15: 'Graphic Design',
            marriott16: 'For graphic design we decided to use plus signs to shorten similar menu position into one, with the abbility to order different versions of a dish. Meal sets were outlined in a "Fun Bundle" to make it easy for a group of people to quickly order multiple dishes for the whole group',
            marriott17: 'And now for the colours. We had to stay away from using gradients, because we didn`t know how they are going to look off in-house printers.',
            marriott18: 'For the 3 colors we went with official FIFA2018 color scheme, but without the blue.',
            phc1: 'Partyhaus Condor',
            phc2: 'Page redisign and implementation in 15 hours',
            phc3: 'Redesign and Front-end',
            phc4: 'The interesting part of the project was not how the code works, and not how it is designed, but the time constraints. Over the course of 15 hours we implemented:',
            phc5: 'Brutalist deisgn',
            phc6: 'JSON file with all information regarding menu positions',
            phc7: 'Vue3 mostly responsive front-end',
            phc8: 'Keeping up with the times, we managed to make pandemic restriction status into a centerpiece of the main page',
            phc9: 'As for the menu, we went with a collapsible component, nested with cattegories, which in term contained menu items with all the information about them',
            phc10: 'Color wise we kept it simple, and got away with using just colors: Black, White, Mustard Yellow',
        }
    },
    ru: {
        message: {
            navHome: 'Главная',
            navContacts: 'Контакты',
            navPortfolio: 'Портфолио',
            name: 'Ник Землин',
            bioOverline:'Абсолютно лучший среди среднего',
            position: 'Фронт-енд разработчик, графический дизайнер',
            bio: 'Иногда вы натыкаетесь на приложение или веб-сайт и думаете про себя: "ха, этот пользовательский интерфейс ужасен". После почти 20 лет использования интернета я видел их все, отличные, хорошие, плохие, ужасные, и я изучал их. И после нескольких лет занятий графическим дизайном и недавнего увлечения фронт-эндом, я начал свою миссию по увеличению количества отличных  интерфейсов. И если вам нужен целостный пользовательский интерфейс с сопутствующим графическим дизайном, может быть, вам нужен именно я.',
            whatIWorkWith: 'С чем я работаю',
            design: 'Дизайн:',
            dev: 'Разработка:',
            portfolioEntries: ['Меню Проточный бар', 'FIFA2018 Марриотт', 'Studia', 'QR-меню', 'Partyhaus Condor'],
            formHeader: 'Лучший способ со мной связаться — заполнить форму',
            formName: 'Имя',
            contact: 'Связь',
            contactHelper: 'Эмейл или Телеграм',
            formError: 'Обычно в именнах нет цифр',
            submit: 'Отправить',
            contactsSnack: 'Информация отправлена',
            contactsSnackError: 'Что-то пошло не так',
            close: 'закрыть'
        },
        article:{
            protochny1: 'Проточный бар',
            protochny2: 'Задачи:',
            protochny3: 'Сверстать меню. Меню должно быть в стиле заведения, удобным и быстро доносить много информации.',
            protochny4: 'Вёрстка и графические элементы',
            protochny5: 'Вёрстка',
            protochny6: 'Я сделал минималистичную вёрстку. Контрастная навигация, отсутствие лишнего, графические элементы, которые отражают стиль заведения. Сделал простой сложную информацию про вино, пиво и их объёмы.',
            protochny7: 'Шрифты',
            protochny8: 'Шрифтом Заведения и Навигации, стал Montserrat. Этот урбанистический шрифт отлично вписывается и подчеркивает атмосферу бара. Комплементарным шрифтом стал Roboto slab, сочетается с Monserrat и идеально подходит для больших объемов текста. Используется в меню для наименований блюд и напитков.',
            protochny9: 'Стикеры',
            protochny10: 'Я придумал набор упращающих навигацию в меню. Стикеры помогают выделить важное, развеселить и увлечь гостя. Стикеры легко клеятся напротив любой позиции и легко склеиваются, не оставляя следов. Стикеры помогают более активно продвигать Go List и делают верстку более дружелюбной.',
            protochny11: 'Коктейльная карта',
            protochny12: 'Я перенёс коктейльную карту в пантон. Игровой элемент в виде пантона стимулирует гостей покупать больше коктейлей, развлекает их. Графика и цвета помогают определится с ингредиентами и основным видом алкоголя.',
            studia1: 'Studia',
            studia2: 'Что это ?',
            studia3: 'Изначально мы начали этот проект как сообщество дизайнеров и разработчиков',
            studia4: 'Блог',
            studia5: 'Нашей основной деятельностью был блог, где мы говорили о типографике. Вот некоторые плакаты, которые мы сделали для своих постов:',
            marriott1: 'Marriott меню',
            marriott2: 'Проект выполнен совместно с коллективом Studia',
            marriott3: 'История проекта',
            marriott4: 'Мы начали работу с определения задач, с которыми должен был справиться дизайн. Задачи были следующие:',
            marriott5: 'Сделать меню понятным и простым в использовании',
            marriott6: 'Увеличить количество продаж сезонного меню',
            marriott7: 'Сэкономить бюджет — использовать бесплатные шрифты, оптимизировать печать под in-house',
            marriott8: 'Первый и второй пункт являются стандартным для большинства проектов, но третий пункт создал наибольшие количество проблем.',
            marriott9: 'Вёрстка',
            marriott10: 'Для вёртски мы решили разделить страницу меню на три горизонтальных блока.',
            marriott11: 'Заголовок',
            marriott12: 'Позиции',
            marriott13: 'Футтер',
            marriott14: 'Почти как на стандатной веб-странице',
            marriott15: 'Графический дизайн',
            marriott16: 'В графическом дизайне мы решили использовать плюс, чтобы сократить похожие позиции меню но сохранить возможность заказать разные варианты блюд. Наборы блюд были оформлены в "Fun Bundle", чтобы было возможно быстро заказать несколько блюд для всей группы',
            marriott17: 'Так же мы не могли использовать градиенты. Мы не знали как они будут печататься на офисных принтерах',
            marriott18: 'Мы использовали официальные цвета FIFA2018, за исключение синего',
        }
    },
    // de: {
    //     message: {
    //         navHome: 'non comprendo',
    //         navContacts: 'non comprendo',
    //         navPortfolio: 'non comprendo',
    //         name: 'non comprendo',
    //         bioOverline:'non comprendo',
    //         position: 'non comprendo',
    //         bio: 'non comprendo',
    //         whatIWorkWith: 'non comprendo',
    //         design: 'non comprendo:',
    //         dev: 'non comprendo:',
    //         portfolioEntries: ['non comprendo', 'non comprendo', 'non comprendo', 'non comprendo', 'non comprendo'],
    //         formHeader: 'non comprendo',
    //         formName: 'non comprendo',
    //         contact: 'non comprendo',
    //         contactHelper: 'non comprendo',
    //         submit: 'non comprendo:',
    //         contactsSnack: 'non comprendo'
    //     }
    // }
}



const i18n = createI18n({
    locale: 'en', 
    fallbackLocale: 'en',
    messages,
    })


createApp(App).use(router).provide('API_KEY', API_KEY).use(i18n).use(VueAxios, axios).use(VueKinesis).mount('#app')

