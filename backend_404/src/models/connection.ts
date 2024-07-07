import oracledb from "oracledb"
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function connect() {
  let con;
  try {
    con = await oracledb.getConnection({
      user : ""
    }
  }
}
