const TranslationModel  = require("../model/translation.model");

const TranslationService = require('../service/translation.service');

module.exports = class TranslationController {
    translate = async (req, res) => {
        const text = req.body.text;
        const fromLang = req.body.fromLang;
        const toLang = req.body.toLang;

        try {
            if (typeof text === 'undefined') throw new Error('Please provide a valid text');
            if (typeof toLang === 'undefined') throw new Error('Please provide a toLang language');
            if (typeof fromLang === 'undefined') throw new Error('Please provide a fromLang language');

            const results = await TranslationModel.find(text,fromLang,toLang);

            if(results.length === 0){
                const translation = await new TranslationService().translate(text, fromLang, toLang);
                if (typeof translation === 'undefined') throw new Error('Translation Error');

                console.log("Fetched from bing api",translation);

                const data = {
                    fromLang: translation.language.from,
                    toLang: translation.language.to,
                    text: translation.text,
                    target: translation.translation,
                };

                const dbResult = await TranslationModel.create(data);
                console.log("Stored into cache db",dbResult);

                return res.status(200).send(data);
            }
            console.log("Fetched from cache db",results[0]);
            return res.status(200).send(results[0]);

        } catch (error) {
            let message;

            if (error instanceof Error) {
                message = error.message;
            } else {
                message = 'Server Error';
            }
            res.status(400).send({
                errors: [message],
            })
        }
    }

}
