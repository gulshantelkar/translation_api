const sql = require("./db.js");
const util = require("util");

const query = util.promisify(sql.query).bind(sql);

/// Create Table
// CREATE TABLE IF NOT EXISTS `translations` (
//     id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     text varchar(255) NOT NULL,
//     target varchar(255),
//     fromLang varchar(20),
//     toLang varchar(20)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// constructor
class TranslationModel {

    static create = async (newTranslation) => {
        const res = await query("INSERT INTO translations SET ?", newTranslation);
        console.log("created translation: ", {id: res.insertId, ...newTranslation});
        return {id: res.insertId, ...newTranslation};
    };

    static find = async (text, fromLang, toLang) => {
        const res = await query(`SELECT * FROM translations WHERE ((toLang="${toLang}" AND fromLang="${fromLang}" AND text="${text}") OR (toLang="${fromLang}" AND fromLang="${toLang}" AND target="${text}"))`);
        return res;
    };
}

module.exports = TranslationModel;
