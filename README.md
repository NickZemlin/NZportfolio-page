# Nick Zemlin personal page
## Built with vue3
Designed with desktop first, which i still consider a mistake on my part.
Design was done only using adobe Illustrator, and as someone that worked as a graphic designer, I, to this day consider AI to be supperior to Figma.
___
### Notable parts of the project:
* Infromation submited via contact form gets sent to Express.js server, that in turn fires a telegram bot that sends me a notification :vibration_mode:. [Express.js server repo](https://github.com/NickZemlin/express-api-telegram-integration/tree/master).
* CSS. There are a lot of 3dimensional transfroms goin on, most of them support hovers to create elevation effect. Overall that project is mostly a CSS flex :muscle:.
* Usage of V-bind() inside SCSS styles. I don't know why in the [vue3 docs](https://vuejs.org/v2/guide/class-and-style.html) its not mentioned, that you can do that you can do that (~~Probably because you shouldn't do that~~). On the [portfolio](https://www.nickzemlin.com/portfolio) im using the following css to reposition a selector element that moves to the portfolio entry that is being hovered :fire:.
```
<script>
portfolioSelector(el){
	var element = document.getElementById(el)
	this.selectorOffset = element.offsetTop + "px"
	this.selectorWidth = element.offsetWith + "px"
	this.selectorHeight = element.clientHeight + "px"
}
</script>
	
<style>
	position: absolute;
	top: v-bind(selectorOffset);
	height: v-bind(selectorHeight);
	width: v-bind(selectorWidth);
	margin-left: v-bind(selectorLeft);
</style>
```
### Things i want to add in the future:
1. Move everything from vue CLI to Vite.
2. Move from Options API to [Script Setup](https://v3.vuejs.org/api/sfc-script-setup.html).
3. Optional Input field into a contact form for additional information.
___
### Dependencies:
* [axios](https://github.com/imcvampire/vue-axios)
* [vue-gooey-cursor](https://github.com/thetarnav/vue-gooey-cursor)
* [vue-i18n](https://github.com/kazupon/vue-i18n)
* [vue-kinesis](https://github.com/Aminerman/vue-kinesis)
* [vue-router](https://github.com/vuejs/vue-router)
___
### Pages:
1. :classical_building: [Home](https://www.nickzemlin.com/)
2. :iphone: [Contacts](https://www.nickzemlin.com/contacts) 
3. :books: [Portfolio](https://www.nickzemlin.com/portfolio)
4. :warning: [404](https://www.nickzemlin.com/404)
___ 

## Project setup
```
npm install       — get dependencies
npm run serve     — Run locally
npm run build     — Build for deployment
```

