<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('country_code');
            $table->string('country_name');
            $table->timestamps();

           
        });

        DB::table('Countries')->delete();
        
        DB::table('Countries')->insert(array (
            0 => 
            array (
                'id' => 297,
                'country_code' => 'AF',
                'country_name' => 'Afghanistan',
            ),
            1 => 
            array (
                'id' => 298,
                'country_code' => 'AF',
                'country_name' => 'Afghanistan',
            ),
            2 => 
            array (
                'id' => 299,
                'country_code' => 'AL',
                'country_name' => 'Albania',
            ),
            3 => 
            array (
                'id' => 300,
                'country_code' => 'AL',
                'country_name' => 'Albania',
            ),
            4 => 
            array (
                'id' => 301,
                'country_code' => 'DZ',
                'country_name' => 'Algeria',
            ),
            5 => 
            array (
                'id' => 302,
                'country_code' => 'DZ',
                'country_name' => 'Algeria',
            ),
            6 => 
            array (
                'id' => 303,
                'country_code' => 'DS',
                'country_name' => 'American Samoa',
            ),
            7 => 
            array (
                'id' => 304,
                'country_code' => 'DS',
                'country_name' => 'American Samoa',
            ),
            8 => 
            array (
                'id' => 305,
                'country_code' => 'AD',
                'country_name' => 'Andorra',
            ),
            9 => 
            array (
                'id' => 306,
                'country_code' => 'AD',
                'country_name' => 'Andorra',
            ),
            10 => 
            array (
                'id' => 307,
                'country_code' => 'AO',
                'country_name' => 'Angola',
            ),
            11 => 
            array (
                'id' => 308,
                'country_code' => 'AO',
                'country_name' => 'Angola',
            ),
            12 => 
            array (
                'id' => 309,
                'country_code' => 'AI',
                'country_name' => 'Anguilla',
            ),
            13 => 
            array (
                'id' => 310,
                'country_code' => 'AI',
                'country_name' => 'Anguilla',
            ),
            14 => 
            array (
                'id' => 311,
                'country_code' => 'AQ',
                'country_name' => 'Antarctica',
            ),
            15 => 
            array (
                'id' => 312,
                'country_code' => 'AQ',
                'country_name' => 'Antarctica',
            ),
            16 => 
            array (
                'id' => 313,
                'country_code' => 'AG',
                'country_name' => 'Antigua and Barbuda',
            ),
            17 => 
            array (
                'id' => 314,
                'country_code' => 'AG',
                'country_name' => 'Antigua and Barbuda',
            ),
            18 => 
            array (
                'id' => 315,
                'country_code' => 'AR',
                'country_name' => 'Argentina',
            ),
            19 => 
            array (
                'id' => 316,
                'country_code' => 'AR',
                'country_name' => 'Argentina',
            ),
            20 => 
            array (
                'id' => 317,
                'country_code' => 'AM',
                'country_name' => 'Armenia',
            ),
            21 => 
            array (
                'id' => 318,
                'country_code' => 'AM',
                'country_name' => 'Armenia',
            ),
            22 => 
            array (
                'id' => 319,
                'country_code' => 'AW',
                'country_name' => 'Aruba',
            ),
            23 => 
            array (
                'id' => 320,
                'country_code' => 'AW',
                'country_name' => 'Aruba',
            ),
            24 => 
            array (
                'id' => 321,
                'country_code' => 'AU',
                'country_name' => 'Australia',
            ),
            25 => 
            array (
                'id' => 322,
                'country_code' => 'AU',
                'country_name' => 'Australia',
            ),
            26 => 
            array (
                'id' => 323,
                'country_code' => 'AT',
                'country_name' => 'Austria',
            ),
            27 => 
            array (
                'id' => 324,
                'country_code' => 'AT',
                'country_name' => 'Austria',
            ),
            28 => 
            array (
                'id' => 325,
                'country_code' => 'AZ',
                'country_name' => 'Azerbaijan',
            ),
            29 => 
            array (
                'id' => 326,
                'country_code' => 'AZ',
                'country_name' => 'Azerbaijan',
            ),
            30 => 
            array (
                'id' => 327,
                'country_code' => 'BS',
                'country_name' => 'Bahamas',
            ),
            31 => 
            array (
                'id' => 328,
                'country_code' => 'BS',
                'country_name' => 'Bahamas',
            ),
            32 => 
            array (
                'id' => 329,
                'country_code' => 'BH',
                'country_name' => 'Bahrain',
            ),
            33 => 
            array (
                'id' => 330,
                'country_code' => 'BH',
                'country_name' => 'Bahrain',
            ),
            34 => 
            array (
                'id' => 331,
                'country_code' => 'BD',
                'country_name' => 'Bangladesh',
            ),
            35 => 
            array (
                'id' => 332,
                'country_code' => 'BD',
                'country_name' => 'Bangladesh',
            ),
            36 => 
            array (
                'id' => 333,
                'country_code' => 'BB',
                'country_name' => 'Barbados',
            ),
            37 => 
            array (
                'id' => 334,
                'country_code' => 'BB',
                'country_name' => 'Barbados',
            ),
            38 => 
            array (
                'id' => 335,
                'country_code' => 'BY',
                'country_name' => 'Belarus',
            ),
            39 => 
            array (
                'id' => 336,
                'country_code' => 'BY',
                'country_name' => 'Belarus',
            ),
            40 => 
            array (
                'id' => 337,
                'country_code' => 'BE',
                'country_name' => 'Belgium',
            ),
            41 => 
            array (
                'id' => 338,
                'country_code' => 'BE',
                'country_name' => 'Belgium',
            ),
            42 => 
            array (
                'id' => 339,
                'country_code' => 'BZ',
                'country_name' => 'Belize',
            ),
            43 => 
            array (
                'id' => 340,
                'country_code' => 'BZ',
                'country_name' => 'Belize',
            ),
            44 => 
            array (
                'id' => 341,
                'country_code' => 'BJ',
                'country_name' => 'Benin',
            ),
            45 => 
            array (
                'id' => 342,
                'country_code' => 'BJ',
                'country_name' => 'Benin',
            ),
            46 => 
            array (
                'id' => 343,
                'country_code' => 'BM',
                'country_name' => 'Bermuda',
            ),
            47 => 
            array (
                'id' => 344,
                'country_code' => 'BM',
                'country_name' => 'Bermuda',
            ),
            48 => 
            array (
                'id' => 345,
                'country_code' => 'BT',
                'country_name' => 'Bhutan',
            ),
            49 => 
            array (
                'id' => 346,
                'country_code' => 'BT',
                'country_name' => 'Bhutan',
            ),
            50 => 
            array (
                'id' => 347,
                'country_code' => 'BO',
                'country_name' => 'Bolivia',
            ),
            51 => 
            array (
                'id' => 348,
                'country_code' => 'BO',
                'country_name' => 'Bolivia',
            ),
            52 => 
            array (
                'id' => 349,
                'country_code' => 'BA',
                'country_name' => 'Bosnia and Herzegovina',
            ),
            53 => 
            array (
                'id' => 350,
                'country_code' => 'BA',
                'country_name' => 'Bosnia and Herzegovina',
            ),
            54 => 
            array (
                'id' => 351,
                'country_code' => 'BW',
                'country_name' => 'Botswana',
            ),
            55 => 
            array (
                'id' => 352,
                'country_code' => 'BW',
                'country_name' => 'Botswana',
            ),
            56 => 
            array (
                'id' => 353,
                'country_code' => 'BV',
                'country_name' => 'Bouvet Island',
            ),
            57 => 
            array (
                'id' => 354,
                'country_code' => 'BV',
                'country_name' => 'Bouvet Island',
            ),
            58 => 
            array (
                'id' => 355,
                'country_code' => 'BR',
                'country_name' => 'Brazil',
            ),
            59 => 
            array (
                'id' => 356,
                'country_code' => 'BR',
                'country_name' => 'Brazil',
            ),
            60 => 
            array (
                'id' => 357,
                'country_code' => 'IO',
                'country_name' => 'British Indian Ocean Territory',
            ),
            61 => 
            array (
                'id' => 358,
                'country_code' => 'IO',
                'country_name' => 'British Indian Ocean Territory',
            ),
            62 => 
            array (
                'id' => 359,
                'country_code' => 'BN',
                'country_name' => 'Brunei Darussalam',
            ),
            63 => 
            array (
                'id' => 360,
                'country_code' => 'BN',
                'country_name' => 'Brunei Darussalam',
            ),
            64 => 
            array (
                'id' => 361,
                'country_code' => 'BG',
                'country_name' => 'Bulgaria',
            ),
            65 => 
            array (
                'id' => 362,
                'country_code' => 'BG',
                'country_name' => 'Bulgaria',
            ),
            66 => 
            array (
                'id' => 363,
                'country_code' => 'BF',
                'country_name' => 'Burkina Faso',
            ),
            67 => 
            array (
                'id' => 364,
                'country_code' => 'BF',
                'country_name' => 'Burkina Faso',
            ),
            68 => 
            array (
                'id' => 365,
                'country_code' => 'BI',
                'country_name' => 'Burundi',
            ),
            69 => 
            array (
                'id' => 366,
                'country_code' => 'BI',
                'country_name' => 'Burundi',
            ),
            70 => 
            array (
                'id' => 367,
                'country_code' => 'KH',
                'country_name' => 'Cambodia',
            ),
            71 => 
            array (
                'id' => 368,
                'country_code' => 'KH',
                'country_name' => 'Cambodia',
            ),
            72 => 
            array (
                'id' => 369,
                'country_code' => 'CM',
                'country_name' => 'Cameroon',
            ),
            73 => 
            array (
                'id' => 370,
                'country_code' => 'CM',
                'country_name' => 'Cameroon',
            ),
            74 => 
            array (
                'id' => 371,
                'country_code' => 'CA',
                'country_name' => 'Canada',
            ),
            75 => 
            array (
                'id' => 372,
                'country_code' => 'CA',
                'country_name' => 'Canada',
            ),
            76 => 
            array (
                'id' => 373,
                'country_code' => 'CV',
                'country_name' => 'Cape Verde',
            ),
            77 => 
            array (
                'id' => 374,
                'country_code' => 'CV',
                'country_name' => 'Cape Verde',
            ),
            78 => 
            array (
                'id' => 375,
                'country_code' => 'KY',
                'country_name' => 'Cayman Islands',
            ),
            79 => 
            array (
                'id' => 376,
                'country_code' => 'KY',
                'country_name' => 'Cayman Islands',
            ),
            80 => 
            array (
                'id' => 377,
                'country_code' => 'CF',
                'country_name' => 'Central African Republic',
            ),
            81 => 
            array (
                'id' => 378,
                'country_code' => 'CF',
                'country_name' => 'Central African Republic',
            ),
            82 => 
            array (
                'id' => 379,
                'country_code' => 'TD',
                'country_name' => 'Chad',
            ),
            83 => 
            array (
                'id' => 380,
                'country_code' => 'TD',
                'country_name' => 'Chad',
            ),
            84 => 
            array (
                'id' => 381,
                'country_code' => 'CL',
                'country_name' => 'Chile',
            ),
            85 => 
            array (
                'id' => 382,
                'country_code' => 'CL',
                'country_name' => 'Chile',
            ),
            86 => 
            array (
                'id' => 383,
                'country_code' => 'CN',
                'country_name' => 'China',
            ),
            87 => 
            array (
                'id' => 384,
                'country_code' => 'CN',
                'country_name' => 'China',
            ),
            88 => 
            array (
                'id' => 385,
                'country_code' => 'CX',
                'country_name' => 'Christmas Island',
            ),
            89 => 
            array (
                'id' => 386,
                'country_code' => 'CX',
                'country_name' => 'Christmas Island',
            ),
            90 => 
            array (
                'id' => 387,
                'country_code' => 'CC',
            'country_name' => 'Cocos (Keeling) Islands',
            ),
            91 => 
            array (
                'id' => 388,
                'country_code' => 'CC',
            'country_name' => 'Cocos (Keeling) Islands',
            ),
            92 => 
            array (
                'id' => 389,
                'country_code' => 'CO',
                'country_name' => 'Colombia',
            ),
            93 => 
            array (
                'id' => 390,
                'country_code' => 'CO',
                'country_name' => 'Colombia',
            ),
            94 => 
            array (
                'id' => 391,
                'country_code' => 'KM',
                'country_name' => 'Comoros',
            ),
            95 => 
            array (
                'id' => 392,
                'country_code' => 'KM',
                'country_name' => 'Comoros',
            ),
            96 => 
            array (
                'id' => 393,
                'country_code' => 'CG',
                'country_name' => 'Congo',
            ),
            97 => 
            array (
                'id' => 394,
                'country_code' => 'CG',
                'country_name' => 'Congo',
            ),
            98 => 
            array (
                'id' => 395,
                'country_code' => 'CK',
                'country_name' => 'Cook Islands',
            ),
            99 => 
            array (
                'id' => 396,
                'country_code' => 'CK',
                'country_name' => 'Cook Islands',
            ),
            100 => 
            array (
                'id' => 397,
                'country_code' => 'CR',
                'country_name' => 'Costa Rica',
            ),
            101 => 
            array (
                'id' => 398,
                'country_code' => 'HR',
            'country_name' => 'Croatia (Hrvatska)',
            ),
            102 => 
            array (
                'id' => 399,
                'country_code' => 'CU',
                'country_name' => 'Cuba',
            ),
            103 => 
            array (
                'id' => 400,
                'country_code' => 'CY',
                'country_name' => 'Cyprus',
            ),
            104 => 
            array (
                'id' => 401,
                'country_code' => 'CZ',
                'country_name' => 'Czech Republic',
            ),
            105 => 
            array (
                'id' => 402,
                'country_code' => 'DK',
                'country_name' => 'Denmark',
            ),
            106 => 
            array (
                'id' => 403,
                'country_code' => 'DJ',
                'country_name' => 'Djibouti',
            ),
            107 => 
            array (
                'id' => 404,
                'country_code' => 'DM',
                'country_name' => 'Dominica',
            ),
            108 => 
            array (
                'id' => 405,
                'country_code' => 'DO',
                'country_name' => 'Dominican Republic',
            ),
            109 => 
            array (
                'id' => 406,
                'country_code' => 'TP',
                'country_name' => 'East Timor',
            ),
            110 => 
            array (
                'id' => 407,
                'country_code' => 'EC',
                'country_name' => 'Ecuador',
            ),
            111 => 
            array (
                'id' => 408,
                'country_code' => 'EG',
                'country_name' => 'Egypt',
            ),
            112 => 
            array (
                'id' => 409,
                'country_code' => 'SV',
                'country_name' => 'El Salvador',
            ),
            113 => 
            array (
                'id' => 410,
                'country_code' => 'GQ',
                'country_name' => 'Equatorial Guinea',
            ),
            114 => 
            array (
                'id' => 411,
                'country_code' => 'ER',
                'country_name' => 'Eritrea',
            ),
            115 => 
            array (
                'id' => 412,
                'country_code' => 'EE',
                'country_name' => 'Estonia',
            ),
            116 => 
            array (
                'id' => 413,
                'country_code' => 'ET',
                'country_name' => 'Ethiopia',
            ),
            117 => 
            array (
                'id' => 414,
                'country_code' => 'FK',
            'country_name' => 'Falkland Islands (Malvinas)',
            ),
            118 => 
            array (
                'id' => 415,
                'country_code' => 'FO',
                'country_name' => 'Faroe Islands',
            ),
            119 => 
            array (
                'id' => 416,
                'country_code' => 'FJ',
                'country_name' => 'Fiji',
            ),
            120 => 
            array (
                'id' => 417,
                'country_code' => 'FI',
                'country_name' => 'Finland',
            ),
            121 => 
            array (
                'id' => 418,
                'country_code' => 'FR',
                'country_name' => 'France',
            ),
            122 => 
            array (
                'id' => 419,
                'country_code' => 'FX',
                'country_name' => 'France, Metropolitan',
            ),
            123 => 
            array (
                'id' => 420,
                'country_code' => 'GF',
                'country_name' => 'French Guiana',
            ),
            124 => 
            array (
                'id' => 421,
                'country_code' => 'PF',
                'country_name' => 'French Polynesia',
            ),
            125 => 
            array (
                'id' => 422,
                'country_code' => 'TF',
                'country_name' => 'French Southern Territories',
            ),
            126 => 
            array (
                'id' => 423,
                'country_code' => 'GA',
                'country_name' => 'Gabon',
            ),
            127 => 
            array (
                'id' => 424,
                'country_code' => 'GM',
                'country_name' => 'Gambia',
            ),
            128 => 
            array (
                'id' => 425,
                'country_code' => 'GE',
                'country_name' => 'Georgia',
            ),
            129 => 
            array (
                'id' => 426,
                'country_code' => 'DE',
                'country_name' => 'Germany',
            ),
            130 => 
            array (
                'id' => 427,
                'country_code' => 'GH',
                'country_name' => 'Ghana',
            ),
            131 => 
            array (
                'id' => 428,
                'country_code' => 'GI',
                'country_name' => 'Gibraltar',
            ),
            132 => 
            array (
                'id' => 429,
                'country_code' => 'GR',
                'country_name' => 'Greece',
            ),
            133 => 
            array (
                'id' => 430,
                'country_code' => 'GL',
                'country_name' => 'Greenland',
            ),
            134 => 
            array (
                'id' => 431,
                'country_code' => 'GD',
                'country_name' => 'Grenada',
            ),
            135 => 
            array (
                'id' => 432,
                'country_code' => 'GP',
                'country_name' => 'Guadeloupe',
            ),
            136 => 
            array (
                'id' => 433,
                'country_code' => 'GU',
                'country_name' => 'Guam',
            ),
            137 => 
            array (
                'id' => 434,
                'country_code' => 'GT',
                'country_name' => 'Guatemala',
            ),
            138 => 
            array (
                'id' => 435,
                'country_code' => 'GK',
                'country_name' => 'Guernsey',
            ),
            139 => 
            array (
                'id' => 436,
                'country_code' => 'GN',
                'country_name' => 'Guinea',
            ),
            140 => 
            array (
                'id' => 437,
                'country_code' => 'GW',
                'country_name' => 'Guinea-Bissau',
            ),
            141 => 
            array (
                'id' => 438,
                'country_code' => 'GY',
                'country_name' => 'Guyana',
            ),
            142 => 
            array (
                'id' => 439,
                'country_code' => 'HT',
                'country_name' => 'Haiti',
            ),
            143 => 
            array (
                'id' => 440,
                'country_code' => 'HM',
                'country_name' => 'Heard and Mc Donald Islands',
            ),
            144 => 
            array (
                'id' => 441,
                'country_code' => 'HN',
                'country_name' => 'Honduras',
            ),
            145 => 
            array (
                'id' => 442,
                'country_code' => 'HK',
                'country_name' => 'Hong Kong',
            ),
            146 => 
            array (
                'id' => 443,
                'country_code' => 'HU',
                'country_name' => 'Hungary',
            ),
            147 => 
            array (
                'id' => 444,
                'country_code' => 'IS',
                'country_name' => 'Iceland',
            ),
            148 => 
            array (
                'id' => 445,
                'country_code' => 'IN',
                'country_name' => 'India',
            ),
            149 => 
            array (
                'id' => 446,
                'country_code' => 'ID',
                'country_name' => 'Indonesia',
            ),
            150 => 
            array (
                'id' => 447,
                'country_code' => 'IR',
            'country_name' => 'Iran (Islamic Republic of)',
            ),
            151 => 
            array (
                'id' => 448,
                'country_code' => 'IQ',
                'country_name' => 'Iraq',
            ),
            152 => 
            array (
                'id' => 449,
                'country_code' => 'IE',
                'country_name' => 'Ireland',
            ),
            153 => 
            array (
                'id' => 450,
                'country_code' => 'IM',
                'country_name' => 'Isle of Man',
            ),
            154 => 
            array (
                'id' => 451,
                'country_code' => 'IL',
                'country_name' => 'Israel',
            ),
            155 => 
            array (
                'id' => 452,
                'country_code' => 'IT',
                'country_name' => 'Italy',
            ),
            156 => 
            array (
                'id' => 453,
                'country_code' => 'CI',
                'country_name' => 'Ivory Coast',
            ),
            157 => 
            array (
                'id' => 454,
                'country_code' => 'JM',
                'country_name' => 'Jamaica',
            ),
            158 => 
            array (
                'id' => 455,
                'country_code' => 'JP',
                'country_name' => 'Japan',
            ),
            159 => 
            array (
                'id' => 456,
                'country_code' => 'JE',
                'country_name' => 'Jersey',
            ),
            160 => 
            array (
                'id' => 457,
                'country_code' => 'JO',
                'country_name' => 'Jordan',
            ),
            161 => 
            array (
                'id' => 458,
                'country_code' => 'KZ',
                'country_name' => 'Kazakhstan',
            ),
            162 => 
            array (
                'id' => 459,
                'country_code' => 'KE',
                'country_name' => 'Kenya',
            ),
            163 => 
            array (
                'id' => 460,
                'country_code' => 'KI',
                'country_name' => 'Kiribati',
            ),
            164 => 
            array (
                'id' => 461,
                'country_code' => 'KP',
                'country_name' => 'Korea, Democratic People\'s Republic of',
            ),
            165 => 
            array (
                'id' => 462,
                'country_code' => 'KR',
                'country_name' => 'Korea, Republic of',
            ),
            166 => 
            array (
                'id' => 463,
                'country_code' => 'XK',
                'country_name' => 'Kosovo',
            ),
            167 => 
            array (
                'id' => 464,
                'country_code' => 'KW',
                'country_name' => 'Kuwait',
            ),
            168 => 
            array (
                'id' => 465,
                'country_code' => 'KG',
                'country_name' => 'Kyrgyzstan',
            ),
            169 => 
            array (
                'id' => 466,
                'country_code' => 'LA',
                'country_name' => 'Lao People\'s Democratic Republic',
            ),
            170 => 
            array (
                'id' => 467,
                'country_code' => 'LV',
                'country_name' => 'Latvia',
            ),
            171 => 
            array (
                'id' => 468,
                'country_code' => 'LB',
                'country_name' => 'Lebanon',
            ),
            172 => 
            array (
                'id' => 469,
                'country_code' => 'LS',
                'country_name' => 'Lesotho',
            ),
            173 => 
            array (
                'id' => 470,
                'country_code' => 'LR',
                'country_name' => 'Liberia',
            ),
            174 => 
            array (
                'id' => 471,
                'country_code' => 'LY',
                'country_name' => 'Libyan Arab Jamahiriya',
            ),
            175 => 
            array (
                'id' => 472,
                'country_code' => 'LI',
                'country_name' => 'Liechtenstein',
            ),
            176 => 
            array (
                'id' => 473,
                'country_code' => 'LT',
                'country_name' => 'Lithuania',
            ),
            177 => 
            array (
                'id' => 474,
                'country_code' => 'LU',
                'country_name' => 'Luxembourg',
            ),
            178 => 
            array (
                'id' => 475,
                'country_code' => 'MO',
                'country_name' => 'Macau',
            ),
            179 => 
            array (
                'id' => 476,
                'country_code' => 'MK',
                'country_name' => 'Macedonia',
            ),
            180 => 
            array (
                'id' => 477,
                'country_code' => 'MG',
                'country_name' => 'Madagascar',
            ),
            181 => 
            array (
                'id' => 478,
                'country_code' => 'MW',
                'country_name' => 'Malawi',
            ),
            182 => 
            array (
                'id' => 479,
                'country_code' => 'MY',
                'country_name' => 'Malaysia',
            ),
            183 => 
            array (
                'id' => 480,
                'country_code' => 'MV',
                'country_name' => 'Maldives',
            ),
            184 => 
            array (
                'id' => 481,
                'country_code' => 'ML',
                'country_name' => 'Mali',
            ),
            185 => 
            array (
                'id' => 482,
                'country_code' => 'MT',
                'country_name' => 'Malta',
            ),
            186 => 
            array (
                'id' => 483,
                'country_code' => 'MH',
                'country_name' => 'Marshall Islands',
            ),
            187 => 
            array (
                'id' => 484,
                'country_code' => 'MQ',
                'country_name' => 'Martinique',
            ),
            188 => 
            array (
                'id' => 485,
                'country_code' => 'MR',
                'country_name' => 'Mauritania',
            ),
            189 => 
            array (
                'id' => 486,
                'country_code' => 'MU',
                'country_name' => 'Mauritius',
            ),
            190 => 
            array (
                'id' => 487,
                'country_code' => 'TY',
                'country_name' => 'Mayotte',
            ),
            191 => 
            array (
                'id' => 488,
                'country_code' => 'MX',
                'country_name' => 'Mexico',
            ),
            192 => 
            array (
                'id' => 489,
                'country_code' => 'FM',
                'country_name' => 'Micronesia, Federated States of',
            ),
            193 => 
            array (
                'id' => 490,
                'country_code' => 'MD',
                'country_name' => 'Moldova, Republic of',
            ),
            194 => 
            array (
                'id' => 491,
                'country_code' => 'MC',
                'country_name' => 'Monaco',
            ),
            195 => 
            array (
                'id' => 492,
                'country_code' => 'MN',
                'country_name' => 'Mongolia',
            ),
            196 => 
            array (
                'id' => 493,
                'country_code' => 'ME',
                'country_name' => 'Montenegro',
            ),
            197 => 
            array (
                'id' => 494,
                'country_code' => 'MS',
                'country_name' => 'Montserrat',
            ),
            198 => 
            array (
                'id' => 495,
                'country_code' => 'MA',
                'country_name' => 'Morocco',
            ),
            199 => 
            array (
                'id' => 496,
                'country_code' => 'MZ',
                'country_name' => 'Mozambique',
            ),
            200 => 
            array (
                'id' => 497,
                'country_code' => 'MM',
                'country_name' => 'Myanmar',
            ),
            201 => 
            array (
                'id' => 498,
                'country_code' => 'NA',
                'country_name' => 'Namibia',
            ),
            202 => 
            array (
                'id' => 499,
                'country_code' => 'NR',
                'country_name' => 'Nauru',
            ),
            203 => 
            array (
                'id' => 500,
                'country_code' => 'NP',
                'country_name' => 'Nepal',
            ),
            204 => 
            array (
                'id' => 501,
                'country_code' => 'NL',
                'country_name' => 'Netherlands',
            ),
            205 => 
            array (
                'id' => 502,
                'country_code' => 'AN',
                'country_name' => 'Netherlands Antilles',
            ),
            206 => 
            array (
                'id' => 503,
                'country_code' => 'NC',
                'country_name' => 'New Caledonia',
            ),
            207 => 
            array (
                'id' => 504,
                'country_code' => 'NZ',
                'country_name' => 'New Zealand',
            ),
            208 => 
            array (
                'id' => 505,
                'country_code' => 'NI',
                'country_name' => 'Nicaragua',
            ),
            209 => 
            array (
                'id' => 506,
                'country_code' => 'NE',
                'country_name' => 'Niger',
            ),
            210 => 
            array (
                'id' => 507,
                'country_code' => 'NG',
                'country_name' => 'Nigeria',
            ),
            211 => 
            array (
                'id' => 508,
                'country_code' => 'NU',
                'country_name' => 'Niue',
            ),
            212 => 
            array (
                'id' => 509,
                'country_code' => 'NF',
                'country_name' => 'Norfolk Island',
            ),
            213 => 
            array (
                'id' => 510,
                'country_code' => 'MP',
                'country_name' => 'Northern Mariana Islands',
            ),
            214 => 
            array (
                'id' => 511,
                'country_code' => 'NO',
                'country_name' => 'Norway',
            ),
            215 => 
            array (
                'id' => 512,
                'country_code' => 'OM',
                'country_name' => 'Oman',
            ),
            216 => 
            array (
                'id' => 513,
                'country_code' => 'PK',
                'country_name' => 'Pakistan',
            ),
            217 => 
            array (
                'id' => 514,
                'country_code' => 'PW',
                'country_name' => 'Palau',
            ),
            218 => 
            array (
                'id' => 515,
                'country_code' => 'PS',
                'country_name' => 'Palestine',
            ),
            219 => 
            array (
                'id' => 516,
                'country_code' => 'PA',
                'country_name' => 'Panama',
            ),
            220 => 
            array (
                'id' => 517,
                'country_code' => 'PG',
                'country_name' => 'Papua New Guinea',
            ),
            221 => 
            array (
                'id' => 518,
                'country_code' => 'PY',
                'country_name' => 'Paraguay',
            ),
            222 => 
            array (
                'id' => 519,
                'country_code' => 'PE',
                'country_name' => 'Peru',
            ),
            223 => 
            array (
                'id' => 520,
                'country_code' => 'PH',
                'country_name' => 'Philippines',
            ),
            224 => 
            array (
                'id' => 521,
                'country_code' => 'PN',
                'country_name' => 'Pitcairn',
            ),
            225 => 
            array (
                'id' => 522,
                'country_code' => 'PL',
                'country_name' => 'Poland',
            ),
            226 => 
            array (
                'id' => 523,
                'country_code' => 'PT',
                'country_name' => 'Portugal',
            ),
            227 => 
            array (
                'id' => 524,
                'country_code' => 'PR',
                'country_name' => 'Puerto Rico',
            ),
            228 => 
            array (
                'id' => 525,
                'country_code' => 'QA',
                'country_name' => 'Qatar',
            ),
            229 => 
            array (
                'id' => 526,
                'country_code' => 'RE',
                'country_name' => 'Reunion',
            ),
            230 => 
            array (
                'id' => 527,
                'country_code' => 'RO',
                'country_name' => 'Romania',
            ),
            231 => 
            array (
                'id' => 528,
                'country_code' => 'RU',
                'country_name' => 'Russian Federation',
            ),
            232 => 
            array (
                'id' => 529,
                'country_code' => 'RW',
                'country_name' => 'Rwanda',
            ),
            233 => 
            array (
                'id' => 530,
                'country_code' => 'KN',
                'country_name' => 'Saint Kitts and Nevis',
            ),
            234 => 
            array (
                'id' => 531,
                'country_code' => 'LC',
                'country_name' => 'Saint Lucia',
            ),
            235 => 
            array (
                'id' => 532,
                'country_code' => 'VC',
                'country_name' => 'Saint Vincent and the Grenadines',
            ),
            236 => 
            array (
                'id' => 533,
                'country_code' => 'WS',
                'country_name' => 'Samoa',
            ),
            237 => 
            array (
                'id' => 534,
                'country_code' => 'SM',
                'country_name' => 'San Marino',
            ),
            238 => 
            array (
                'id' => 535,
                'country_code' => 'ST',
                'country_name' => 'Sao Tome and Principe',
            ),
            239 => 
            array (
                'id' => 536,
                'country_code' => 'SA',
                'country_name' => 'Saudi Arabia',
            ),
            240 => 
            array (
                'id' => 537,
                'country_code' => 'SN',
                'country_name' => 'Senegal',
            ),
            241 => 
            array (
                'id' => 538,
                'country_code' => 'RS',
                'country_name' => 'Serbia',
            ),
            242 => 
            array (
                'id' => 539,
                'country_code' => 'SC',
                'country_name' => 'Seychelles',
            ),
            243 => 
            array (
                'id' => 540,
                'country_code' => 'SL',
                'country_name' => 'Sierra Leone',
            ),
            244 => 
            array (
                'id' => 541,
                'country_code' => 'SG',
                'country_name' => 'Singapore',
            ),
            245 => 
            array (
                'id' => 542,
                'country_code' => 'SK',
                'country_name' => 'Slovakia',
            ),
            246 => 
            array (
                'id' => 543,
                'country_code' => 'SI',
                'country_name' => 'Slovenia',
            ),
            247 => 
            array (
                'id' => 544,
                'country_code' => 'SB',
                'country_name' => 'Solomon Islands',
            ),
            248 => 
            array (
                'id' => 545,
                'country_code' => 'SO',
                'country_name' => 'Somalia',
            ),
            249 => 
            array (
                'id' => 546,
                'country_code' => 'ZA',
                'country_name' => 'South Africa',
            ),
            250 => 
            array (
                'id' => 547,
                'country_code' => 'GS',
                'country_name' => 'South Georgia South Sandwich Islands',
            ),
            251 => 
            array (
                'id' => 548,
                'country_code' => 'SS',
                'country_name' => 'South Sudan',
            ),
            252 => 
            array (
                'id' => 549,
                'country_code' => 'ES',
                'country_name' => 'Spain',
            ),
            253 => 
            array (
                'id' => 550,
                'country_code' => 'LK',
                'country_name' => 'Sri Lanka',
            ),
            254 => 
            array (
                'id' => 551,
                'country_code' => 'SH',
                'country_name' => 'St. Helena',
            ),
            255 => 
            array (
                'id' => 552,
                'country_code' => 'PM',
                'country_name' => 'St. Pierre and Miquelon',
            ),
            256 => 
            array (
                'id' => 553,
                'country_code' => 'SD',
                'country_name' => 'Sudan',
            ),
            257 => 
            array (
                'id' => 554,
                'country_code' => 'SR',
                'country_name' => 'Suriname',
            ),
            258 => 
            array (
                'id' => 555,
                'country_code' => 'SJ',
                'country_name' => 'Svalbard and Jan Mayen Islands',
            ),
            259 => 
            array (
                'id' => 556,
                'country_code' => 'SZ',
                'country_name' => 'Swaziland',
            ),
            260 => 
            array (
                'id' => 557,
                'country_code' => 'SE',
                'country_name' => 'Sweden',
            ),
            261 => 
            array (
                'id' => 558,
                'country_code' => 'CH',
                'country_name' => 'Switzerland',
            ),
            262 => 
            array (
                'id' => 559,
                'country_code' => 'SY',
                'country_name' => 'Syrian Arab Republic',
            ),
            263 => 
            array (
                'id' => 560,
                'country_code' => 'TW',
                'country_name' => 'Taiwan',
            ),
            264 => 
            array (
                'id' => 561,
                'country_code' => 'TJ',
                'country_name' => 'Tajikistan',
            ),
            265 => 
            array (
                'id' => 562,
                'country_code' => 'TZ',
                'country_name' => 'Tanzania, United Republic of',
            ),
            266 => 
            array (
                'id' => 563,
                'country_code' => 'TH',
                'country_name' => 'Thailand',
            ),
            267 => 
            array (
                'id' => 564,
                'country_code' => 'TG',
                'country_name' => 'Togo',
            ),
            268 => 
            array (
                'id' => 565,
                'country_code' => 'TK',
                'country_name' => 'Tokelau',
            ),
            269 => 
            array (
                'id' => 566,
                'country_code' => 'TO',
                'country_name' => 'Tonga',
            ),
            270 => 
            array (
                'id' => 567,
                'country_code' => 'TT',
                'country_name' => 'Trinidad and Tobago',
            ),
            271 => 
            array (
                'id' => 568,
                'country_code' => 'TN',
                'country_name' => 'Tunisia',
            ),
            272 => 
            array (
                'id' => 569,
                'country_code' => 'TR',
                'country_name' => 'Turkey',
            ),
            273 => 
            array (
                'id' => 570,
                'country_code' => 'TM',
                'country_name' => 'Turkmenistan',
            ),
            274 => 
            array (
                'id' => 571,
                'country_code' => 'TC',
                'country_name' => 'Turks and Caicos Islands',
            ),
            275 => 
            array (
                'id' => 572,
                'country_code' => 'TV',
                'country_name' => 'Tuvalu',
            ),
            276 => 
            array (
                'id' => 573,
                'country_code' => 'UG',
                'country_name' => 'Uganda',
            ),
            277 => 
            array (
                'id' => 574,
                'country_code' => 'UA',
                'country_name' => 'Ukraine',
            ),
            278 => 
            array (
                'id' => 575,
                'country_code' => 'AE',
                'country_name' => 'United Arab Emirates',
            ),
            279 => 
            array (
                'id' => 576,
                'country_code' => 'GB',
                'country_name' => 'United Kingdom',
            ),
            280 => 
            array (
                'id' => 577,
                'country_code' => 'US',
                'country_name' => 'United States',
            ),
            281 => 
            array (
                'id' => 578,
                'country_code' => 'UM',
                'country_name' => 'United States minor outlying islands',
            ),
            282 => 
            array (
                'id' => 579,
                'country_code' => 'UY',
                'country_name' => 'Uruguay',
            ),
            283 => 
            array (
                'id' => 580,
                'country_code' => 'UZ',
                'country_name' => 'Uzbekistan',
            ),
            284 => 
            array (
                'id' => 581,
                'country_code' => 'VU',
                'country_name' => 'Vanuatu',
            ),
            285 => 
            array (
                'id' => 582,
                'country_code' => 'VA',
                'country_name' => 'Vatican City State',
            ),
            286 => 
            array (
                'id' => 583,
                'country_code' => 'VE',
                'country_name' => 'Venezuela',
            ),
            287 => 
            array (
                'id' => 584,
                'country_code' => 'VN',
                'country_name' => 'Vietnam',
            ),
            288 => 
            array (
                'id' => 585,
                'country_code' => 'VG',
            'country_name' => 'Virgin Islands (British)',
            ),
            289 => 
            array (
                'id' => 586,
                'country_code' => 'VI',
            'country_name' => 'Virgin Islands (U.S.)',
            ),
            290 => 
            array (
                'id' => 587,
                'country_code' => 'WF',
                'country_name' => 'Wallis and Futuna Islands',
            ),
            291 => 
            array (
                'id' => 588,
                'country_code' => 'EH',
                'country_name' => 'Western Sahara',
            ),
            292 => 
            array (
                'id' => 589,
                'country_code' => 'YE',
                'country_name' => 'Yemen',
            ),
            293 => 
            array (
                'id' => 590,
                'country_code' => 'ZR',
                'country_name' => 'Zaire',
            ),
            294 => 
            array (
                'id' => 591,
                'country_code' => 'ZM',
                'country_name' => 'Zambia',
            ),
            295 => 
            array (
                'id' => 592,
                'country_code' => 'ZW',
                'country_name' => 'Zimbabwe',
            ),
        ));
 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries');
    }
};
