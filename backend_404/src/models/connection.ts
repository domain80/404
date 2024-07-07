let oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export class database {
  static async connect() {
    let con;
    try {
      con = await oracledb.getConnection({
        user: "david",
        password: "domain80",
        connectString: "localhost:1521/",
      });

      console.log("connection successful");
    } catch (e) {
      console.log("error, coonnection failed");
      console.log(e);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.log("Error unable to close connection");
        }
      }
    }
    return;
  }
}
