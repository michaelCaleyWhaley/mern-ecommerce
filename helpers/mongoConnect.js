const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

exports.mongoConnect = async (cb) => {
  const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;
  // Connection URL
  const dbUsername = encodeURIComponent(DATABASE_USERNAME);
  const dbPassword = encodeURIComponent(DATABASE_PASSWORD);

  const url = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.wdqdf.mongodb.net/?retryWrites=true&w=majority`;

  // Use connect method to connect to the server
  MongoClient.connect(
    url,
    { useUnifiedTopology: true },
    async (err, client) => {
      assert.equal(null, err);
      const db = client.db(DATABASE_NAME);

      await cb(db);

      client.close();
    }
  );
};
