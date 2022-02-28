import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'localhost',//process.env.MYSQL_HOST,
    port: 3306,//process.env.MYSQL_PORT,
    database: 'olinka',//process.env.MYSQL_DATABASE,
    user: 'olinka',//process.env.MYSQL_USER,
    password: '1234'//process.env.MYSQL_PASSWORD
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}