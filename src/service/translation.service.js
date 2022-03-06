const {translate} = require('bing-translate-api');

module.exports = class TranslationService {
    translate = async (text, fromLang, toLang) => {
        const translation = await translate(text, fromLang, toLang, true);
        console.log(translation);
        return translation;
    }
}
