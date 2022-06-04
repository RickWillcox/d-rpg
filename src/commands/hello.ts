import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('hello')
  .setDescription('replies with world');

export async function execute(interaction: CommandInteraction) {
  console.log('received hello command');
  return interaction.reply('world');
}
