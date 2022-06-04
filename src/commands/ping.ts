import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('replies with Pong!');

export async function execute(interaction: CommandInteraction) {
  console.log('received ping command');
  return interaction.reply('pong!');
}
