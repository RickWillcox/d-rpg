import { Client } from 'discord.js';
import config from './config';
import * as commandModules from './commands';

const commands = Object(commandModules);

export const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'],
});

client.once('ready', () => {
  console.log('Discord bot is ready!');
});

client.once('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    console.log(`Error: Not a command ${interaction.id}`);
    return;
  }
  const { commandName } = interaction;
  commands[commandName].execute(interaction, client);
});

client.login(config.DISCORD_TOKEN);
