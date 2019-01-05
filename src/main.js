"use strict";

const axios = require("axios");
const baseURL = "https://canary.discordapp.com/api/webhooks";

class DiscordWebhook {
    /**
     * @constructor
     * @param {string} webhookid The webhook ID
     * @param {string} webhooktoken The webhook Token
     */
    constructor(webhookid, webhooktoken) {
        if(!webhookid) throw new Error("[DiscordWebhook] No webhookID found!");
            this.webhookid = webhookid;
        if(!webhooktoken) throw new Error("[DiscordWebhook] No webhookToken found!");
            this.webhooktoken = webhooktoken;
    }

    /**
     * Send a message with a webhook
     * @param {string} message The message
     * @param {string} username The webhook username
     * @param {string} avatarUrl The url of the webhook avatar
     * @param {Array} embed The embed
     * @returns {Promise<Object>}
     */
    send(message, username = "", avatarUrl = "", embed = []) {
        if(!message) throw new Error("[DiscordWebhook] You cannot send an empty message.");
            return new Promise(async(resolve, reject) => {
                await axios({
                    method: "post", 
                    url: `${baseURL}/${this.webhookid}/${this.webhooktoken}`,
                    data: {
                        username,
                        avatar_url: avatarUrl,
                        content: message,
                        embeds: embed
                    }
                })
                    .then(() => {
                        resolve("[DiscordWebhook] message sent!");
                    })
                        .catch((err) => {
                            if(err) reject(new Error(`[DiscordWebhook] Error:\n${err}`));
                        });
            });
    }
};

module.exports = DiscordWebhook;
