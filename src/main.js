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
            navHome: '??????????????',
            navContacts: '????????????????',
            navPortfolio: '??????????????????',
            name: '?????? ????????????',
            bioOverline:'?????????????????? ???????????? ?????????? ????????????????',
            position: '??????????-?????? ??????????????????????, ?????????????????????? ????????????????',
            bio: '???????????? ???? ?????????????????????? ???? ???????????????????? ?????? ??????-???????? ?? ?????????????? ?????? ????????: "????, ???????? ???????????????????????????????? ?????????????????? ????????????". ?????????? ?????????? 20 ?????? ?????????????????????????? ?????????????????? ?? ?????????? ???? ??????, ????????????????, ??????????????, ????????????, ??????????????, ?? ?? ???????????? ????. ?? ?????????? ???????????????????? ?????? ?????????????? ?????????????????????? ???????????????? ?? ?????????????????? ?????????????????? ??????????-??????????, ?? ?????????? ???????? ???????????? ???? ???????????????????? ???????????????????? ????????????????  ??????????????????????. ?? ???????? ?????? ?????????? ?????????????????? ???????????????????????????????? ?????????????????? ?? ?????????????????????????? ?????????????????????? ????????????????, ?????????? ????????, ?????? ?????????? ???????????? ??.',
            whatIWorkWith: '?? ?????? ?? ??????????????',
            design: '????????????:',
            dev: '????????????????????:',
            portfolioEntries: ['???????? ?????????????????? ??????', 'FIFA2018 ????????????????', 'Studia', 'QR-????????', 'Partyhaus Condor'],
            formHeader: '???????????? ???????????? ???? ???????? ?????????????????? ??? ?????????????????? ??????????',
            formName: '??????',
            contact: '??????????',
            contactHelper: '?????????? ?????? ????????????????',
            formError: '???????????? ?? ?????????????? ?????? ????????',
            submit: '??????????????????',
            contactsSnack: '???????????????????? ????????????????????',
            contactsSnackError: '??????-???? ?????????? ???? ??????',
            close: '??????????????'
        },
        article:{
            protochny1: '?????????????????? ??????',
            protochny2: '????????????:',
            protochny3: '?????????????????? ????????. ???????? ???????????? ???????? ?? ?????????? ??????????????????, ?????????????? ?? ???????????? ???????????????? ?????????? ????????????????????.',
            protochny4: '?????????????? ?? ?????????????????????? ????????????????',
            protochny5: '??????????????',
            protochny6: '?? ???????????? ?????????????????????????????? ??????????????. ?????????????????????? ??????????????????, ???????????????????? ??????????????, ?????????????????????? ????????????????, ?????????????? ???????????????? ?????????? ??????????????????. ???????????? ?????????????? ?????????????? ???????????????????? ?????? ????????, ???????? ?? ???? ????????????.',
            protochny7: '????????????',
            protochny8: '?????????????? ?????????????????? ?? ??????????????????, ???????? Montserrat. ???????? ?????????????????????????????? ?????????? ?????????????? ?????????????????????? ?? ???????????????????????? ?????????????????? ????????. ?????????????????????????????? ?????????????? ???????? Roboto slab, ???????????????????? ?? Monserrat ?? ???????????????? ???????????????? ?????? ?????????????? ?????????????? ????????????. ???????????????????????? ?? ???????? ?????? ???????????????????????? ???????? ?? ????????????????.',
            protochny9: '??????????????',
            protochny10: '?? ???????????????? ?????????? ???????????????????? ?????????????????? ?? ????????. ?????????????? ???????????????? ???????????????? ????????????, ?????????????????????? ?? ???????????? ??????????. ?????????????? ?????????? ?????????????? ???????????????? ?????????? ?????????????? ?? ?????????? ??????????????????????, ???? ???????????????? ????????????. ?????????????? ???????????????? ?????????? ?????????????? ???????????????????? Go List ?? ???????????? ?????????????? ?????????? ??????????????????????.',
            protochny11: '?????????????????????? ??????????',
            protochny12: '?? ?????????????? ?????????????????????? ?????????? ?? ????????????. ?????????????? ?????????????? ?? ???????? ?????????????? ?????????????????????? ???????????? ???????????????? ???????????? ??????????????????, ???????????????????? ????. ?????????????? ?? ?????????? ???????????????? ?????????????????????? ?? ?????????????????????????? ?? ???????????????? ?????????? ????????????????.',
            studia1: 'Studia',
            studia2: '?????? ?????? ?',
            studia3: '???????????????????? ???? ???????????? ???????? ???????????? ?????? ???????????????????? ???????????????????? ?? ??????????????????????????',
            studia4: '????????',
            studia5: '?????????? ???????????????? ?????????????????????????? ?????? ????????, ?????? ???? ???????????????? ?? ??????????????????????. ?????? ?????????????????? ??????????????, ?????????????? ???? ?????????????? ?????? ?????????? ????????????:',
            marriott1: 'Marriott ????????',
            marriott2: '???????????? ???????????????? ?????????????????? ?? ?????????????????????? Studia',
            marriott3: '?????????????? ??????????????',
            marriott4: '???? ???????????? ???????????? ?? ?????????????????????? ??????????, ?? ???????????????? ???????????? ?????? ???????????????????? ????????????. ???????????? ???????? ??????????????????:',
            marriott5: '?????????????? ???????? ???????????????? ?? ?????????????? ?? ??????????????????????????',
            marriott6: '?????????????????? ???????????????????? ???????????? ?????????????????? ????????',
            marriott7: '???????????????????? ???????????? ??? ???????????????????????? ???????????????????? ????????????, ???????????????????????????? ???????????? ?????? in-house',
            marriott8: '???????????? ?? ???????????? ?????????? ???????????????? ?????????????????????? ?????? ?????????????????????? ????????????????, ???? ???????????? ?????????? ???????????? ???????????????????? ???????????????????? ??????????????.',
            marriott9: '??????????????',
            marriott10: '?????? ?????????????? ???? ???????????? ?????????????????? ???????????????? ???????? ???? ?????? ???????????????????????????? ??????????.',
            marriott11: '??????????????????',
            marriott12: '??????????????',
            marriott13: '????????????',
            marriott14: '?????????? ?????? ???? ???????????????????? ??????-????????????????',
            marriott15: '?????????????????????? ????????????',
            marriott16: '?? ?????????????????????? ?????????????? ???? ???????????? ???????????????????????? ????????, ?????????? ?????????????????? ?????????????? ?????????????? ???????? ???? ?????????????????? ?????????????????????? ???????????????? ???????????? ???????????????? ????????. ???????????? ???????? ???????? ?????????????????? ?? "Fun Bundle", ?????????? ???????? ???????????????? ???????????? ???????????????? ?????????????????? ???????? ?????? ???????? ????????????',
            marriott17: '?????? ???? ???? ???? ?????????? ???????????????????????? ??????????????????. ???? ???? ?????????? ?????? ?????? ?????????? ???????????????????? ???? ?????????????? ??????????????????',
            marriott18: '???? ???????????????????????? ?????????????????????? ?????????? FIFA2018, ???? ???????????????????? ????????????',
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

