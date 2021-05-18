<h1 align="center">Cool Image API Wrapper</h1>
<p align="center">
  <a href="https://discord.gg/pXeUpehMfb" target="_blank">
    <img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=flat-square&logo=discord">
  </a>
  <a href="https://www.npmjs.com/package/cool-image-api-wrapper" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/cool-image-api-wrapper.svg?style=flat-square">
  </a>
  <a href="https://cool-image-api.js.org" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/Documentation-yes-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://github.com/sujalgoel/cool-image-api-wrapper/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL-3.0" src="https://img.shields.io/github/license/sujalgoel/cool-image-api-wrapper?style=flat-square" />
  </a>
</p>

## What is cool-image-api-wrapper?

> A quick and easy wraper to interact with the cool image api!

#

## Features

- **🧑 Beginner friendly**
- **🎉 Easy to use**
- **✨ Simple**
- **⚙️ Asynchronous**
- **and much more!**

#

## Install 📥

```sh
npm install cool-image-api-wrapper
```

## Usage 📚

```js
const { API } = require("cool-image-api-wrapper");
const api = new API();
await api
  .discord_message(
    "My, name is Sujal Goel",
    "#7289DA",
    "Sujal Goel",
    "https://cdn.discordapp.com/avatars/581752425858203659/a_b26f9781f3b0300177ab1f3af6190a52.png"
  )
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
```

## Example ✏️

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { API } = require("cool-image-api-wrapper");
const api = new API();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
  if (message.content === "test") {
    await api
      .discord_message(
        "My, name is Sujal Goel",
        "#7289DA",
        "Sujal Goel",
        "https://cdn.discordapp.com/avatars/581752425858203659/a_b26f9781f3b0300177ab1f3af6190a52.png"
      )
      .then((data) => {
        console.log(data);
        const attachment = new Discord.MessageAttachment(data);
        message.channel.send(attachment);
      })
      .catch((e) => {
        console.log(e);
      });
  }
});

client.login("DISCORD_BOT_TOKEN");
```

## Contributing 🤝

- **Contributions, issues and feature requests are welcome!**
- **Feel free to check [issues page](https://github.com/sujalgoel/cool-image-api-wrapper/issues).**

## Author 💖

#### **Copyright © 2021 Sujal Goel** 👤

- **Github:** [@Sujal Goel](https://github.com/sujalgoel)
- **Website:** [@Sujal Goel](https://sujalgoel.ml)

#

<details>
<summary style="font-weight:bold">✌ Important Links:</summary>

- 📚 **[Documentation](https://cool-image-api.js.org)**

- ❔ **[Support](https://discord.gg/pXeUpehMfb)**

- 📂 **[NPM](https://npmjs.com/cool-image-api-wrapper)**

</details>
