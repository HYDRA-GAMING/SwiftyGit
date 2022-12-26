const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const discord = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite Me to your server"),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(interaction, client) {
    const inviteRow = new EmbedBuilder()
    .setTitle(`Invite Link`)
    .setDescription('Use this link to invite me to your server') 
    .setColor(0x18e1ee)
    .setImage(client.user.displayAvatarURL())
    .setTimestamp(Date.now())
    .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
    })
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=1054032393071251506&permissions=8&scope=bot%20applications.commands`)
    

    await interaction.reply({
      embeds: [inviteRow],
    });
  },
};