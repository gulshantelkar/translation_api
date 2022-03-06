# Setup and Installation

### 1. Install all npm dependencies

```
run npm i
```

### Dependencies

```
bing-translate-api
body-parser
dotenv
express
jest
mysql
util
```

### 2. Run MYSQL server

Create database

```
CREATE DATABASE <db-name>
```

Create table

```
CREATE TABLE IF NOT EXISTS `translations` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    text varchar(255) NOT NULL,
    target varchar(255),
    fromLang varchar(20),
    toLang varchar(20)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 3. Add environment variables

Add the environment variables in <code>.env</code> file

```
DB_HOST=<host>
DB_USER=<user>
DB_PASSWORD=<passowrd>
DB_NAME=testdb
```

### 4. Run the server scripts

Run the server

```
npm run start
```

Run the test

```
npm run test
```

# Database Schema
<code>target</code> - translated language text

<code>text</code> - language text to be translated

<code>fromLang</code> - language from which the text needs to be translated

<code>toLang</code> - language to which the text needs to be translated

#### SQL DB Schema
```
id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
text varchar(255) NOT NULL,
target varchar(255),
fromLang varchar(20),
toLang varchar(20)
```

# API

### 3rd Party Translation API
<code>Bing Translation API</code>

### API Usage

```
POST http://localhost:3000/api/translate
```

Body
```
{
    "text": "भेजना चाहते हैं हिंदी में मैसेज लेकिन नहीं आती टाइपिंग",
    "toLang": "en",
    "fromLang": "hi"
}
```
List of supported languages at the bottom of this file

Response
```
{
    "text": "भेजना चाहते हैं हिंदी में मैसेज लेकिन नहीं आती टाइपिंग AND 1",
    "target": "Want to send messages in Hindi but do not come typing AND 1",
    "fromLang": "hi",
    "toLang": "en"
}
```

# Further Improvements
1. Usage of <code>Redis</code> for remote caching
2. Restrict the languages based on demographics of the customer range - add columns of each language in order to reduce multiple 3rd party translation-api fetches

# Languages Supported 
```
af: 'Afrikaans',
  am: 'Amharic',
  ar: 'Arabic',
  as: 'Assamese',
  az: 'Azerbaijani',
  bg: 'Bulgarian',
  bn: 'Bangla',
  bs: 'Bosnian',
  ca: 'Catalan',
  cs: 'Czech',
  cy: 'Welsh',
  da: 'Danish',
  de: 'German',
  el: 'Greek',
  en: 'English',
  es: 'Spanish',
  et: 'Estonian',
  fa: 'Persian',
  fi: 'Finnish',
  fil: 'Filipino',
  fj: 'Fijian',
  fr: 'French',
  'fr-CA': 'French (Canada)',
  ga: 'Irish',
  gu: 'Gujarati',
  he: 'Hebrew',
  hi: 'Hindi',
  hr: 'Croatian',
  ht: 'Haitian Creole',
  hu: 'Hungarian',
  hy: 'Armenian',
  id: 'Indonesian',
  is: 'Icelandic',
  it: 'Italian',
  iu: 'Inuktitut',
  ja: 'Japanese',
  kk: 'Kazakh',
  km: 'Khmer',
  kmr: 'Kurdish (Northern)',
  kn: 'Kannada',
  ko: 'Korean',
  ku: 'Kurdish (Central)',
  lo: 'Lao',
  lt: 'Lithuanian',
  lv: 'Latvian',
  mg: 'Malagasy',
  mi: 'Maori',
  ml: 'Malayalam',
  mr: 'Marathi',
  ms: 'Malay',
  mt: 'Maltese',
  mww: 'Hmong Daw',
  my: 'Myanmar',
  nb: 'Norwegian',
  ne: 'Nepali',
  nl: 'Dutch',
  or: 'Odia',
  otq: 'Querétaro Otomi',
  pa: 'Punjabi',
  pl: 'Polish',
  prs: 'Dari',
  ps: 'Pashto',
  pt: 'Portuguese (Brazil)',
  'pt-PT': 'Portuguese (Portugal)',
  ro: 'Romanian',
  ru: 'Russian',
  sk: 'Slovak',
  sl: 'Slovenian',
  sm: 'Samoan',
  sq: 'Albanian',
  'sr-Cyrl': 'Serbian (Cyrillic)',
  'sr-Latn': 'Serbian (Latin)',
  sv: 'Swedish',
  sw: 'Swahili',
  ta: 'Tamil',
  te: 'Telugu',
  th: 'Thai',
  ti: 'Tigrinya',
  'tlh-Latn': 'Klingon (Latin)',
  'tlh-Piqd': 'Klingon (pIqaD)',
  to: 'Tongan',
  tr: 'Turkish',
  ty: 'Tahitian',
  uk: 'Ukrainian',
  ur: 'Urdu',
  vi: 'Vietnamese',
  yua: 'Yucatec Maya',
  yue: 'Cantonese (Traditional)',
  'zh-Hans': 'Chinese Simplified',
  'zh-Hant': 'Chinese Traditional'
```
