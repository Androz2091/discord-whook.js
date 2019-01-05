"use strict";

class EmbedBuilder {
    /**
     * @constructor
     */
    constructor() {
        this.embed = [{
            title: null,
            author: null,
            color: null,
            description: null,
            thumbnail: null,
            fields: [],
            image: null,
            footer: null,
        }];
    }

    /**
     * Sets the title of the embed.
     * @param {StringResolvable} title The title
     * @returns {EmbedBuilder}
     */
    setTitle(title){
        if(!title) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a title to set a title!");
        if(title.length > 256) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a title with 256 characters max.!");
        this.embed[0].title = title;
        return this;
    }
 
    /**
     * Sets the description of the embed.
     * @param {StringResolvable} description The description
     * @returns {EmbedBuilder}
     */
    setDescription(description) {
        if(!description) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a description to set a description!");
        if(description.length > 2048) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a description with 2048 characters max.!");
        this.embed[0].description = description;
        return this;
    }

    /**
     * Sets the image of the embed.
     * @param {string} imageURL The URL of the image
     * @returns {EmbedBuilder}
     */
    setImage(imageURL) {
        if(!imageURL) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a imageURL to set an image!");
        this.embed[0].image = {
            url: imageURL
        };
        return this;
    }

    /**
     * Sets the thumbnail of the embed.
     * @param {string} imageURL The URL of the thumbnail
     * @returns {EmbedBuilder}
     */
    setThumbnail(imageURL) {
        if(!imageURL) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a text to set a footer!");
        this.embed[0].thumbnail = {
            url: imageURL
        };
        return this;
    }

    /**
     * Sets the footer of the embed.
     * @param {StringResolvable} text The text of the footer
     * @param {string} iconURL The icon URL of the footer
     * @returns {EmbedBuilder}
     */
    setFooter(text, iconURL) {
        if(!text) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a text to set a footer!");
        if(text.length > 2048) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a text of a footer with 2048 characters max.!");
        if(!iconURL) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a iconURL to set a footer!");
        this.embed[0].footer = {
            text: text,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the author of the embed.
     * @param {StringResolvable} name The name of the author
     * @param {string} iconURL The icon URL of the author
     * @returns {EmbedBuilder}
     */
    setAuthor(name, iconURL) {
        if(!name) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a name to set an author!");
        if(name.length > 256) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide an author with 256 characters max.!");
        if(!iconURL) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a iconURL to set a author!");
        this.embed[0].author = {
            name: name,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the color of the embed.
     * @param {ColorResolvable} color The color of the embed
     * @returns {EmbedBuilder}
     */
    setColor(color) {
        if(!color) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a color to set a color!");
        this.embed[0].color = color;
        return this;
    }

    /**
     * Adds a field to the embed.
     * @param {StringResolvable} name The name of the field
     * @param {StringResolvable} value The value of the field
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {EmbedBuilder}
     */
    addField(name, value, inline = false){
        if(!name) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a name to add a field!");
        if(name.length > 256) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a name of a field with 256 characters max.!");
        if(!value) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a value to add a field!");
        if(value.length > 1024) throw new Error("[DiscordWebhook-EmbedBuilder] You must provide a value of a field with 1024 characters max.!");
        if(this.embed[0].fields.length > 25) throw new Error("[DiscordWebhook-EmbedBuilder] You can include 25 fields max.!");
        this.embed[0].fields.push({
            name: name,
            value: value,
            inline: inline ? true : false
        });
        return this;
    }
};

module.exports = EmbedBuilder;
