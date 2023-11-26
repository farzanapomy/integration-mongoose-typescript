// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log('URL from server', config.database_url);
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
