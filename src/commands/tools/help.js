const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Show all commands available!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
        .setTitle(`Commands`)
        .setDescription('The commands listed below are currently available for use !') 
        .setColor("DarkGold")
        .setThumbnail(client.user.displayAvatarURL()) 
        .setTimestamp(Date.now())
        .setAuthor({
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        .addFields([
            {
                name: `Tools 🛠️`,
                value: `- /help
                - /invite
                - /membercount
                - /ping`
            },
            {
                name: `Moderation ⚙️`,
                value: `- /ban
                - /kick
                - /purge
                - /unban`,
                inline: true
            },
            {
                name: `Fun ⚔️`,
                value: `- /dadjoke
                - /embed
                - /meme
                - /poll`,
                inline: true
            }
        ]);
        
        await interaction.reply({
            embeds: [embed]
        });
  },
};