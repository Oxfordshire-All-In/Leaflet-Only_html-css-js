// temporary testing data - would be imported from database in website
const data = [
    {
      "Name of your group/organisation/service": "Great Western Park Residents Association",
      "Postcode": "OX11 6AL",
      "Locations reached": "Didcot",
      "Link for your website or Facebook page (if applicable)": "https://www.gwpra.org.uk/covid19",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Gareth",
      "Last name of key point of contact": "Clarke",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Collecting shopping for the elderly/ people in social isolation, Picking up medication for the elderly/ people in social isolation, Helping with dog walking, Offering online support to people in social isolation, Free food deliveries in partnership with SOFEA",
      "Approximately how many volunteers are currently a part of your group?": 85,
      "Latitude": 51.612237,
      "Longitude": -1.263434
    },
    {
      "Name of your group/organisation/service": "KEEN Oxford",
      "Postcode": "OX4 1DA",
      "Locations reached": "Mainly central Oxford + Abingdon / Witney & surrounding area",
      "Link for your website or Facebook page (if applicable)": "https://www.keenoxford.org",
      "Links for your social media (if applicable)": "https://www.facebook.com/KEENOxford/; https://www.instagram.com/keenoxford/",
      "First name of a key point of contact in your group": "Rowan",
      "Last name of key point of contact": "Green",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Collecting shopping for the elderly/ people in social isolation, Picking up medication for the elderly/ people in social isolation, Offering childcare, Helping with dog walking, Providing updates on the current situation, Offering online support to people in social isolation, virtual inclusive sports/art etc (disability focussed)",
      "Approximately how many volunteers are currently a part of your group?": 40,
      "Latitude": 51.749946,
      "Longitude": -1.236705
    },
    {
      "Name of your group/organisation/service": "My Life My Choice",
      "Postcode": "OX4 6NF",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.mylifemychoice.org.uk/",
      "Links for your social media (if applicable)": "https://www.facebook.com/1MLMC/; https://twitter.com/mylifemychoice1",
      "First name of a key point of contact in your group": "Jess",
      "Last name of key point of contact": "Tilling",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Providing updates on the current situation, Offering online support to people in social isolation, Offering advice, We are offering a phone service to people with learning disabilities. We will be available Monday - Friday 10:00 - 16:00 to take calls and provide signposting. We will also be calling people weekly to see how they are, if they need any support and just for a chat.",
      "Approximately how many volunteers are currently a part of your group?": 7,
      "Latitude": 51.727318,
      "Longitude": -1.195388
    },
    {
      "Name of your group/organisation/service": "SHIFT",
      "Postcode": "OX14 1PL",
      "Locations reached": "Abingdon based usually but anywhere on Facebook",
      "Link for your website or Facebook page (if applicable)": "https://www.shift-abingdon.org.uk/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Sally",
      "Last name of key point of contact": "Foulsham",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Offering support to parents of children with special needs and diabilities",
      "Approximately how many volunteers are currently a part of your group?": 8,
      "Latitude": 51.68172,
      "Longitude": -1.276529
    },
    {
      "Name of your group/organisation/service": "The Archway Foundation",
      "Postcode": "OX3 0DL",
      "Locations reached": "Oxford and Abingdon",
      "Link for your website or Facebook page (if applicable)": "www.archwayfoundation.org.uk",
      "Links for your social media (if applicable)": "https://twitter.com/archwaycharity",
      "First name of a key point of contact in your group": "The Archway",
      "Last name of key point of contact": "Office",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Offering telephone, email and postal contact to adults experiencing loneliness and islotaion, signposting to sources of help and advice adn where appropriate and possible offering practical support e.g. with shopping",
      "Approximately how many volunteers are currently a part of your group?": 19,
      "Latitude": 51.763092,
      "Longitude": -1.2326
    },
    {
      "Name of your group/organisation/service": "Oxford Hub",
      "Postcode": "OX1 3DH",
      "Locations reached": "All Oxford City locations",
      "Link for your website or Facebook page (if applicable)": "www.oxfordtogether.org",
      "Links for your social media (if applicable)": "https://www.facebook.com/OxfordHub/",
      "First name of a key point of contact in your group": "Lizzie",
      "Last name of key point of contact": "Shelmerdine",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Collecting shopping for the elderly/ people in social isolation, Picking up medication for the elderly/ people in social isolation, Helping with dog walking, Offering online support to people in social isolation, Providing phone call check-ins to people in social isolation, coordinating street efforts.",
      "Approximately how many volunteers are currently a part of your group?": 2000,
      "Latitude": 51.753932,
      "Longitude": -1.256775
    },
    {
      "Name of your group/organisation/service": "Q1 Foundation Charity",
      "Postcode": "RG89AY",
      "Locations reached": "Goring and Streatley",
      "Link for your website or Facebook page (if applicable)": "facebook.com/q1carehub",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Debs",
      "Last name of key point of contact": "Newell-Akers",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Collecting shopping for the elderly/ people in social isolation, Offering childcare, Providing updates on the current situation, Offering online support to people in social isolation, Offering advice, available for support, advice, signposting, in all aspects of social needs",
      "Approximately how many volunteers are currently a part of your group?": 10,
      "Latitude": 51.522451,
      "Longitude": -1.136476
    },
    {
      "Name of your group/organisation/service": "The Help Hub West Oxford",
      "Postcode": "ox20 1qw",
      "Locations reached": "Woodstock and Bladon",
      "Link for your website or Facebook page (if applicable)": "https://www.c-pow.org.uk/helping-hands-c-19.html",
      "Links for your social media (if applicable)": "@HelpingHandsOldWoodstock",
      "First name of a key point of contact in your group": "Claudia",
      "Last name of key point of contact": "House",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Collecting shopping for the elderly/ people in social isolation, Picking up medication for the elderly/ people in social isolation, Helping with dog walking, Offering online support to people in social isolation, Friendly phone calls",
      "Approximately how many volunteers are currently a part of your group?": 20,
      "Latitude": 51.843987,
      "Longitude": -1.345945
    },
    {
      "Name of your group/organisation/service": "Norham Manor Residents Association",
      "Postcode": "OX2 6SF",
      "Locations reached": "Norham Manor",
      "Link for your website or Facebook page (if applicable)": "Request adding to a group via community@oxfordshireallin.org",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Jeremy",
      "Last name of key point of contact": "Blanchard",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.766055,
      "Longitude": -1.257242
    },
    {
      "Name of your group/organisation/service": "Banbury Madni Masjid (Mosque)",
      "Postcode": "OX16 4RX",
      "Locations reached": "Banburyshire",
      "Link for your website or Facebook page (if applicable)": "https://m.facebook.com/story.php?story_fbid=525915914728187&id=123194928333623",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Abu Hassan Hanif",
      "Last name of key point of contact": "Yasmin kaduji",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.062246,
      "Longitude": -1.324515
    },
    {
      "Name of your group/organisation/service": "The Boys Brigade",
      "Postcode": "OX10 0AS",
      "Locations reached": "Wallingford and surrounding villages",
      "Link for your website or Facebook page (if applicable)": "http://1wallingford.boys-brigade.org.uk/",
      "Links for your social media (if applicable)": "https://www.facebook.com/wallingfordbb",
      "First name of a key point of contact in your group": "Nev",
      "Last name of key point of contact": "Keating",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.598482,
      "Longitude": -1.125261
    },
    {
      "Name of your group/organisation/service": "Oxfordshire Mind",
      "Postcode": "OX2 0DP",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/oxfordshiremind/?ref=bookmarks",
      "Links for your social media (if applicable)": "@oxfordshiremind",
      "First name of a key point of contact in your group": "Information",
      "Last name of key point of contact": "Service",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.748456,
      "Longitude": -1.277503
    },
    {
      "Name of your group/organisation/service": "Sh Ibn Baz Mosque",
      "Postcode": "OX16 0DH",
      "Locations reached": "Banbury - Woodgreen",
      "Link for your website or Facebook page (if applicable)": "https://m.facebook.com/parkroadmasjid/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Shameem",
      "Last name of key point of contact": "Ramzan",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.062142,
      "Longitude": -1.349299
    },
    {
      "Name of your group/organisation/service": "My Life My Choice",
      "Postcode": "OX4 6NF",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/1MLMC/",
      "Links for your social media (if applicable)": "https://twitter.com/mylifemychoice1",
      "First name of a key point of contact in your group": "Lisa",
      "Last name of key point of contact": "Davidson",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.727318,
      "Longitude": -1.195388
    },
    {
      "Name of your group/organisation/service": "Woolstone Parish Meeting",
      "Postcode": "SN7 7QL",
      "Locations reached": "Woolstone, Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "Request adding to a group via community@oxfordshireallin.org",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Sarah",
      "Last name of key point of contact": "Johnson",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.589254,
      "Longitude": -1.577226
    },
    {
      "Name of your group/organisation/service": "Action for Carers Oxfordshire",
      "Postcode": "OX14 3YT",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/AfCOxfordshireparents/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Michelle",
      "Last name of key point of contact": "Evans",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.672496,
      "Longitude": -1.265856
    },
    {
      "Name of your group/organisation/service": "Citizens Advice North Oxfordshire and South Northamptonshire",
      "Postcode": "OX16 5NG",
      "Locations reached": "Banbury, Bicester, Kidlington",
      "Link for your website or Facebook page (if applicable)": "www.canosn.org.uk",
      "Links for your social media (if applicable)": "https://www.facebook.com/BanburyCAB/   &   https://twitter.com/CA_NOSN",
      "First name of a key point of contact in your group": "Emily",
      "Last name of key point of contact": "Barcham",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.062744,
      "Longitude": -1.336163
    },
    {
      "Name of your group/organisation/service": "Peeple",
      "Postcode": "OX4 4NH",
      "Locations reached": "all",
      "Link for your website or Facebook page (if applicable)": "www.peeple.org.uk",
      "Links for your social media (if applicable)": "@peeplecentre   on twitter, facebook and Instagram",
      "First name of a key point of contact in your group": "Helen",
      "Last name of key point of contact": "Stroudley",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.721817,
      "Longitude": -1.218257
    },
    {
      "Name of your group/organisation/service": "Active Oxfordshire",
      "Postcode": "OX5 2DN",
      "Locations reached": "County -wide",
      "Link for your website or Facebook page (if applicable)": "www.activeoxfordshire.org",
      "Links for your social media (if applicable)": "@activeoxon",
      "First name of a key point of contact in your group": "Paul",
      "Last name of key point of contact": "Brivio",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.823558,
      "Longitude": -1.287359
    },
    {
      "Name of your group/organisation/service": "Yellow Submarine",
      "Postcode": "OX1 1HH",
      "Locations reached": "Oxfordshire-wide; but mainly Oxford city, Witney, Didcot and Abingdon",
      "Link for your website or Facebook page (if applicable)": "https://www.yellowsubmarine.org.uk/",
      "Links for your social media (if applicable)": "https://www.facebook.com/ysubcharity/; https://www.instagram.com/ysubcharity/; https://www.youtube.com/user/ysubcharity/; https://twitter.com/ysubcharity",
      "First name of a key point of contact in your group": "Jack",
      "Last name of key point of contact": "Barnett",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.752932,
      "Longitude": -1.265552
    },
    {
      "Name of your group/organisation/service": "ARK-T",
      "Postcode": "OX4 3LN",
      "Locations reached": "OX4",
      "Link for your website or Facebook page (if applicable)": "www.ark-t.org",
      "Links for your social media (if applicable)": "@ArkTOxford",
      "First name of a key point of contact in your group": "Emmy",
      "Last name of key point of contact": "O'Shaughnessy",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.730919,
      "Longitude": -1.218708
    },
    {
      "Name of your group/organisation/service": "Oxfordshire Association for the Blind",
      "Postcode": "OX1 4XL",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.oxeyes.org.uk",
      "Links for your social media (if applicable)": "https://www.facebook.com/Oxfordshire-Association-for-the-Blind-619825344746366/",
      "First name of a key point of contact in your group": "Mark",
      "Last name of key point of contact": "Upton",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.732099,
      "Longitude": -1.247923
    },
    {
      "Name of your group/organisation/service": "Oxford Mencap",
      "Postcode": "OX1",
      "Locations reached": "Oxfordshire - but mainly Oxford /headington",
      "Link for your website or Facebook page (if applicable)": "Www.oxfordmencap.org",
      "Links for your social media (if applicable)": "Hill end holidays - Oxford mencap",
      "First name of a key point of contact in your group": "Katie",
      "Last name of key point of contact": "Hollier",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": "",
      "Longitude": ""
    },
    {
      "Name of your group/organisation/service": "Volunteer Driver Service North Oxfordshire",
      "Postcode": "OX16 5NG",
      "Locations reached": "Oxfordshire, South Northamptonshire",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/VolunteerDriverServiceNorthOxfordshire/",
      "Links for your social media (if applicable)": "https://www.facebook.com/VolunteerDriverServiceNorthOxfordshire/",
      "First name of a key point of contact in your group": "Keith",
      "Last name of key point of contact": "Davies",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.062744,
      "Longitude": -1.336163
    },
    {
      "Name of your group/organisation/service": "Oxfordshire Family Support Network",
      "Postcode": "OX11 7QH",
      "Locations reached": "Countywide",
      "Link for your website or Facebook page (if applicable)": "www.oxfsn.org.uk",
      "Links for your social media (if applicable)": "@oxfsn (Twitter) Oxfordshire Family Support Network (facebook)",
      "First name of a key point of contact in your group": "Gail",
      "Last name of key point of contact": "Hanrahan",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.609901,
      "Longitude": -1.230463
    },
    {
      "Name of your group/organisation/service": "Didcot Volunteer Drivers",
      "Postcode": "OX11 8RQ",
      "Locations reached": "Didcot and surrounding villages",
      "Link for your website or Facebook page (if applicable)": "didcotvolunteerdrivers.org.uk",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Margaret",
      "Last name of key point of contact": "Abbott",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.606109,
      "Longitude": -1.240476
    },
    {
      "Name of your group/organisation/service": "Shift",
      "Postcode": "OX14",
      "Locations reached": "Abingdon and surrounding areas",
      "Link for your website or Facebook page (if applicable)": "www.shift-abingdon.org.uk",
      "Links for your social media (if applicable)": "https://www.facebook.com/ShiftAbingdon/?modal=admin_todo_tour",
      "First name of a key point of contact in your group": "Jules",
      "Last name of key point of contact": "Francis-Sinclair",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": "",
      "Longitude": ""
    },
    {
      "Name of your group/organisation/service": "Berinsfield Information & Volunteer Centre",
      "Postcode": "OX10 7NE",
      "Locations reached": "Berinsfield and surrounding villages",
      "Link for your website or Facebook page (if applicable)": "Email: help@bivc.org.uk",
      "Links for your social media (if applicable)": "n/a",
      "First name of a key point of contact in your group": "Caroline",
      "Last name of key point of contact": "Wade",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.663989,
      "Longitude": -1.176774
    },
    {
      "Name of your group/organisation/service": "Citizens Advice North Oxon",
      "Postcode": "OX165NG",
      "Locations reached": "Cherwell",
      "Link for your website or Facebook page (if applicable)": "https://www.canosn.org.uk/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Pat",
      "Last name of key point of contact": "Coomber-Wood",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.062744,
      "Longitude": -1.336163
    },
    {
      "Name of your group/organisation/service": "Aspire Oxfordshire",
      "Postcode": "OX1 1NJ",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.aspireoxfordshire.org/",
      "Links for your social media (if applicable)": "https://twitter.com/aspireoxford\nhttps://www.facebook.com/AspireOxOnline/",
      "First name of a key point of contact in your group": "Paul",
      "Last name of key point of contact": "Roberts",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.751144,
      "Longitude": -1.2667
    },
    {
      "Name of your group/organisation/service": "Food for Charities",
      "Postcode": "OX2 0LX",
      "Locations reached": "Anywhere in the Oxford area, with a focus on West Oxford",
      "Link for your website or Facebook page (if applicable)": "https://foodforcharities.com/botley/",
      "Links for your social media (if applicable)": "https://www.facebook.com/Botley-Community-Fridge-1794227194237734/?ref=bookmarks (or search for Botley Community Fridge)",
      "First name of a key point of contact in your group": "Riki",
      "Last name of key point of contact": "Therivel",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.751517,
      "Longitude": -1.294432
    },
    {
      "Name of your group/organisation/service": "Bardwell Branch-Out",
      "Postcode": "OX26 4RZ",
      "Locations reached": "Bicester, Banbury, Kidlington, Oxford.",
      "Link for your website or Facebook page (if applicable)": "https://twitter.com/BWBranchout",
      "Links for your social media (if applicable)": "https://twitter.com/BWBranchout",
      "First name of a key point of contact in your group": "Rich",
      "Last name of key point of contact": "Mills",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "supporting Bardwell Branch-Out families.",
      "Approximately how many volunteers are currently a part of your group?": 0,
      "Latitude": 51.910562,
      "Longitude": -1.142414
    },
    {
      "Name of your group/organisation/service": "WeSET ( Westmill Sustainable Energy Trust",
      "Postcode": "SN6 8TH",
      "Locations reached": "principally within a 25 mile radius but we receive visitors from all over the world",
      "Link for your website or Facebook page (if applicable)": "http://www.weset.org/?page_id=102",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Robert",
      "Last name of key point of contact": "Tapsfield",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.616828,
      "Longitude": -1.665781
    },
    {
      "Name of your group/organisation/service": "Oxford Poetry Library",
      "Postcode": "OX4 1XR",
      "Locations reached": "Oxford",
      "Link for your website or Facebook page (if applicable)": "www.oxfordpoetrylibrary.co.uk",
      "Links for your social media (if applicable)": "Twitter: @OxPoetryLibrary\nInsta: https://www.instagram.com/oxfordpoetrylibrary/\nFacebook: https://www.facebook.com/oxpoetrylibrary",
      "First name of a key point of contact in your group": "Phoebe",
      "Last name of key point of contact": "Nicholson",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.748936,
      "Longitude": -1.232029
    },
    {
      "Name of your group/organisation/service": "Low Carbon South Oxford",
      "Postcode": "OX1 4TL",
      "Locations reached": "South Oxford (New Hinksey, Grandpont, Cold Harbour, Weirs Lane)",
      "Link for your website or Facebook page (if applicable)": "http://www.lowcarbonsouthoxford.org.uk/",
      "Links for your social media (if applicable)": "None",
      "First name of a key point of contact in your group": "Philippa",
      "Last name of key point of contact": "Muir",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.734441,
      "Longitude": -1.251418
    },
    {
      "Name of your group/organisation/service": "Soundabout",
      "Postcode": "OX11 7NE",
      "Locations reached": "Oxfordshire (and beyond)",
      "Link for your website or Facebook page (if applicable)": "www.soundabout.org.uk",
      "Links for your social media (if applicable)": "twitter.com/soundaboutuk, facebook.com/soundaboutuk, instagram.com/soundabout.uk youtube.com/soundabout",
      "First name of a key point of contact in your group": "Clare",
      "Last name of key point of contact": "Cook",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.608164,
      "Longitude": -1.239864
    },
    {
      "Name of your group/organisation/service": "North Oxfordshire Community Foodbank",
      "Postcode": "OX5 2DS",
      "Locations reached": "Kidlington, Chipping Norton, Woodstock, Charlbury and surrounding villages.",
      "Link for your website or Facebook page (if applicable)": "@northoxfordcommunityfoodbank",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Melvina",
      "Last name of key point of contact": "Fawcett",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.825084,
      "Longitude": -1.283609
    },
    {
      "Name of your group/organisation/service": "Royal Voluntary Service",
      "Postcode": "OX16 5NT",
      "Locations reached": "14 miles radius of Banbury",
      "Link for your website or Facebook page (if applicable)": "https://www.royalvoluntaryservice.org.uk/",
      "Links for your social media (if applicable)": "https://twitter.com/RVSOxon/status/1239923752890228736",
      "First name of a key point of contact in your group": "Steve",
      "Last name of key point of contact": "Kilsby",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.063161,
      "Longitude": -1.336608
    },
    {
      "Name of your group/organisation/service": "Citizens Advice West Oxfordshire",
      "Postcode": "OX286DY",
      "Locations reached": "West Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/CitizensAdviceWestOxon/",
      "Links for your social media (if applicable)": "https://twitter.com/CAwestoxon",
      "First name of a key point of contact in your group": "Adviceline",
      "Last name of key point of contact": "Adviceline",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.784257,
      "Longitude": -1.486905
    },
    {
      "Name of your group/organisation/service": "Age Concern Chipping Norton",
      "Postcode": "OX7 5EE                (AGE CONCERN, 73, BURFORD ROAD CHIPPING NORTON OXON OX75EE)",
      "Locations reached": "Chipping Norton and surrounding villages",
      "Link for your website or Facebook page (if applicable)": "Request adding to a group via community@oxfordshireallin.org",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Joyce",
      "Last name of key point of contact": "Taylor",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "Hub for cordinating",
      "Approximately how many volunteers are currently a part of your group?": 5,
      "Latitude": "",
      "Longitude": ""
    },
    {
      "Name of your group/organisation/service": "Low Carbon Oxford North",
      "Postcode": "OX2 7QD",
      "Locations reached": "North Oxford",
      "Link for your website or Facebook page (if applicable)": "www.lcon.org.uk",
      "Links for your social media (if applicable)": "Facebook: @taketheco2outofox2 Twitter: @LowCON",
      "First name of a key point of contact in your group": "Julia",
      "Last name of key point of contact": "Patrick",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.782097,
      "Longitude": -1.264647
    },
    {
      "Name of your group/organisation/service": "OYAP",
      "Postcode": "OX26 6TB",
      "Locations reached": "Bicester",
      "Link for your website or Facebook page (if applicable)": "www.oyap.org.uk",
      "Links for your social media (if applicable)": "https://www.facebook.com/oyaptrustpage?fref=ts",
      "First name of a key point of contact in your group": "Helen",
      "Last name of key point of contact": "Le Brocq",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.897788,
      "Longitude": -1.1502
    },
    {
      "Name of your group/organisation/service": "Oxfordshire Youth",
      "Postcode": "OX3 9HY",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "oxfordshireyouth.org",
      "Links for your social media (if applicable)": "Twitter: @OxYouth Facebook: Oxfordshire Youth",
      "First name of a key point of contact in your group": "David",
      "Last name of key point of contact": "Cruchley",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.762894,
      "Longitude": -1.209506
    },
    {
      "Name of your group/organisation/service": "Oxford and District Mencap",
      "Postcode": "OX2 7LD",
      "Locations reached": "Oxford and surrounding area",
      "Link for your website or Facebook page (if applicable)": "Oxford Mencap.org.uk",
      "Links for your social media (if applicable)": "Hill End Holidays Oxford Mencap",
      "First name of a key point of contact in your group": "Julia",
      "Last name of key point of contact": "Fairbairn",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.782014,
      "Longitude": -1.271578
    },
    {
      "Name of your group/organisation/service": "Banburyshire Advice Centre",
      "Postcode": "OX16 5TH",
      "Locations reached": "Banbury",
      "Link for your website or Facebook page (if applicable)": "http://banburycp.moonfruit.com/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Andy",
      "Last name of key point of contact": "Willis BCAv",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.060079,
      "Longitude": -1.337238
    },
    {
      "Name of your group/organisation/service": "Age UK Oxfordshire",
      "Postcode": "OX14 3YT",
      "Locations reached": "All of Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://www.ageuk.org.uk/oxfordshire/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Ruth",
      "Last name of key point of contact": "Swift",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.672496,
      "Longitude": -1.265856
    },
    {
      "Name of your group/organisation/service": "Flo's - The Place in the Park",
      "Postcode": "OX4 3JZ",
      "Locations reached": "Florence Park and beyond",
      "Link for your website or Facebook page (if applicable)": "www.flosoxford.org.uk",
      "Links for your social media (if applicable)": "https://www.facebook.com/flosoxford/\n@flosoxford",
      "First name of a key point of contact in your group": "Candida",
      "Last name of key point of contact": "March",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.735765,
      "Longitude": -1.221835
    },
    {
      "Name of your group/organisation/service": "ocva",
      "Postcode": "OX1 1SS",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "ocva.org.uk",
      "Links for your social media (if applicable)": "https://oxonvolunteers.org/",
      "First name of a key point of contact in your group": "Tariq",
      "Last name of key point of contact": "Khandoker",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.748331,
      "Longitude": -1.255491
    },
    {
      "Name of your group/organisation/service": "Hooky Neighbours",
      "Postcode": "OX15 5NG",
      "Locations reached": "Hook Norton and environs",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/Hooky-Neighbours-1562453240542479/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Paul",
      "Last name of key point of contact": "Cann",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.995093,
      "Longitude": -1.482432
    },
    {
      "Name of your group/organisation/service": "Stonehill Community garden",
      "Postcode": "OX14 4AA",
      "Locations reached": "Drayton, Abingdon, Didcot and surrounding villages",
      "Link for your website or Facebook page (if applicable)": "http://www.stonehillgardens.co.uk/",
      "Links for your social media (if applicable)": "https://en-gb.facebook.com/StonehillCommunityGarden/",
      "First name of a key point of contact in your group": "Joanna",
      "Last name of key point of contact": "Tamburino",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.656831,
      "Longitude": -1.298523
    },
    {
      "Name of your group/organisation/service": "Salvation Army, Banbury",
      "Postcode": "OX16 5BH",
      "Locations reached": "Banbury and local villiages",
      "Link for your website or Facebook page (if applicable)": "www.salvationarmy.org.uk/bannury",
      "Links for your social media (if applicable)": "Facebook",
      "First name of a key point of contact in your group": "Malcolm",
      "Last name of key point of contact": "Anderson",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.060681,
      "Longitude": -1.335157
    },
    {
      "Name of your group/organisation/service": "Green Tea",
      "Postcode": "ox294be",
      "Locations reached": "Eynsham",
      "Link for your website or Facebook page (if applicable)": "https://eynsham-pc.gov.uk/org.aspx?n=GreenTEA",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "tony",
      "Last name of key point of contact": "bovey",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.781101,
      "Longitude": -1.382166
    },
    {
      "Name of your group/organisation/service": "The Police Rehabilitation Centre",
      "Postcode": "RG8 0LL",
      "Locations reached": "Thames Valley and beyond",
      "Link for your website or Facebook page (if applicable)": "Request adding to a group via community@oxfordshireallin.org",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Tom",
      "Last name of key point of contact": "McAuslin",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.522543,
      "Longitude": -1.118601
    },
    {
      "Name of your group/organisation/service": "Home-Start Banbury, Bicester & Chipping Norton",
      "Postcode": "OX16 5DN",
      "Locations reached": "Banbury, Bicester, Chipping Norton and surrounding villages",
      "Link for your website or Facebook page (if applicable)": "https://en-gb.facebook.com/homestartbcn/",
      "Links for your social media (if applicable)": "https://twitter.com/HomestartBCN",
      "First name of a key point of contact in your group": "Jane",
      "Last name of key point of contact": "Skelton",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.059422,
      "Longitude": -1.333528
    },
    {
      "Name of your group/organisation/service": "Emmaus Oxford",
      "Postcode": "OX4 2ES",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "https://emmaus.org.uk/oxford/",
      "Links for your social media (if applicable)": "https://www.facebook.com/emmausoxford/\nhttps://twitter.com/home?lang=en-gb\nhttps://www.instagram.com/oxfordemmaus/",
      "First name of a key point of contact in your group": "Hannah",
      "Last name of key point of contact": "Hutchings",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.735309,
      "Longitude": -1.214911
    },
    {
      "Name of your group/organisation/service": "Little Wild Things",
      "Postcode": "OX73QH",
      "Locations reached": "Charlbury, Chipping Norton, Witney, Oxford, surrounding villages",
      "Link for your website or Facebook page (if applicable)": "http://www.littlewildthings.org.uk or https://www.facebook.com/1ittlewildthings/",
      "Links for your social media (if applicable)": "https://www.instagram.com/littlewildadventures/",
      "First name of a key point of contact in your group": "Christine",
      "Last name of key point of contact": "Donaldson",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.874465,
      "Longitude": -1.485226
    },
    {
      "Name of your group/organisation/service": "Banbury Young Homeless Project (BYHP)",
      "Postcode": "OX164TL",
      "Locations reached": "Banbury, Brackley, Bicester and Chipping Norton",
      "Link for your website or Facebook page (if applicable)": "www.byhp.org.uk",
      "Links for your social media (if applicable)": "Facebook",
      "First name of a key point of contact in your group": "Patrick",
      "Last name of key point of contact": "Vercoe",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.059133,
      "Longitude": -1.322535
    },
    {
      "Name of your group/organisation/service": "M&A SOCIAL ENTERPRISE",
      "Postcode": "OX3 0PL",
      "Locations reached": "Ethnic Minority Women in East Oxford",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/masocialenterprise/",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Anjum",
      "Last name of key point of contact": "Ahmed",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.774727,
      "Longitude": -1.236925
    },
    {
      "Name of your group/organisation/service": "Syrian Community Oxfordshire",
      "Postcode": "OX3 0HS",
      "Locations reached": "Oxford city and some areas in Oxfordshire, like Wintage, Bicester, Banbury, Kindlington and Witeny",
      "Link for your website or Facebook page (if applicable)": "https://www.facebook.com/groups/syrianinoxford/",
      "Links for your social media (if applicable)": "Twitter :@syrcox",
      "First name of a key point of contact in your group": "Hadi",
      "Last name of key point of contact": "Nuri",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.753025,
      "Longitude": -1.231814
    },
    {
      "Name of your group/organisation/service": "Oxfordshire Woodland Group",
      "Postcode": "OX12 8PP",
      "Locations reached": "Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "http://oxfordshirewoodlandgroup.co.uk",
      "Links for your social media (if applicable)": "https://twitter.com/OWGGroup",
      "First name of a key point of contact in your group": "Executive",
      "Last name of key point of contact": "Trustee",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.592962,
      "Longitude": -1.381242
    },
    {
      "Name of your group/organisation/service": "Thame Players Theatre Company",
      "Postcode": "OX9 7BN",
      "Locations reached": "Thame and villages within 10-mile radius",
      "Link for your website or Facebook page (if applicable)": "www.thameplayers.co.uk",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Helen",
      "Last name of key point of contact": "Johns",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.711335,
      "Longitude": -1.004431
    },
    {
      "Name of your group/organisation/service": "Be Free Young Carers",
      "Postcode": "OX11 0QG",
      "Locations reached": "Vale of White Horse and South Oxfordshire",
      "Link for your website or Facebook page (if applicable)": "WEBSITE www.befreeycorg.uk     FACEBOOK www.facebook.com/befreeyc/",
      "Links for your social media (if applicable)": "https://twitter.com/BeFreeYC",
      "First name of a key point of contact in your group": "John",
      "Last name of key point of contact": "Tabor",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.5835,
      "Longitude": -1.310979
    },
    {
      "Name of your group/organisation/service": "Rose Hill and Iffley Low Carbon",
      "Postcode": "OX4 4JE",
      "Locations reached": "Rose Hill and Iffley",
      "Link for your website or Facebook page (if applicable)": "www.rhilc.wordpress.com",
      "Links for your social media (if applicable)": "facebook.com/rosehillandiffleylowcarbon",
      "First name of a key point of contact in your group": "Eleanor",
      "Last name of key point of contact": "Watts",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.728978,
      "Longitude": -1.229717
    },
    {
      "Name of your group/organisation/service": "Carterton",
      "Postcode": "OX18 3AA",
      "Locations reached": "Carterton",
      "Link for your website or Facebook page (if applicable)": "https://m.facebook.com/cartertonfamilycentre/?ref=bookmarks",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Jo",
      "Last name of key point of contact": "Smith",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.760356,
      "Longitude": -1.594525
    },
    {
      "Name of your group/organisation/service": "Didcot TRAIN Inspiring Young People",
      "Postcode": "OX11 8AD",
      "Locations reached": "Community of Didcot and immediate surroundings",
      "Link for your website or Facebook page (if applicable)": "www.didcottrain.org.uk",
      "Links for your social media (if applicable)": "@didcottrain",
      "First name of a key point of contact in your group": "Brian",
      "Last name of key point of contact": "McNamee",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.606224,
      "Longitude": -1.238813
    },
    {
      "Name of your group/organisation/service": "Witney Community Fridge",
      "Postcode": "OX28 6LS",
      "Locations reached": "Witney",
      "Link for your website or Facebook page (if applicable)": "https://facebook.com/witneyfridge",
      "Links for your social media (if applicable)": "https://facebook.com/witneyfridge",
      "First name of a key point of contact in your group": "James",
      "Last name of key point of contact": "Baughan",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.787315,
      "Longitude": -1.491408
    },
    {
      "Name of your group/organisation/service": "Hagbourne Parochial Charities",
      "Postcode": "OX11 9LS",
      "Locations reached": "East and West Hagbourne, Didcot-Northbourne",
      "Link for your website or Facebook page (if applicable)": "N/A",
      "Links for your social media (if applicable)": "",
      "First name of a key point of contact in your group": "Max",
      "Last name of key point of contact": "Beran",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.592164,
      "Longitude": -1.240723
    },
    {
      "Name of your group/organisation/service": "Kirtlington Youth club",
      "Postcode": "ox5 3Hs",
      "Locations reached": "Kirtlington and surrounding villages",
      "Link for your website or Facebook page (if applicable)": "N/A",
      "Links for your social media (if applicable)": "N/A",
      "First name of a key point of contact in your group": "Tony",
      "Last name of key point of contact": "Brett",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.877331,
      "Longitude": -1.275033
    },
    {
      "Name of your group/organisation/service": "African Families in the UK  (AFiUK) CIC",
      "Postcode": "OX4 6EB",
      "Locations reached": "Blackbird leys; littlemore; Rosehill; Barton; Cowley, shrivenhamowley; Heafing",
      "Link for your website or Facebook page (if applicable)": "https://business.facebook.com/africansinUK/?business_id=451399345",
      "Links for your social media (if applicable)": "@AfricansinUK",
      "First name of a key point of contact in your group": "Jacqui",
      "Last name of key point of contact": "GITAU",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.719386,
      "Longitude": -1.208369
    },
    {
      "Name of your group/organisation/service": "St Leonard's Church",
      "Postcode": "OX16 4RG",
      "Locations reached": "Grimsbury (Banbury)",
      "Link for your website or Facebook page (if applicable)": "www.saintleonards.org",
      "Links for your social media (if applicable)": "www.facebook.com/stleonardsbanbury",
      "First name of a key point of contact in your group": "Sue",
      "Last name of key point of contact": "Burchell",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 52.064299,
      "Longitude": -1.325126
    },
    {
      "Name of your group/organisation/service": "Waterways Residents Association CIC",
      "Postcode": "OX2 7NL",
      "Locations reached": "The Waterways neighbourhood in North Oxford, St Margarets ward.",
      "Link for your website or Facebook page (if applicable)": "http://www.thewaterways.co.uk/",
      "Links for your social media (if applicable)": "https://www.facebook.com/TheWaterwaysOxford",
      "First name of a key point of contact in your group": "Wendy",
      "Last name of key point of contact": "Stone",
      "Which of these best describes your group?": "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))",
      "What kind of support is your group hoping to offer?": "",
      "Approximately how many volunteers are currently a part of your group?": "",
      "Latitude": 51.77339,
      "Longitude": -1.269775
    }
  ]


