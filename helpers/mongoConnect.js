const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

exports.mongoConnect = async (cb) => {
  // Connection URL
  const url = process.env.DATABASE;

  // Database Name
  const dbName = process.env.DATABASE_NAME;

  // Use connect method to connect to the server
  MongoClient.connect(
    url,
    { useUnifiedTopology: true },
    async (err, client) => {
      assert.equal(null, err);
      const db = client.db(dbName);

      await cb(db);

      client.close();
    }
  );
};
