# discord-whook.js

A simple discord webhook wrapper.

#### Installation:
*Using NPM*

`npm i github:Sworder71/discord-whook.js`

<hr>

#### Features:
>- Send a simple message
>- Send an Embed with a simple Embed builder
>- Custom your webhook name/avatar

#### Examples:

- Send a simple message 
```js
const { Webhook } = require("discord-whook.js");
const hook = new Webhook("webhookID", "webhookToken");

hook.send("content", "username", "avatarURL");
```

- Send an Embed with a simple Embed builder
>*Do not use RichEmbed! It's an Embed builder only for webhook!*<br>
>__NOTE__: If you want disable custom username/avatar/content replace **strings** to **null**
```js
const { Webhook, EmbedBuilder } = require("discord-whook.js");
const hook = new Webhook("webhookID", "webhookToken");

let Builder = new EmbedBuilder()
.setTitle("Title")
.setColor(0xffffff)
.setAuthor("Author", "Author imageURL")
.setDescription("Description")
.setThumbnail("Thumbnail imageURL")
.addField("Name of field", "Value of field", false)
.setImage("ImageURL")
.setFooter("Footer text", "Footer imageURL");

hook.send("content", "username", "avatarURL", Builder.embed);
```
