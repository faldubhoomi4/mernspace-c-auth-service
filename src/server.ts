import app from './app.js';
import './config/index.js';

const sraetserver = () => {
  const PORT = process.env.PORT;
  try {
    app.listen(PORT, () => {
      console.log(`Listen ON PORT ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

sraetserver();
