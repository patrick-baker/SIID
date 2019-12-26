-- 
-- These rules are from retext equality's en.json file
-- Don't copy/paste into Postico
-- I recommend using postico's Load Query button and selecting this file
-- 
-- 
--   Gendered Entries
INSERT INTO rules("data")VALUES
   ('{
    "id": "her-him",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "their": "a",
      "theirs": "a",
      "them": "a"
    },
    "inconsiderate": {
      "her": "female",
      "hers": "female",
      "him": "male",
      "his": "male"
    },
    "condition": "when referring to a person"
  }'),
   ('{
    "id": "he-she",
    "type": "or",
    "apostrophe": true,
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "they": "a",
      "it": "a"
    },
    "inconsiderate": {
      "she": "female",
      "he": "male",
      "she''d": "female",
      "he''d": "male",
      "she''ll": "female",
      "he''ll": "male",
      "she''s": "female",
      "he''s": "male"
    }
  }'),
   ('{
    "id": "herself-himself",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "themselves": "a",
      "theirself": "a",
      "self": "a"
    },
    "inconsiderate": {
      "herself": "female",
      "himself": "male"
    }
  }'),
   ('{
    "id": "boy-girl",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "kid": "a",
      "child": "a",
      "youth": "a"
    },
    "inconsiderate": {
      "girl": "female",
      "boy": "male"
    },
    "condition": "when referring to a person"
  }'),
   ('{
    "id": "gals-men",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "people": "a",
      "persons": "a",
      "folks": "a"
    },
    "inconsiderate": {
      "women": "female",
      "girls": "female",
      "gals": "female",
      "ladies": "female",
      "men": "male",
      "guys": "male",
      "dudes": "male",
      "gents": "male",
      "gentlemen": "male"
    }
  }'),
   ('{
    "id": "gal-guy",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "person": "a",
      "friend": "a",
      "pal": "a",
      "folk": "a",
      "individual": "a"
    },
    "inconsiderate": {
      "woman": "female",
      "gal": "female",
      "lady": "female",
      "babe": "female",
      "bimbo": "female",
      "chick": "female",
      "guy": "male",
      "lad": "male",
      "fellow": "male",
      "dude": "male",
      "bro": "male",
      "gentleman": "male"
    }
  }'),
   ('{
    "id": "fatherland-motherland",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "native land": "a",
      "homeland": "a"
    },
    "inconsiderate": {
      "motherland": "female",
      "fatherland": "male"
    }
  }'),
   ('{
    "id": "father-tongue-mother-tongue",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "native tongue": "a",
      "native language": "a"
    },
    "inconsiderate": {
      "mother tongue": "female",
      "father tongue": "male"
    }
  }'),
   ('{
    "id": "freshmen-freshwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "first-year students": "a",
      "freshers": "a"
    },
    "inconsiderate": {
      "freshwomen": "female",
      "freshmen": "male"
    }
  }'),
   ('{
    "id": "garbageman-garbagewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "garbage collector": "a",
      "waste collector": "a",
      "trash collector": "a"
    },
    "inconsiderate": {
      "garbagewoman": "female",
      "garbageman": "male"
    }
  }'),
   ('{
    "id": "garbagemen-garbagewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "garbage collectors": "a",
      "waste collectors": "a",
      "trash collectors": "a"
    },
    "inconsiderate": {
      "garbagewomen": "female",
      "garbagemen": "male"
    }
  }'),
   ('{
    "id": "chairman-chairwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "chair": "a",
      "head": "a",
      "chairperson": "a",
      "coordinator": "a",
      "committee head": "a",
      "moderator": "a",
      "presiding officer": "a"
    },
    "inconsiderate": {
      "chairwoman": "female",
      "chairman": "male"
    }
  }'),
   ('{
    "id": "committee-man-committee-woman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "committee member": "a"
    },
    "inconsiderate": {
      "committee woman": "female",
      "committee man": "male"
    }
  }'),
   ('{
    "id": "cowboy-cowgirl",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cowhand": "a"
    },
    "inconsiderate": {
      "cowgirl": "female",
      "cowboy": "male"
    }
  }'),
   ('{
    "id": "cowboys-cowgirls",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cowhands": "a"
    },
    "inconsiderate": {
      "cowgirls": "female",
      "cowboys": "male"
    }
  }'),
   ('{
    "id": "cattleman-cattlewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cattle rancher": "a"
    },
    "inconsiderate": {
      "cattlewoman": "female",
      "cattleman": "male"
    }
  }'),
   ('{
    "id": "cattlemen-cattlewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cattle ranchers": "a"
    },
    "inconsiderate": {
      "cattlewomen": "female",
      "cattlemen": "male"
    }
  }'),
   ('{
    "id": "chairmen-chairwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "chairs": "a",
      "chairpersons": "a",
      "coordinators": "a"
    },
    "inconsiderate": {
      "chairwomen": "female",
      "chairmen": "male"
    }
  }'),
   ('{
    "id": "postman-postwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "mail carrier": "a",
      "letter carrier": "a",
      "postal worker": "a"
    },
    "inconsiderate": {
      "postwoman": "female",
      "mailwoman": "female",
      "postman": "male",
      "mailman": "male"
    }
  }'),
   ('{
    "id": "postmen-postwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "mail carriers": "a",
      "letter carriers": "a",
      "postal workers": "a"
    },
    "inconsiderate": {
      "postwomen": "female",
      "mailwomen": "female",
      "postmen": "male",
      "mailmen": "male"
    }
  }'),
   ('{
    "id": "chick-cop-policeman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "officer": "a",
      "police officer": "a"
    },
    "inconsiderate": {
      "policewoman": "female",
      "policeman": "male",
      "chick cop": "female"
    }
  }'),
   ('{
    "id": "policemen-policewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "officers": "a",
      "police officers": "a"
    },
    "inconsiderate": {
      "policewomen": "female",
      "policemen": "male"
    }
  }'),
   ('{
    "id": "steward-stewardess",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "flight attendant": "a"
    },
    "inconsiderate": {
      "stewardess": "female",
      "steward": "male"
    }
  }'),
   ('{
    "id": "stewardesses-stewards",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "flight attendants": "a"
    },
    "inconsiderate": {
      "stewardesses": "female",
      "stewards": "male"
    }
  }'),
   ('{
    "id": "congressman-congresswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "member of congress": "a",
      "congress person": "a",
      "legislator": "a",
      "representative": "a"
    },
    "inconsiderate": {
      "congresswoman": "female",
      "congressman": "male"
    }
  }'),
   ('{
    "id": "congressmen-congresswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "members of congress": "a",
      "congress persons": "a",
      "legislators": "a",
      "representatives": "a"
    },
    "inconsiderate": {
      "congresswomen": "female",
      "congressmen": "male"
    }
  }'),
   ('{
    "id": "fireman-firewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "fire fighter": "a",
      "fire officer": "a"
    },
    "inconsiderate": {
      "firewoman": "female",
      "fireman": "male"
    }
  }'),
   ('{
    "id": "firemen-firewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "fire fighters": "a"
    },
    "inconsiderate": {
      "firewomen": "female",
      "firemen": "male"
    }
  }'),
   ('{
    "id": "fisherman-fisherwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "fisher": "a",
      "crew member": "a",
      "fisherfolk": "a",
      "angler": "a"
    },
    "inconsiderate": {
      "fisherwoman": "female",
      "fisherman": "male"
    }
  }'),
   ('{
    "id": "fishermen-fisherwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "fishers": "a"
    },
    "inconsiderate": {
      "fisherwomen": "female",
      "fishermen": "male"
    }
  }'),
   ('{
    "id": "brotherhood-sisterhood",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "kinship": "a",
      "community": "a"
    },
    "inconsiderate": {
      "sisterhood": "female",
      "brotherhood": "male"
    }
  }'),
   ('{
    "id": "common-girl-common-man",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "common person": "a",
      "average person": "a"
    },
    "inconsiderate": {
      "common girl": "female",
      "common man": "male"
    }
  }'),
   ('{
    "id": "salaryman-salarywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "business executive": "a",
      "entrepreneur": "a",
      "business person": "a",
      "professional": "a"
    },
    "inconsiderate": {
      "businesswoman": "female",
      "salarywoman": "female",
      "businessman": "male",
      "salaryman": "male"
    }
  }'),
   ('{
    "id": "salarymen-salarywomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "business executives": "a",
      "entrepreneurs": "a"
    },
    "inconsiderate": {
      "businesswomen": "female",
      "salarywomen": "female",
      "career girl": "female",
      "career woman": "female",
      "businessmen": "male",
      "salarymen": "male"
    }
  }'),
   ('{
    "id": "janitor-janitress",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cleaner": "a"
    },
    "inconsiderate": {
      "cleaning lady": "female",
      "cleaning girl": "female",
      "cleaning woman": "female",
      "janitress": "female",
      "cleaning man": "male",
      "cleaning boy": "male",
      "janitor": "male"
    }
  }'),
   ('{
    "id": "janitors-janitresses",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cleaners": "a",
      "housekeeping": "a"
    },
    "inconsiderate": {
      "cleaning ladies": "female",
      "cleaning girls": "female",
      "janitresses": "female",
      "cleaning men": "male",
      "janitors": "male"
    }
  }'),
   ('{
    "id": "delivery-boy-delivery-girl",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "courier": "a",
      "messenger": "a"
    },
    "inconsiderate": {
      "delivery girl": "female",
      "delivery boy": "male"
    }
  }'),
   ('{
    "id": "foreman-forewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "supervisor": "a",
      "shift boss": "a"
    },
    "inconsiderate": {
      "forewoman": "female",
      "foreman": "male"
    }
  }'),
   ('{
    "id": "frontman,-front-man-frontwoman,-front-woman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "lead": "a",
      "front": "a",
      "figurehead": "a"
    },
    "inconsiderate": {
      "frontwoman, front woman": "female",
      "frontman, front man": "male"
    }
  }'),
   ('{
    "id": "front-men,-frontmen-front-women,-frontwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "figureheads": "a"
    },
    "inconsiderate": {
      "front women, frontwomen": "female",
      "front men, frontmen": "male"
    }
  }'),
   ('{
    "id": "foremen-forewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "supervisors": "a",
      "shift bosses": "a"
    },
    "inconsiderate": {
      "forewomen": "female",
      "foremen": "male"
    }
  }'),
   ('{
    "id": "insurance-man-insurance-woman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "insurance agent": "a"
    },
    "inconsiderate": {
      "insurance woman": "female",
      "insurance man": "male"
    }
  }'),
   ('{
    "id": "insurance-men-insurance-women",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "insurance agents": "a"
    },
    "inconsiderate": {
      "insurance women": "female",
      "insurance men": "male"
    }
  }'),
   ('{
    "id": "landlady-landlord",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "proprietor": "a",
      "building manager": "a"
    },
    "inconsiderate": {
      "landlady": "female",
      "landlord": "male"
    }
  }'),
   ('{
    "id": "landladies-landlords",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "proprietors": "a",
      "building managers": "a"
    },
    "inconsiderate": {
      "landladies": "female",
      "landlords": "male"
    }
  }'),
   ('{
    "id": "alumna-alumnus",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "graduate": "a"
    },
    "inconsiderate": {
      "alumna": "female",
      "alumnus": "male"
    }
  }'),
   ('{
    "id": "alumnae-alumni",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "graduates": "a"
    },
    "inconsiderate": {
      "alumnae": "female",
      "alumni": "male"
    }
  }'),
   ('{
    "id": "newsman-newswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "anchor": "a",
      "journalist": "a"
    },
    "inconsiderate": {
      "newswoman": "female",
      "newspaperwoman": "female",
      "anchorwoman": "female",
      "newsman": "male",
      "newspaperman": "male",
      "anchorman": "male"
    }
  }'),
   ('{
    "id": "newsmen-newswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "anchors": "a",
      "journalists": "a"
    },
    "inconsiderate": {
      "newswomen": "female",
      "newspaperwomen": "female",
      "anchorwomen": "female",
      "newsmen": "male",
      "newspapermen": "male",
      "anchormen": "male"
    }
  }'),
   ('{
    "id": "repairman-repairwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "repairer": "a",
      "technician": "a"
    },
    "inconsiderate": {
      "repairwoman": "female",
      "repairman": "male"
    }
  }'),
   ('{
    "id": "repairmen-repairwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "technicians": "a"
    },
    "inconsiderate": {
      "repairwomen": "female",
      "repairmen": "male"
    }
  }'),
   ('{
    "id": "saleslady-salesman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "salesperson": "a",
      "sales clerk": "a",
      "sales rep": "a",
      "sales agent": "a",
      "sales attendant": "a",
      "seller": "a",
      "shop assistant": "a"
    },
    "inconsiderate": {
      "saleswoman": "female",
      "sales woman": "female",
      "saleslady": "female",
      "salesman": "male",
      "sales man": "male"
    }
  }'),
   ('{
    "id": "salesmen-saleswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "sales clerks": "a",
      "sales reps": "a",
      "sales agents": "a",
      "sellers": "a"
    },
    "inconsiderate": {
      "saleswomen": "female",
      "sales women": "female",
      "salesladies": "female",
      "salesmen": "male",
      "sales men": "male"
    }
  }'),
   ('{
    "id": "serviceman-servicewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "soldier": "a",
      "service representative": "a"
    },
    "inconsiderate": {
      "servicewoman": "female",
      "serviceman": "male"
    }
  }'),
   ('{
    "id": "servicemen-servicewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "soldiers": "a",
      "service representatives": "a"
    },
    "inconsiderate": {
      "servicewomen": "female",
      "servicemen": "male"
    }
  }'),
   ('{
    "id": "waiter-waitress",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "server": "a"
    },
    "inconsiderate": {
      "waitress": "female",
      "waiter": "male"
    }
  }'),
   ('{
    "id": "waiters-waitresses",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "servers": "a"
    },
    "inconsiderate": {
      "waitresses": "female",
      "waiters": "male"
    }
  }'),
   ('{
    "id": "workman-workwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "worker": "a",
      "wage earner": "a",
      "taxpayer": "a"
    },
    "inconsiderate": {
      "workwoman": "female",
      "working woman": "female",
      "workman": "male",
      "working man": "male"
    }
  }'),
   ('{
    "id": "workmen-workwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "workers": "a"
    },
    "inconsiderate": {
      "workwomen": "female",
      "workmen": "male"
    }
  }'),
   ('{
    "id": "actor-actress",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "performer": "a",
      "star": "a",
      "artist": "a",
      "entertainer": "a"
    },
    "inconsiderate": {
      "actress": "female",
      "actor": "male"
    }
  }'),
   ('{
    "id": "actors-actresses",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "performers": "a",
      "stars": "a",
      "artists": "a",
      "entertainers": "a"
    },
    "inconsiderate": {
      "actresses": "female",
      "actors": "male"
    }
  }'),
   ('{
    "id": "aircrewwoman-airman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "pilot": "a",
      "aviator": "a",
      "airstaff": "a"
    },
    "inconsiderate": {
      "aircrewwoman": "female",
      "aircrew woman": "female",
      "aircrewman": "male",
      "airman": "male"
    }
  }'),
   ('{
    "id": "aircrewwomen-airmen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "pilots": "a",
      "aviators": "a",
      "airstaff": "a"
    },
    "inconsiderate": {
      "aircrewwomen": "female",
      "aircrew women": "female",
      "aircrewmen": "male",
      "airmen": "male"
    }
  }'),
   ('{
    "id": "alderman-alderwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cabinet member": "a"
    },
    "inconsiderate": {
      "alderwoman": "female",
      "alderman": "male"
    }
  }'),
   ('{
    "id": "aldermen-alderwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "cabinet": "a",
      "cabinet members": "a",
      "alderperson": "a"
    },
    "inconsiderate": {
      "alderwomen": "female",
      "aldermen": "male"
    }
  }'),
   ('{
    "id": "assemblyman-assemblywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "assembly person": "a",
      "assembly worker": "a"
    },
    "inconsiderate": {
      "assemblywoman": "female",
      "assemblyman": "male"
    }
  }'),
   ('{
    "id": "aunt-uncle",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "relative": "a"
    },
    "inconsiderate": {
      "kinswoman": "female",
      "aunt": "female",
      "kinsman": "male",
      "uncle": "male"
    }
  }'),
   ('{
    "id": "aunts-uncles",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "relatives": "a"
    },
    "inconsiderate": {
      "kinswomen": "female",
      "aunts": "female",
      "kinsmen": "male",
      "uncles": "male"
    }
  }'),
   ('{
    "id": "boogeyman-boogeywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "boogeymonster": "a"
    },
    "inconsiderate": {
      "boogeywoman": "female",
      "boogeyman": "male"
    }
  }'),
   ('{
    "id": "boogieman-boogiewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "boogeymonster": "a"
    },
    "inconsiderate": {
      "boogiewoman": "female",
      "boogieman": "male"
    }
  }'),
   ('{
    "id": "bogeyman-bogeywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "bogeymonster": "a"
    },
    "inconsiderate": {
      "bogeywoman": "female",
      "bogeyman": "male"
    }
  }'),
   ('{
    "id": "bogieman-bogiewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "bogeymonster": "a"
    },
    "inconsiderate": {
      "bogiewoman": "female",
      "bogieman": "male"
    }
  }'),
   ('{
    "id": "boogiemen-boogiewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "boogeymonsters": "a"
    },
    "inconsiderate": {
      "boogiewomen": "female",
      "boogiemen": "male"
    }
  }'),
   ('{
    "id": "bogiemen-bogiewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "bogeymonsters": "a"
    },
    "inconsiderate": {
      "bogiewomen": "female",
      "bogiemen": "male"
    }
  }'),
   ('{
    "id": "bondsman-bondswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "bonder": "a"
    },
    "inconsiderate": {
      "bondswoman": "female",
      "bondsman": "male"
    }
  }'),
   ('{
    "id": "bondsmen-bondswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "bonders": "a"
    },
    "inconsiderate": {
      "bondswomen": "female",
      "bondsmen": "male"
    }
  }'),
   ('{
    "id": "husband-wife",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "partner": "a",
      "significant other": "a",
      "spouse": "a"
    },
    "inconsiderate": {
      "wife": "female",
      "husband": "male"
    },
    "note": "Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner"
  }'),
   ('{
    "id": "husbands-wives",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "partners": "a",
      "significant others": "a",
      "spouses": "a"
    },
    "inconsiderate": {
      "wives": "female",
      "husbands": "male"
    },
    "note": "Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner"
  }'),
   ('{
    "id": "boyfriend-girlfriend",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "partner": "a",
      "friend": "a",
      "significant other": "a"
    },
    "inconsiderate": {
      "girlfriend": "female",
      "boyfriend": "male"
    },
    "note": "Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner"
  }'),
   ('{
    "id": "boyfriends-girlfriends",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "partners": "a",
      "friends": "a",
      "significant others": "a"
    },
    "inconsiderate": {
      "girlfriends": "female",
      "boyfriends": "male"
    },
    "note": "Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner"
  }'),
   ('{
    "id": "boyhood-girlhood",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "childhood": "a"
    },
    "inconsiderate": {
      "girlhood": "female",
      "boyhood": "male"
    }
  }'),
   ('{
    "id": "boyish-girly",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "childish": "a"
    },
    "inconsiderate": {
      "girly": "female",
      "girlish": "female",
      "boyish": "male"
    }
  }'),
   ('{
    "id": "journeyman-journeywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "journeyperson": "a"
    },
    "inconsiderate": {
      "journeywoman": "female",
      "journeyman": "male"
    }
  }'),
   ('{
    "id": "journeymen-journeywomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "journeypersons": "a"
    },
    "inconsiderate": {
      "journeywomen": "female",
      "journeymen": "male"
    }
  }'),
   ('{
    "id": "godfather-godmother",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "godparent": "a",
      "elder": "a",
      "patron": "a"
    },
    "inconsiderate": {
      "godmother": "female",
      "patroness": "female",
      "godfather": "male"
    }
  }'),
   ('{
    "id": "granddaughter-grandson",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "grandchild": "a"
    },
    "inconsiderate": {
      "granddaughter": "female",
      "grandson": "male"
    }
  }'),
   ('{
    "id": "granddaughters-grandsons",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "grandchildren": "a"
    },
    "inconsiderate": {
      "granddaughters": "female",
      "grandsons": "male"
    }
  }'),
   ('{
    "id": "forefather-foremother",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "ancestor": "a"
    },
    "inconsiderate": {
      "foremother": "female",
      "forefather": "male"
    }
  }'),
   ('{
    "id": "forefathers-foremothers",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "ancestors": "a"
    },
    "inconsiderate": {
      "foremothers": "female",
      "forefathers": "male"
    }
  }'),
   ('{
    "id": "gramps-granny",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "grandparent": "a",
      "ancestor": "a"
    },
    "inconsiderate": {
      "granny": "female",
      "grandma": "female",
      "grandmother": "female",
      "grandpappy": "male",
      "granddaddy": "male",
      "gramps": "male",
      "grandpa": "male",
      "grandfather": "male"
    }
  }'),
   ('{
    "id": "grandfathers-grandmothers",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "grandparents": "a",
      "ancestors": "a"
    },
    "inconsiderate": {
      "grandmothers": "female",
      "grandfathers": "male"
    }
  }'),
   ('{
    "id": "bride-groom",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "spouse": "a",
      "newlywed": "a"
    },
    "inconsiderate": {
      "bride": "female",
      "groom": "male"
    }
  }'),
   ('{
    "id": "brother-sister",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "sibling": "a"
    },
    "inconsiderate": {
      "sister": "female",
      "brother": "male"
    }
  }'),
   ('{
    "id": "brothers-sisters",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "siblings": "a"
    },
    "inconsiderate": {
      "sisters": "female",
      "brothers": "male"
    }
  }'),
   ('{
    "id": "cameraman-camerawoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "camera operator": "a",
      "camera person": "a"
    },
    "inconsiderate": {
      "camerawoman": "female",
      "cameraman": "male"
    }
  }'),
   ('{
    "id": "cameramen-camerawomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "camera operators": "a"
    },
    "inconsiderate": {
      "camerawomen": "female",
      "cameramen": "male"
    }
  }'),
   ('{
    "id": "caveman-cavewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "troglodyte": "a",
      "hominidae": "a"
    },
    "inconsiderate": {
      "cavewoman": "female",
      "caveman": "male"
    }
  }'),
   ('{
    "id": "cavemen-cavewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "troglodytae": "a",
      "troglodyti": "a",
      "troglodytes": "a",
      "hominids": "a"
    },
    "inconsiderate": {
      "cavewomen": "female",
      "cavemen": "male"
    }
  }'),
   ('{
    "id": "clergyman-clergywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "clergyperson": "a",
      "clergy": "a",
      "cleric": "a"
    },
    "inconsiderate": {
      "clergywoman": "female",
      "clergyman": "male"
    }
  }'),
   ('{
    "id": "clergymen-clergywomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "clergies": "a",
      "clerics": "a"
    },
    "inconsiderate": {
      "clergywomen": "female",
      "clergymen": "male"
    }
  }'),
   ('{
    "id": "councilman-councilwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "council member": "a"
    },
    "inconsiderate": {
      "councilwoman": "female",
      "councilman": "male"
    }
  }'),
   ('{
    "id": "councilmen-councilwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "council members": "a"
    },
    "inconsiderate": {
      "councilwomen": "female",
      "councilmen": "male"
    }
  }'),
   ('{
    "id": "countryman-countrywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "country person": "a"
    },
    "inconsiderate": {
      "countrywoman": "female",
      "countryman": "male"
    }
  }'),
   ('{
    "id": "countrymen-countrywomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "country folk": "a"
    },
    "inconsiderate": {
      "countrywomen": "female",
      "countrymen": "male"
    }
  }'),
   ('{
    "id": "handyman-handywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "artisan": "a",
      "craftsperson": "a",
      "skilled worker": "a"
    },
    "inconsiderate": {
      "handywoman": "female",
      "craftswoman": "female",
      "handyman": "male",
      "craftsman": "male"
    }
  }'),
   ('{
    "id": "host-hostess",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "presenter": "a",
      "entertainer": "a",
      "emcee": "a"
    },
    "inconsiderate": {
      "hostess": "female",
      "host": "male"
    }
  }'),
   ('{
    "id": "hostesses-hosts",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "presenters": "a",
      "entertainers": "a",
      "emcees": "a"
    },
    "inconsiderate": {
      "hostesses": "female",
      "hosts": "male"
    }
  }'),
   ('{
    "id": "handymen-handywomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "artisans": "a",
      "craftspersons": "a",
      "skilled workers": "a"
    },
    "inconsiderate": {
      "handywomen": "female",
      "craftswomen": "female",
      "handymen": "male",
      "craftsmen": "male"
    }
  }'),
   ('{
    "id": "hangman-hangwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "guillotine": "a"
    },
    "inconsiderate": {
      "hangwoman": "female",
      "hangman": "male"
    }
  }'),
   ('{
    "id": "hangmen-hangwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "guillotines": "a"
    },
    "inconsiderate": {
      "hangwomen": "female",
      "hangmen": "male"
    }
  }'),
   ('{
    "id": "henchman-henchwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "sidekick": "a"
    },
    "inconsiderate": {
      "henchwoman": "female",
      "henchman": "male"
    }
  }'),
   ('{
    "id": "henchmen-henchwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "sidekicks": "a"
    },
    "inconsiderate": {
      "henchwomen": "female",
      "henchmen": "male"
    }
  }'),
   ('{
    "id": "hero-heroine",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "role-model": "a",
      "mentor": "a"
    },
    "inconsiderate": {
      "heroine": "female",
      "hero": "male"
    }
  }'),
   ('{
    "id": "heroes-heroines",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "role-models": "a",
      "mentor": "a"
    },
    "inconsiderate": {
      "heroines": "female",
      "heroes": "male"
    }
  }'),
   ('{
    "id": "maternal-paternal",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "parental": "a",
      "warm": "a",
      "intimate": "a"
    },
    "inconsiderate": {
      "maternal": "female",
      "paternal": "male",
      "fraternal": "male"
    }
  }'),
   ('{
    "id": "maternity-paternity",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "parental": "a"
    },
    "inconsiderate": {
      "maternity": "female",
      "paternity": "male"
    }
  }'),
   ('{
    "id": "dads-moms",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "parents": "a"
    },
    "inconsiderate": {
      "mamas": "female",
      "mothers": "female",
      "moms": "female",
      "mums": "female",
      "mommas": "female",
      "mommies": "female",
      "papas": "male",
      "fathers": "male",
      "dads": "male",
      "daddies": "male"
    }
  }'),
   ('{
    "id": "dad-mom",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "parent": "a"
    },
    "inconsiderate": {
      "mama": "female",
      "mother": "female",
      "mom": "female",
      "mum": "female",
      "momma": "female",
      "mommy": "female",
      "papa": "male",
      "father": "male",
      "dad": "male",
      "pop": "male",
      "daddy": "male"
    }
  }'),
   ('{
    "id": "daughter-son",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "child": "a"
    },
    "inconsiderate": {
      "daughter": "female",
      "son": "male"
    }
  }'),
   ('{
    "id": "daughters-sons",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "children": "a"
    },
    "inconsiderate": {
      "daughters": "female",
      "sons": "male"
    }
  }'),
   ('{
    "id": "doorman-doorwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "concierge": "a"
    },
    "inconsiderate": {
      "doorwoman": "female",
      "doorman": "male"
    }
  }'),
   ('{
    "id": "doormen-doorwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "concierges": "a"
    },
    "inconsiderate": {
      "doorwomen": "female",
      "doormen": "male"
    }
  }'),
   ('{
    "id": "feminin-manly",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "humanly": "a",
      "mature": "a"
    },
    "inconsiderate": {
      "feminin": "female",
      "dudely": "male",
      "manly": "male"
    }
  }'),
   ('{
    "id": "females-males",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "humans": "a"
    },
    "inconsiderate": {
      "females": "female",
      "males": "male"
    }
  }'),
   ('{
    "id": "king-queen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "ruler": "a"
    },
    "inconsiderate": {
      "empress": "female",
      "queen": "female",
      "emperor": "male",
      "king": "male"
    }
  }'),
   ('{
    "id": "kings-queens",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "rulers": "a"
    },
    "inconsiderate": {
      "empresses": "female",
      "queens": "female",
      "emperors": "male",
      "kings": "male"
    }
  }'),
   ('{
    "id": "kingsize-queensize",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "jumbo": "a",
      "gigantic": "a"
    },
    "inconsiderate": {
      "queensize": "female",
      "kingsize": "male"
    }
  }'),
   ('{
    "id": "kingmaker-queenmaker",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "power behind the throne": "a"
    },
    "inconsiderate": {
      "queenmaker": "female",
      "kingmaker": "male"
    }
  }'),
   ('{
    "id": "layman-laywoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "civilian": "a"
    },
    "inconsiderate": {
      "laywoman": "female",
      "layman": "male"
    }
  }'),
   ('{
    "id": "laymen-laywomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "civilians": "a"
    },
    "inconsiderate": {
      "laywomen": "female",
      "laymen": "male"
    }
  }'),
   ('{
    "id": "dame-lord",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "official": "a",
      "owner": "a",
      "expert": "a",
      "superior": "a",
      "chief": "a",
      "ruler": "a"
    },
    "inconsiderate": {
      "dame": "female",
      "lord": "male"
    }
  }'),
   ('{
    "id": "dames-lords",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "officials": "a",
      "masters": "a",
      "chiefs": "a",
      "rulers": "a"
    },
    "inconsiderate": {
      "dames": "female",
      "lords": "male"
    }
  }'),
   ('{
    "id": "manhood-womanhood",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "adulthood": "a",
      "personhood": "a",
      "maturity": "a"
    },
    "inconsiderate": {
      "womanhood": "female",
      "masculinity": "male",
      "manhood": "male"
    }
  }'),
   ('{
    "id": "femininity-manliness",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "humanity": "a"
    },
    "inconsiderate": {
      "femininity": "female",
      "manliness": "male"
    }
  }'),
   ('{
    "id": "marksman-markswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "shooter": "a"
    },
    "inconsiderate": {
      "markswoman": "female",
      "marksman": "male"
    }
  }'),
   ('{
    "id": "marksmen-markswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "shooters": "a"
    },
    "inconsiderate": {
      "markswomen": "female",
      "marksmen": "male"
    }
  }'),
   ('{
    "id": "middleman-middlewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "intermediary": "a",
      "go-between": "a"
    },
    "inconsiderate": {
      "middlewoman": "female",
      "middleman": "male"
    }
  }'),
   ('{
    "id": "middlemen-middlewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "intermediaries": "a",
      "go-betweens": "a"
    },
    "inconsiderate": {
      "middlewomen": "female",
      "middlemen": "male"
    }
  }'),
   ('{
    "id": "milkman-milkwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "milk person": "a"
    },
    "inconsiderate": {
      "milkwoman": "female",
      "milkman": "male"
    }
  }'),
   ('{
    "id": "milkmen-milkwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "milk people": "a"
    },
    "inconsiderate": {
      "milkwomen": "female",
      "milkmen": "male"
    }
  }'),
   ('{
    "id": "nephew-niece",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "nibling": "a",
      "sibling’s child": "a"
    },
    "inconsiderate": {
      "niece": "female",
      "nephew": "male"
    }
  }'),
   ('{
    "id": "nephews-nieces",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "niblings": "a",
      "sibling’s children": "a"
    },
    "inconsiderate": {
      "nieces": "female",
      "nephews": "male"
    }
  }'),
   ('{
    "id": "nobleman-noblewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "noble": "a"
    },
    "inconsiderate": {
      "noblewoman": "female",
      "nobleman": "male"
    }
  }'),
   ('{
    "id": "noblemen-noblewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "nobles": "a"
    },
    "inconsiderate": {
      "noblewomen": "female",
      "noblemen": "male"
    }
  }'),
   ('{
    "id": "ombudsman-ombudswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "notary": "a",
      "consumer advocate": "a",
      "trouble shooter": "a",
      "omsbudperson": "a",
      "mediator": "a"
    },
    "inconsiderate": {
      "ombudswoman": "female",
      "ombudsman": "male"
    }
  }'),
   ('{
    "id": "ombudsmen-ombudswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "notaries": "a",
      "omsbudpersons": "a",
      "omsbudpeople": "a",
      "mediators": "a"
    },
    "inconsiderate": {
      "ombudswomen": "female",
      "ombudsmen": "male"
    }
  }'),
   ('{
    "id": "prince-princess",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "heir": "a"
    },
    "inconsiderate": {
      "princess": "female",
      "prince": "male"
    }
  }'),
   ('{
    "id": "princes-princesses",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "heirs": "a"
    },
    "inconsiderate": {
      "princesses": "female",
      "princes": "male"
    }
  }'),
   ('{
    "id": "sandman-sandwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "fairy": "a"
    },
    "inconsiderate": {
      "sandwoman": "female",
      "sandman": "male"
    }
  }'),
   ('{
    "id": "sandmen-sandwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "fairies": "a"
    },
    "inconsiderate": {
      "sandwomen": "female",
      "sandmen": "male"
    }
  }'),
   ('{
    "id": "showman-showwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "promoter": "a"
    },
    "inconsiderate": {
      "showwoman": "female",
      "showman": "male"
    }
  }'),
   ('{
    "id": "showmen-showwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "promoters": "a"
    },
    "inconsiderate": {
      "showwomen": "female",
      "show women": "female",
      "showmen": "male"
    }
  }'),
   ('{
    "id": "spaceman-spacewoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "astronaut": "a"
    },
    "inconsiderate": {
      "spacewoman": "female",
      "spaceman": "male"
    }
  }'),
   ('{
    "id": "spacemen-spacewomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "astronauts": "a"
    },
    "inconsiderate": {
      "spacewomen": "female",
      "spacemen": "male"
    }
  }'),
   ('{
    "id": "spokesman-spokeswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "speaker": "a",
      "spokesperson": "a",
      "representative": "a"
    },
    "inconsiderate": {
      "spokeswoman": "female",
      "spokesman": "male"
    }
  }'),
   ('{
    "id": "spokesmen-spokeswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "speakers": "a",
      "spokespersons": "a"
    },
    "inconsiderate": {
      "spokeswomen": "female",
      "spokesmen": "male"
    }
  }'),
   ('{
    "id": "sportsman-sportswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "athlete": "a",
      "sports person": "a"
    },
    "inconsiderate": {
      "sportswoman": "female",
      "sportsman": "male"
    }
  }'),
   ('{
    "id": "sportsmen-sportswomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "athletes": "a",
      "sports persons": "a"
    },
    "inconsiderate": {
      "sportswomen": "female",
      "sportsmen": "male"
    }
  }'),
   ('{
    "id": "statesman-stateswoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "senator": "a"
    },
    "inconsiderate": {
      "stateswoman": "female",
      "statesman": "male"
    }
  }'),
   ('{
    "id": "stepbrother-stepsister",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "step-sibling": "a"
    },
    "inconsiderate": {
      "stepsister": "female",
      "stepbrother": "male"
    }
  }'),
   ('{
    "id": "stepbrothers-stepsisters",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "step-siblings": "a"
    },
    "inconsiderate": {
      "stepsisters": "female",
      "stepbrothers": "male"
    }
  }'),
   ('{
    "id": "stepdad-stepmom",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "step-parent": "a"
    },
    "inconsiderate": {
      "stepmom": "female",
      "stepmother": "female",
      "stepdad": "male",
      "stepfather": "male"
    }
  }'),
   ('{
    "id": "stepfathers-stepmothers",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "step-parents": "a"
    },
    "inconsiderate": {
      "stepmothers": "female",
      "stepfathers": "male"
    }
  }'),
   ('{
    "id": "superman-superwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "titan": "a"
    },
    "inconsiderate": {
      "superwoman": "female",
      "superman": "male"
    }
  }'),
   ('{
    "id": "supermen-superwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "titans": "a"
    },
    "inconsiderate": {
      "superwomen": "female",
      "supermen": "male"
    }
  }'),
   ('{
    "id": "unmanly-unwomanly",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "inhumane": "a"
    },
    "inconsiderate": {
      "unwomanly": "female",
      "unwomenly": "female",
      "unmanly": "male",
      "unmenly": "male"
    }
  }'),
   ('{
    "id": "watchman-watchwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "watcher": "a"
    },
    "inconsiderate": {
      "watchwoman": "female",
      "watchman": "male"
    }
  }'),
   ('{
    "id": "watchmen-watchwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "watchers": "a"
    },
    "inconsiderate": {
      "watchwomen": "female",
      "watchmen": "male"
    }
  }'),
   ('{
    "id": "weatherman-weatherwoman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "weather forecaster": "a",
      "meteorologist": "a"
    },
    "inconsiderate": {
      "weatherwoman": "female",
      "weatherman": "male"
    }
  }'),
   ('{
    "id": "weathermen-weatherwomen",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "weather forecasters": "a",
      "meteorologists": "a"
    },
    "inconsiderate": {
      "weatherwomen": "female",
      "weathermen": "male"
    }
  }'),
   ('{
    "id": "widow-widower",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "bereaved": "a"
    },
    "inconsiderate": {
      "widow": "female",
      "widows": "female",
      "widower": "male",
      "widowers": "male"
    }
  }'),
   ('{
    "id": "own-man-own-woman",
    "type": "or",
    "categories": [
      "female",
      "male"
    ],
    "considerate": {
      "own person": "a"
    },
    "inconsiderate": {
      "own woman": "female",
      "own man": "male"
    }
  }'),
   ('{
    "id": "frenchmen",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "french": "a",
      "the french": "a"
    },
    "inconsiderate": {
      "frenchmen": "male"
    }
  }'),
   ('{
    "id": "ladylike",
    "type": "simple",
    "categories": [
      "female"
    ],
    "considerate": {
      "courteous": "a",
      "cultured": "a"
    },
    "inconsiderate": {
      "ladylike": "female"
    }
  }'),
   ('{
    "id": "like-a-man",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "resolutely": "a",
      "bravely": "a"
    },
    "inconsiderate": {
      "like a man": "male"
    }
  }'),
   ('{
    "id": "maiden-name",
    "type": "simple",
    "categories": [
      "female"
    ],
    "considerate": {
      "birth name": "a"
    },
    "inconsiderate": {
      "maiden name": "female"
    }
  }'),
   ('{
    "id": "maiden-voyage",
    "type": "simple",
    "categories": [
      "female"
    ],
    "considerate": {
      "first voyage": "a"
    },
    "inconsiderate": {
      "maiden voyage": "female"
    }
  }'),
   ('{
    "id": "man-enough",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "strong enough": "a"
    },
    "inconsiderate": {
      "man enough": "male"
    }
  }'),
   ('{
    "id": "oneupmanship",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "upstaging": "a",
      "competitiveness": "a"
    },
    "inconsiderate": {
      "oneupmanship": "male"
    }
  }'),
   ('{
    "id": "mrs-",
    "type": "simple",
    "categories": [
      "female"
    ],
    "considerate": {
      "ms.": "a"
    },
    "inconsiderate": {
      "miss.": "female",
      "mrs.": "female"
    }
  }'),
   ('{
    "id": "manmade",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "manufactured": "a",
      "artificial": "a",
      "synthetic": "a",
      "machine-made": "a",
      "constructed": "a"
    },
    "inconsiderate": {
      "manmade": "male"
    }
  }'),
   ('{
    "id": "man-of-action",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "dynamo": "a"
    },
    "inconsiderate": {
      "man of action": "male"
    }
  }'),
   ('{
    "id": "man-of-letters",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "scholar": "a",
      "writer": "a",
      "literary figure": "a"
    },
    "inconsiderate": {
      "man of letters": "male"
    }
  }'),
   ('{
    "id": "man-of-the-world",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "sophisticate": "a"
    },
    "inconsiderate": {
      "man of the world": "male"
    }
  }'),
   ('{
    "id": "fellowship",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "camaraderie": "a",
      "community": "a",
      "organization": "a"
    },
    "inconsiderate": {
      "fellowship": "male"
    }
  }'),
   ('{
    "id": "freshman",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "first-year student": "a",
      "fresher": "a"
    },
    "inconsiderate": {
      "freshman": "male",
      "freshwoman": "male"
    }
  }'),
   ('{
    "id": "workmanship",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "quality construction": "a",
      "expertise": "a"
    },
    "inconsiderate": {
      "workmanship": "male"
    }
  }'),
   ('{
    "id": "housewife",
    "type": "simple",
    "categories": [
      "female"
    ],
    "considerate": {
      "homemaker": "a",
      "homeworker": "a"
    },
    "inconsiderate": {
      "housewife": "female"
    }
  }'),
   ('{
    "id": "housewives",
    "type": "simple",
    "categories": [
      "female"
    ],
    "considerate": {
      "homemakers": "a",
      "homeworkers": "a"
    },
    "inconsiderate": {
      "housewives": "female"
    }
  }'),
   ('{
    "id": "motherly",
    "type": "simple",
    "categories": [
      "female"
    ],
    "considerate": {
      "loving": "a",
      "warm": "a",
      "nurturing": "a"
    },
    "inconsiderate": {
      "motherly": "female"
    }
  }'),
   ('{
    "id": "manpower",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "human resources": "a",
      "workforce": "a",
      "personnel": "a",
      "staff": "a",
      "labor": "a",
      "labor force": "a",
      "staffing": "a",
      "combat personnel": "a"
    },
    "inconsiderate": {
      "manpower": "male"
    }
  }'),
   ('{
    "id": "master-of-ceremonies",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "emcee": "a",
      "moderator": "a",
      "convenor": "a"
    },
    "inconsiderate": {
      "master of ceremonies": "male"
    }
  }'),
   ('{
    "id": "masterful",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "skilled": "a",
      "authoritative": "a",
      "commanding": "a"
    },
    "inconsiderate": {
      "masterful": "male"
    }
  }'),
   ('{
    "id": "mastermind",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "genius": "a",
      "creator": "a",
      "instigator": "a",
      "oversee": "a",
      "launch": "a",
      "originate": "a"
    },
    "inconsiderate": {
      "mastermind": "male"
    }
  }'),
   ('{
    "id": "masterpiece",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "work of genius": "a",
      "chef d’oeuvre": "a"
    },
    "inconsiderate": {
      "masterpiece": "male"
    }
  }'),
   ('{
    "id": "masterplan",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "vision": "a",
      "comprehensive plan": "a"
    },
    "inconsiderate": {
      "masterplan": "male"
    }
  }'),
   ('{
    "id": "masterstroke",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "trump card": "a",
      "stroke of genius": "a"
    },
    "inconsiderate": {
      "masterstroke": "male"
    }
  }'),
   ('{
    "id": "madman",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "fanatic": "a",
      "zealot": "a",
      "enthusiast": "a"
    },
    "inconsiderate": {
      "madman": "male",
      "mad man": "male"
    }
  }'),
   ('{
    "id": "madmen",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "maniacs": "a",
      "enthusiasts": "a"
    },
    "inconsiderate": {
      "madmen": "male",
      "mad men": "male"
    }
  }'),
   ('{
    "id": "mankind",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "humankind": "a"
    },
    "inconsiderate": {
      "mankind": "male"
    }
  }'),
   ('{
    "id": "manhour",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "staff hour": "a",
      "hour of work": "a"
    },
    "inconsiderate": {
      "manhour": "male",
      "man hour": "male"
    }
  }'),
   ('{
    "id": "manhours",
    "type": "simple",
    "categories": [
      "male"
    ],
    "considerate": {
      "staff hours": "a",
      "hours of work": "a",
      "hours of labor": "a",
      "hours": "a"
    },
    "inconsiderate": {
      "manhours": "male",
      "man hours": "male"
    }
  }'),
   ('{
    "id": "manned",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "staffed": "a",
      "crewed": "a",
      "piloted": "a"
    },
    "inconsiderate": {
      "manned": "a"
    },
    "note": "Using gender neutral language means users will help to break up gender stereotypes."
  }'),
   ('{
    "id": "unmanned",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "robotic": "a",
      "automated": "a"
    },
    "inconsiderate": {
      "unmanned": "a"
    },
    "note": "Using gender neutral language means users will help to break up gender stereotypes."
  }'),
   ('{
    "id": "moaning",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "whining": "a",
      "complaining": "a",
      "crying": "a"
    },
    "inconsiderate": {
      "bitching": "a",
      "moaning": "a"
    }
  }'),
   ('{
    "id": "moan",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "whine": "a",
      "complain": "a",
      "cry": "a"
    },
    "inconsiderate": {
      "bitch": "a",
      "moan": "a"
    }
  }'),
   ('{
    "id": "wifebeater",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "tank top": "a",
      "sleeveless undershirt": "a"
    },
    "inconsiderate": {
      "wife beater": "a",
      "wifebeater": "a"
    }
  }'),
   ('{
    "id": "ancient-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "ancient civilization": "a",
      "ancient people": "a"
    },
    "inconsiderate": {
      "ancient man": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "authoress",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "author": "a",
      "writer": "a"
    },
    "inconsiderate": {
      "authoress": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "average-housewife",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "average consumer": "a",
      "average household": "a",
      "average homemaker": "a"
    },
    "inconsiderate": {
      "average housewife": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "average-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "average person": "a"
    },
    "inconsiderate": {
      "average man": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "average-working-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "average wage earner": "a",
      "average taxpayer": "a"
    },
    "inconsiderate": {
      "average working man": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "aviatrix",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "aviator": "a"
    },
    "inconsiderate": {
      "aviatrix": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "brotherhood-of-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "the human family": "a"
    },
    "inconsiderate": {
      "brotherhood of man": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "calendar-girl",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "model": "a"
    },
    "inconsiderate": {
      "calendar girl": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "call-girl",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "escort": "a",
      "prostitute": "a",
      "sex worker": "a"
    },
    "inconsiderate": {
      "call girl": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "churchman",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "cleric": "a",
      "practicing Christian": "a",
      "pillar of the Church": "a"
    },
    "inconsiderate": {
      "churchman": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "english-master",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "english coordinator": "a",
      "senior teacher of english": "a"
    },
    "inconsiderate": {
      "english master": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "englishmen",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "the english": "a"
    },
    "inconsiderate": {
      "englishmen": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "executrix",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "executor": "a"
    },
    "inconsiderate": {
      "executrix": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "father-of-*",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "founder of": "a"
    },
    "inconsiderate": {
      "father of *": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "founding-father",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "the founders": "a",
      "founding leaders": "a",
      "forebears": "a"
    },
    "inconsiderate": {
      "founding father": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "housemaid",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "house worker": "a",
      "domestic help": "a"
    },
    "inconsiderate": {
      "housemaid": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "industrial-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "industrial civilization": "a",
      "industrial people": "a"
    },
    "inconsiderate": {
      "industrial man": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "lady-doctor",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "doctor": "a"
    },
    "inconsiderate": {
      "lady doctor": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "leading-lady",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "lead": "a"
    },
    "inconsiderate": {
      "leading lady": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "maiden",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "virgin": "a"
    },
    "inconsiderate": {
      "maiden": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "maiden-race",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "first race": "a"
    },
    "inconsiderate": {
      "maiden race": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "maiden-speech",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "first speech": "a"
    },
    "inconsiderate": {
      "maiden speech": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "man-a-desk",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "staff a desk": "a"
    },
    "inconsiderate": {
      "man a desk": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "man-in-the-street",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "ordinary citizen": "a",
      "typical person": "a",
      "average person": "a"
    },
    "inconsiderate": {
      "man in the street": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "man-of-the-land",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "farmer": "a",
      "rural worker": "a",
      "grazier": "a",
      "landowner": "a",
      "rural community": "a",
      "country people": "a",
      "country folk": "a"
    },
    "inconsiderate": {
      "man of the land": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "mans-best-friend",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "a faithful dog": "a"
    },
    "inconsiderate": {
      "mans best friend": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "man-the-booth",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "staff the booth": "a"
    },
    "inconsiderate": {
      "man the booth": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "man-the-phones",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "answer the phones": "a"
    },
    "inconsiderate": {
      "man the phones": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "mansized-task",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "a demanding task": "a",
      "a big job": "a"
    },
    "inconsiderate": {
      "mansized task": "a",
      "man sized task": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "master-key",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "pass key": "a",
      "original": "a"
    },
    "inconsiderate": {
      "master key": "a",
      "master copy": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "master-plan",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "grand scheme": "a",
      "guiding principles": "a"
    },
    "inconsiderate": {
      "master plan": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "master-the-art",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "become skilled": "a"
    },
    "inconsiderate": {
      "master the art": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "men-of-science",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "scientists": "a"
    },
    "inconsiderate": {
      "men of science": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "midwife",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "birthing nurse": "a"
    },
    "inconsiderate": {
      "midwife": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "modern-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "modern civilization": "a",
      "modern people": "a"
    },
    "inconsiderate": {
      "modern man": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "no-mans-land",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "unoccupied territory": "a",
      "wasteland": "a",
      "deathtrap": "a"
    },
    "inconsiderate": {
      "no mans land": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "office-girls",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "administrative staff": "a"
    },
    "inconsiderate": {
      "office girls": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "poetess",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "poet": "a"
    },
    "inconsiderate": {
      "poetess": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "railwayman",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "railway worker": "a"
    },
    "inconsiderate": {
      "railwayman": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "sportsmanlike",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "fair": "a",
      "sporting": "a"
    },
    "inconsiderate": {
      "sportsmanlike": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "sportsmanship",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "fairness": "a",
      "good humor": "a",
      "sense of fair play": "a"
    },
    "inconsiderate": {
      "sportsmanship": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "statesmanlike",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "diplomatic": "a"
    },
    "inconsiderate": {
      "statesmanlike": "a",
      "statesman like": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "stockman",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "cattle worker": "a",
      "farmhand": "a",
      "drover": "a"
    },
    "inconsiderate": {
      "stockman": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "tradesmans-entrance",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "service entrance": "a"
    },
    "inconsiderate": {
      "tradesmans entrance": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "tax-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "tax commissioner": "a",
      "tax office": "a",
      "tax collector": "a"
    },
    "inconsiderate": {
      "tax man": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "usherette",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "usher": "a"
    },
    "inconsiderate": {
      "usherette": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "woman-lawyer",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "lawyer": "a"
    },
    "inconsiderate": {
      "woman lawyer": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "woman-painter",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "painter": "a"
    },
    "inconsiderate": {
      "woman painter": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }'),
   ('{
    "id": "working-wife",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "wage or salary earning woman": "a",
      "two-income family": "a"
    },
    "inconsiderate": {
      "working mother": "a",
      "working wife": "a"
    },
    "note": "Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/"
  }');