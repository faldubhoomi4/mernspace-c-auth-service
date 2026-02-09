import app from './app.js';
import './config/index.js';
import logger from './config/logger.js';

const sraetserver = () => {
  const PORT = process.env.PORT || 5004;
  try {
    app.listen(PORT, () => {
      logger.error('testing Error...');
      logger.info(`listing port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

sraetserver();

