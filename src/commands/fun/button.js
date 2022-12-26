const { SlashCommandBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Do u see a button?"),
  async execute(interaction) {
    const button = new ButtonBuilder()
        .setCustomId('sub-yt')
        .setLabel(`Click Me!`)
        .setStyle(ButtonStyle.Primary);

    await interaction.reply({
        components: [button]
    });
  },
};
