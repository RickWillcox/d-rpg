import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Client, TextChannel } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Creates a help ticket!')
  .addStringOption((option) =>
    option
      .setName('description')
      .setDescription('The description of the ticket.')
      .setRequired(true)
  );

export async function execute(interaction: CommandInteraction, client: Client) {
  console.log('received help command');
  if (!interaction?.channelId) {
    return;
  }
  const channel = await client.channels.fetch(interaction.channelId);
  if (!channel || channel.type !== 'GUILD_TEXT') {
    return;
  }
  const thread = await (channel as TextChannel).threads.create({
    name: `support-${Date.now()}`,
    reason: `Support ticket ${Date.now()}`,
  });

  const problemDescription = interaction.options.getString('description')!;
  const { user } = interaction;
  thread.send(`**User:** ${user}
  **Problem:** ${problemDescription}`);

  //TODO: add to firestore
  return interaction.reply({
    content: 'Help is on the way!',
    ephemeral: true,
  });
}
