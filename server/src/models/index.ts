import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { TicketFactory } from './ticket.js';

let sequelize: Sequelize;

if (process.env.DB_URL) {
  // ✅ If deploying on Render, use the remote database
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  // ✅ Otherwise use local database
  sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USER || '',
    process.env.DB_PASSWORD || '',
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );
}

// Setup models
const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);

// Setup associations
User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser' });

export { sequelize, User, Ticket };