// To check if a string is a valid url
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}


//create map (centered in oxford)
var map = L.map('map', {
	center: [51.7535, -1.2716],
	zoom: 10,
	maxZoom: 16,
});

//add tiles from mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlrZXdhbG1zbGV5IiwiYSI6ImNrOGRhNmFtYTB1NDgzaGx2emcyOGFmdmwifQ.0pmT0dDyyqU4oXgMdpbcLg', {		
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		access_token: 'pk.eyJ1IjoibWlrZXdhbG1zbGV5IiwiYSI6ImNrOGRhNmFtYTB1NDgzaGx2emcyOGFmdmwifQ.0pmT0dDyyqU4oXgMdpbcLg'
    }).addTo(map);

//create a marker default
var PointerIcon = L.Icon.extend({
	options: {
		iconAnchor: [15, 15],
		popupAnchor: [0, 0],
		iconSize: [30, 30],
	}
});

//create a marker with a popup for each group (from data dictionary)
data.map((org) => {
	position=[org["Latitude"], org["Longitude"]]
	name = org['Name of your group/organisation/service']
	website = org['Link for your website or Facebook page (if applicable)'];
	socialMedia = org['Links for your social media (if applicable)']

	// converts group names into a hyperlink for their respective websites
	if (website.substring(0,3) == "www") {
		website = "http://" + website;
		popupContent = '<a href="' + website + '" target="_blank"><b>' + name + '</b></a><br>';
	} else if (website.substring(0,4) == "http") {
		popupContent = '<a href="' + website + '" target="_blank"><b>' + name + '</b></a><br>';
	} else {
		popupContent = '<b>' + name + '</b><br>';
  	}

  	//add postcode and reach
  	popupContent += '<b>Postcode: </b>' + org['Postcode'].toUpperCase() + '<br><b>Locations Reached: </b>' + org['Locations reached'] + '<br>';

  	//check if need to add social media and make urls clickable links
  	if (socialMedia != "") {
  		socialMediaArr = socialMedia.split("\n").join(" \n ").split(" ");
  		var i;
		for (i = 0; i < socialMediaArr.length; i++) { 
  			if (socialMediaArr[i].substring(0,4) == "www.") {
  				socialMediaArr[i] = "http://" + socialMediaArr[i];
  			}
  			
  			if (validURL(socialMediaArr[i])) {
  				socialMediaArr[i] = '<a href="' + socialMediaArr[i] + '" target="_blank"><b>' + socialMediaArr[i] + '</a>';
  			}

		}

		socialMedia = socialMediaArr.join(" ");
  		popupContent += '<b>Social Media: </b>' + socialMedia + '<br>';
  	}

  	// add support
  	if (org['What kind of support is your group hoping to offer?'] != "") {
  		popupContent += '<b>Support Details: </b>' + org['What kind of support is your group hoping to offer?'] + '<br>';
  	}

  	// add group type
  	popupContent += '<b>Group Type: </b>' + org['Which of these best describes your group?']
	
	// choose picture of marker depending on group type
	picture_url = "../public/other.png"
	if (org["Which of these best describes your group?"] == "Community Organisation (e.g Registered Charity or CIC, Community Centre, religious community Hub, Social or Sports Club))") {
		picture_url = "../public/house_icon.png"
	} else if (org["Which of these best describes your group?"] == "Covid-19 Community Support Group (volunteer based)") {
		picture_url = "../public/heart_icon.png"
	} else if (org["Which of these best describes your group?"] == "Public body or Service (e.g. Parish Council, Town Council, District Council, statutory service, etc)") {
		picture_url = "../public/public.png"
	} else if (org["Which of these best describes your group?"] == "Business") {
		picture_url = "../public/business.png"
	} 
	
	// add marker to map
	var pointIcon = new PointerIcon({iconUrl: picture_url});
	L.marker(position, {icon: pointIcon}).addTo(map).bindPopup(popupContent);
});














