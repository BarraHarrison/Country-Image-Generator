const countries = [
    {"country": "USA", "city": "Washington, D.C."},
    {"country": "China", "city": "Beijing"},
    {"country": "Japan", "city": "Tokyo"},
    {"country": "Germany", "city": "Berlin"},
    {"country": "India", "city": "New Delhi"},
    {"country": "England", "city": "London"},
    {"country": "Scotland", "city": "Edinburgh"},
    {"country": "Wales", "city": "Cardiff"},
    {"country": "France", "city": "Paris"},
    {"country": "Italy", "city": "Rome"},
    {"country": "Canada", "city": "Ottawa"},
    {"country": "South Korea", "city": "Seoul"},
    {"country": "Russia", "city": "Moscow"},
    {"country": "Brazil", "city": "Brasilia"},
    {"country": "Australia", "city": "Canberra"},
    {"country": "Spain", "city": "Madrid"},
    {"country": "Mexico", "city": "Mexico City"},
    {"country": "Indonesia", "city": "Jakarta"},
    {"country": "Netherlands", "city": "Amsterdam"},
    {"country": "Saudi Arabia", "city": "Riyadh"},
    {"country": "Turkey", "city": "Ankara"},
    {"country": "Switzerland", "city": "Bern"},
    {"country": "Taiwan", "city": "Taipei"},
    {"country": "Poland", "city": "Warsaw"},
    {"country": "Sweden", "city": "Stockholm"},
    {"country": "Belgium", "city": "Brussels"},
    {"country": "Thailand", "city": "Bangkok"},
    {"country": "Argentina", "city": "Buenos Aires"},
    {"country": "Austria", "city": "Vienna"},
    {"country": "Norway", "city": "Oslo"},
    {"country": "United Arab Emirates", "city": "Abu Dhabi"},
    {"country": "Israel", "city": "Jerusalem"},
    {"country": "South Africa", "city": "Pretoria"},
    {"country": "Ireland", "city": "Dublin"},
    {"country": "Denmark", "city": "Copenhagen"},
    {"country": "Malaysia", "city": "Kuala Lumpur"},
    {"country": "Singapore", "city": "Singapore"},
    {"country": "Hong Kong", "city": "Hong Kong"},
    {"country": "Nigeria", "city": "Abuja"},
    {"country": "Philippines", "city": "Manila"},
    {"country": "Colombia", "city": "Bogotá"},
    {"country": "Pakistan", "city": "Islamabad"},
    {"country": "Chile", "city": "Santiago"},
    {"country": "Finland", "city": "Helsinki"},
    {"country": "Bangladesh", "city": "Dhaka"},
    {"country": "Egypt", "city": "Cairo"},
    {"country": "Vietnam", "city": "Hanoi"},
    {"country": "Portugal", "city": "Lisbon"},
    {"country": "Czech Republic", "city": "Prague"},
    {"country": "Romania", "city": "Bucharest"},
    {"country": "New Zealand", "city": "Wellington"},
    {"country": "Greece", "city": "Athens"},
    {"country": "Afghanistan", "city": "Kabul"},
    {"country": "Albania", "city": "Tirana"},
    {"country": "Algeria", "city": "Algiers"},
    {"country": "Andorra", "city": "Andorra la Vella"},
    {"country": "Angola", "city": "Luanda"},
    {"country": "Armenia", "city": "Yerevan"},
    {"country": "Azerbaijan", "city": "Baku"},
    {"country": "Bahrain", "city": "Manama"},
    {"country": "Barbados", "city": "Bridgetown"},
    {"country": "Belarus", "city": "Minsk"},
    {"country": "Belize", "city": "Belmopan"},
    {"country": "Benin", "city": "Porto-Novo"},
    {"country": "Bhutan", "city": "Thimphu"},
    {"country": "Bolivia", "city": "Sucre"},
    {"country": "Bosnia and Herzegovina", "city": "Sarajevo"},
    {"country": "Botswana", "city": "Gaborone"},
    {"country": "Brunei", "city": "Bandar Seri Begawan"},
    {"country": "Bulgaria", "city": "Sofia"},
    {"country": "Burkina Faso", "city": "Ouagadougou"},
    {"country": "Burundi", "city": "Gitega"},
    {"country": "Cabo Verde", "city": "Praia"},
    {"country": "Cambodia", "city": "Phnom Penh"},
    {"country": "Cameroon", "city": "Yaounde"},
    {"country": "Central African Republic", "city": "Bangui"},
    {"country": "Chad", "city": "N'Djamena"},
    {"country": "Comoros", "city": "Moroni"},
    {"country": "Costa Rica", "city": "San Jose"},
    {"country": "Croatia", "city": "Zagreb"},
    {"country": "Cuba", "city": "Havana"},
    {"country": "Cyprus", "city": "Nicosia"},
    {"country": "Djibouti", "city": "Djibouti"},
    {"country": "Dominica", "city": "Roseau"},
    {"country": "Dominican Republic", "city": "Santo Domingo"},
    {"country": "East Timor (Timor-Leste)", "city": "Dili"},
    {"country": "Ecuador", "city": "Quito"},
    {"country": "El Salvador", "city": "San Salvador"},
    {"country": "Equatorial Guinea", "city": "Malabo"},
    {"country": "Eritrea", "city": "Asmara"},
    {"country": "Estonia", "city": "Tallinn"},
    {"country": "Eswatini", "city": "Mbabane"},
    {"country": "Ethiopia", "city": "Addis Ababa"},
    {"country": "Fiji", "city": "Suva"},
    {"country": "Gabon", "city": "Libreville"},
    {"country": "Gambia", "city": "Banjul"},
    {"country": "Georgia", "city": "Tbilisi"},
    {"country": "Ghana", "city": "Accra"},
    {"country": "Grenada", "city": "St. George's"},
    {"country": "Guatemala", "city": "Guatemala City"},
    {"country": "Guinea", "city": "Conakry"},
    {"country": "Guinea-Bissau", "city": "Bissau"},
    {"country": "Guyana", "city": "Georgetown"},
    {"country": "Haiti", "city": "Port-au-Prince"},
    {"country": "Honduras", "city": "Tegucigalpa"},
    {"country": "Hungary", "city": "Budapest"},
    {"country": "Iceland", "city": "Reykjavik"},
    {"country": "Iraq", "city": "Baghdad"},
    {"country": "Jamaica", "city": "Kingston"},
    {"country": "Jordan", "city": "Amman"},
    {"country": "Kazakhstan", "city": "Nur-Sultan"},
    {"country": "Kenya", "city": "Nairobi"},
    {"country": "Kosovo", "city": "Pristina"},
    {"country": "Kuwait", "city": "Kuwait City"},
    {"country": "Kyrgyzstan", "city": "Bishkek"},
    {"country": "Laos", "city": "Vientiane"},
    {"country": "Latvia", "city": "Riga"},
    {"country": "Lebanon", "city": "Beirut"},
    {"country": "Lesotho", "city": "Maseru"},
    {"country": "Liberia", "city": "Monrovia"},
    {"country": "Libya", "city": "Tripoli"},
    {"country": "Liechtenstein", "city": "Vaduz"},
    {"country": "Lithuania", "city": "Vilnius"},
    {"country": "Luxembourg", "city": "Luxembourg City"},
    {"country": "Madagascar", "city": "Antananarivo"},
    {"country": "Malawi", "city": "Lilongwe"},
    {"country": "Maldives", "city": "Malé"},
    {"country": "Mali", "city": "Bamako"},
    {"country": "Malta", "city": "Valletta"},
    {"country": "Mauritania", "city": "Nouakchott"},
    {"country": "Mauritius", "city": "Port Louis"},
    {"country": "Moldova", "city": "Chișinău"},
    {"country": "Monaco", "city": "Monaco"},
    {"country": "Mongolia", "city": "Ulaanbaatar"},
    {"country": "Montenegro", "city": "Podgorica"},
    {"country": "Morocco", "city": "Rabat"},
    {"country": "Mozambique", "city": "Maputo"},
    {"country": "Myanmar", "city": "Naypyidaw"},
    {"country": "Namibia", "city": "Windhoek"},
    {"country": "Nepal", "city": "Kathmandu"},
    {"country": "Nicaragua", "city": "Managua"},
    {"country": "Niger", "city": "Niamey"},
    {"country": "North Macedonia", "city": "Skopje"},
    {"country": "Oman", "city": "Muscat"},
    {"country": "Panama", "city": "Panama City"},
    {"country": "Papua New Guinea", "city": "Port Moresby"},
    {"country": "Paraguay", "city": "Asunción"},
    {"country": "Peru", "city": "Lima"},
    {"country": "Qatar", "city": "Doha"},
    {"country": "Rwanda", "city": "Kigali"},
    {"country": "San Marino", "city": "San Marino"},
    {"country": "São Tomé and Príncipe", "city": "São Tomé"},
    {"country": "Senegal", "city": "Dakar"},
    {"country": "Serbia", "city": "Belgrade"},
    {"country": "Seychelles", "city": "Victoria"},
    {"country": "Sierra Leone", "city": "Freetown"},
    {"country": "Slovakia", "city": "Bratislava"},
    {"country": "Slovenia", "city": "Ljubljana"},
    {"country": "Solomon Islands", "city": "Honiara"},
    {"country": "Somalia", "city": "Mogadishu"},
    {"country": "Sri Lanka", "city": "Sri Jayawardenepura Kotte"},
    {"country": "Sudan", "city": "Khartoum"},
    {"country": "Suriname", "city": "Paramaribo"},
    {"country": "Syria", "city": "Damascus"},
    {"country": "Tajikistan", "city": "Dushanbe"},
    {"country": "Tanzania", "city": "Dodoma"},
    {"country": "Togo", "city": "Lomé"},
    {"country": "Tonga", "city": "Nuku'alofa"},
    {"country": "Trinidad and Tobago", "city": "Port of Spain"},
    {"country": "Tunisia", "city": "Tunis"},
    {"country": "Turkmenistan", "city": "Ashgabat"},
    {"country": "Tuvalu", "city": "Funafuti"},
    {"country": "Uganda", "city": "Kampala"},
    {"country": "Ukraine", "city": "Kyiv"},
    {"country": "Uruguay", "city": "Montevideo"},
    {"country": "Uzbekistan", "city": "Tashkent"},
    {"country": "Vanuatu", "city": "Port Vila"},
    {"country": "Vatican City (Holy See)", "city": "Vatican City"},
    {"country": "Venezuela", "city": "Caracas"},
    {"country": "Yemen", "city": "Sana'a"},
    {"country": "Zambia", "city": "Lusaka"},
    {"country": "Zimbabwe", "city": "Harare"}
];

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = countries;
}
