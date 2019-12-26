-- 
-- These rules are from retext equality's en.json file
-- Don't copy/paste into Postico
-- I recommend using postico's Load Query button and selecting this file
-- 
-- 
--   Groups of People (religion, race, other)
INSERT INTO rules("data")VALUES
   ('{
    "id": "islamist",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "muslim": "a",
      "person of Islamic faith": "a",
      "fanatic": "a",
      "zealot": "a",
      "follower of islam": "a",
      "follower of the islamic faith": "a"
    },
    "inconsiderate": {
      "islamist": "a"
    },
    "note": "Source: https://www.usnews.com/news/newsgram/articles/2013/04/04/the-associated-press-revises-islamist-another-politically-charged-term"
  }'),
   ('{
    "id": "islamists",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "muslims": "a",
      "people of Islamic faith": "a",
      "fanatics": "a",
      "zealots": "a"
    },
    "inconsiderate": {
      "islamists": "a"
    },
    "note": "Source: https://www.usnews.com/news/newsgram/articles/2013/04/04/the-associated-press-revises-islamist-another-politically-charged-term"
  }'),
   ('{
    "id": "master-slave",
    "type": "and",
    "categories": [
      "a",
      "b"
    ],
    "considerate": {
      "primary": "a",
      "primaries": "a",
      "hub": "a",
      "hubs": "a",
      "reference": "a",
      "references": "a",
      "replica": "b",
      "replicas": "b",
      "spoke": "b",
      "spokes": "b",
      "secondary": "b",
      "secondaries": "b"
    },
    "inconsiderate": {
      "master": "a",
      "masters": "a",
      "slave": "b",
      "slaves": "b"
    }
  }'),
   ('{
    "id": "eskimo",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Inuit": "a"
    },
    "inconsiderate": {
      "eskimo": "a"
    }
  }'),
   ('{
    "id": "eskimos",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Inuits": "a"
    },
    "inconsiderate": {
      "eskimos": "a"
    }
  }'),
   ('{
    "id": "oriental",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Asian person": "a"
    },
    "inconsiderate": {
      "oriental": "a"
    }
  }'),
   ('{
    "id": "orientals",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Asian people": "a"
    },
    "inconsiderate": {
      "orientals": "a"
    }
  }'),
   ('{
    "id": "nonwhite",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person of color": "a",
      "people of color": "a"
    },
    "inconsiderate": {
      "nonwhite": "a",
      "non white": "a"
    }
  }'),
   ('{
    "id": "ghetto",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "projects": "a",
      "urban": "a"
    },
    "inconsiderate": {
      "ghetto": "a"
    }
  }'),
   ('{
    "id": "redskin",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Native American": "a"
    },
    "inconsiderate": {
      "red indian": "a",
      "pocahontas": "a",
      "redskin": "a"
    }
  }'),
   ('{
    "id": "redskins",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Native American People": "a"
    },
    "inconsiderate": {
      "red indians": "a",
      "redskins": "a"
    }
  }'),
   ('{
    "id": "indian-give",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "go back on one''s offer": "a"
    },
    "inconsiderate": {
      "indian give": "a",
      "indian giver": "a"
    }
  }'),
   ('{
    "id": "pinoys",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Filipinos": "a",
      "Filipino people": "a"
    },
    "inconsiderate": {
      "pinoys": "a",
      "pinays": "a"
    }
  }'),
   ('{
    "id": "towel-heads",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Arabs": "a",
      "Middle Eastern People": "a"
    },
    "inconsiderate": {
      "sand niggers": "a",
      "towel heads": "a"
    }
  }'),
   ('{
    "id": "latino",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Latinx": "a"
    },
    "inconsiderate": {
      "latino": "a",
      "latina": "a",
      "mexican": "a"
    },
    "note": "Whenever possible , always try to be gender inclusive."
  }'),
   ('{
    "id": "japs",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Japanese person": "a",
      "Japanese people": "a"
    },
    "inconsiderate": {
      "japs": "a"
    }
  }'),
   ('{
    "id": "goy",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Jewish person": "a"
    },
    "inconsiderate": {
      "kike": "a",
      "goyum": "a",
      "goy": "a",
      "shlomo": "a"
    }
  }'),
   ('{
    "id": "spade",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "a Black person": "a"
    },
    "inconsiderate": {
      "spade": "a"
    }
  }'),
   ('{
    "id": "gyp",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Nomad": "a",
      "Traveler": "a",
      "Roma": "a",
      "Romani": "a"
    },
    "inconsiderate": {
      "gyppo": "a",
      "gypsy": "a",
      "Gipsy": "a",
      "gyp": "a"
    },
    "note": "Gypsy is insensitive, use Roma or Romani. They''re not Egyptian as their name suggests. (source: en.wikipedia.org/wiki/Romani_people#cite_ref-80)"
  }'),
   ('{
    "id": "blacklist",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "blocklist": "a",
      "wronglist": "a",
      "banlist": "a",
      "deny list": "a"
    },
    "inconsiderate": {
      "blacklist": "a"
    },
    "note": "Replace racially-charged language with more accurate and inclusive words"
  }'),
   ('{
    "id": "whitelist",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "passlist": "a",
      "alrightlist": "a",
      "safelist": "a",
      "allow list": "a"
    },
    "inconsiderate": {
      "whitelist": "a"
    },
    "note": "Replace racially-charged language with more accurate and inclusive words"
  }'),
   ('{
    "id": "savage",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "simple": "a",
      "indigenous": "a",
      "hunter-gatherer": "a"
    },
    "inconsiderate": {
      "primitive": "a",
      "savage": "a",
      "stone age": "a"
    },
    "note": "Avoid using terms that imply a group has not changed over time and that they are inferior"
  }'),
   ('{
    "id": "tribe",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "society": "a",
      "community": "a"
    },
    "inconsiderate": {
      "tribe": "a"
    },
    "note": "Avoid using terms that make some groups sound inferior"
  }'),
   ('{
    "id": "sophisticated-culture",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "complex culture": "a"
    },
    "inconsiderate": {
      "sophisticated culture": "a"
    },
    "note": "Avoid using terms that make some groups sound inferior. Replace \"sophisticated\" with a neutral term such as \"complex\""
  }');