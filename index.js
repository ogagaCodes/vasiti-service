const app = require("./src");
const KEYS = require('./src/_helpers/keys')
const db = require('./src/_config/db.config');
db.sequelize.sync();
const PORT = KEYS.PORT;
app.listen(PORT, () => {
  console.log(`Server has started!... and running on port ${PORT}`);
});
