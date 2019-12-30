-- 
-- These rules are from retext equality's en.json file
-- Don't copy/paste into Postico
-- I recommend using postico's Load Query button and selecting this file
-- 
-- 
--    LGBTQ terms
INSERT INTO rules("data")VALUES('{
    "id": "homosexual",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "gay": "a",
      "gay man": "a",
      "lesbian": "a",
      "gay person/people": "a"
    },
    "inconsiderate": {
      "homosexual": "a"
    },
    "note": "This term has a clinical history and is used to imply LGBTQ+ people are diseased or psychologically/emotionally disordered (source: https://www.glaad.org/reference/offensive)"
  }'),
   ('{
    "id": "homosexual-relations",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "relationship": "a"
    },
    "inconsiderate": {
      "homosexual relations": "a",
      "homosexual relationship": "a"
    },
    "note": "Avoid labeling something as LGBTQ+ unless you would call the same thing \"straight\" (source: https://www.glaad.org/reference/offensive)"
  }'),
   ('{
    "id": "homosexual-couple",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "couple": "a"
    },
    "inconsiderate": {
      "homosexual couple": "a"
    },
    "note": "Avoid labeling something as LGBTQ+ unless you would call the same thing \"straight\" (source: https://www.glaad.org/reference/offensive)"
  }'),
   ('{
    "id": "sexual-preference",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "sexual orientation": "a",
      "orientation": "a"
    },
    "inconsiderate": {
      "sexual preference": "a"
    },
    "note": "Implies that being LGBTQ+ is a choice (source: https://www.glaad.org/reference/offensive)"
  }'),
   ('{
    "id": "gay-lifestyle",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "gay lives": "a",
      "gay/lesbian lives": "a"
    },
    "inconsiderate": {
      "gay lifestyle": "a",
      "homosexual lifestyle": "a"
    },
    "note": "Implies that being LGBTQ+ is a choice (source: https://www.glaad.org/reference/offensive)"
  }'),
   ('{
    "id": "gay-agenda",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "gay issues": "a"
    },
    "inconsiderate": {
      "gay agenda": "a",
      "homosexual agenda": "a"
    },
    "note": "Used by anti-LGBTQ+ extremists to create a climate of fear around LGBTQ+ issues (source: https://www.glaad.org/reference/offensive)"
  }'),
   ('{
    "id": "gay-rights",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "equal rights": "a",
      "civil rights for gay people": "a"
    },
    "inconsiderate": {
      "special rights": "a",
      "gay rights": "a"
    },
    "note": "LGBTQ+ rights are human rights (source: https://www.glaad.org/reference/style)"
  }'),
   ('{
    "id": "fag",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "gay": "a"
    },
    "inconsiderate": {
      "fag": "a",
      "faggot": "a",
      "dyke": "a",
      "homo": "a",
      "sodomite": "a"
    },
    "note": "Derogatory terms for LGBTQ+ are offensive (source: https://www.glaad.org/reference/offensive)"
  }'),
   ('{
    "id": "bi",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "bisexual": "a"
    },
    "inconsiderate": {
      "bi": "a"
    },
    "note": "Source: https://www.glaad.org/reference/style"
  }'),
   ('{
    "id": "homosexual-marriage",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "gay marriage": "a",
      "same-sex marriage": "a"
    },
    "inconsiderate": {
      "homosexual marriage": "a"
    },
    "note": "Source: https://www.glaad.org/reference/style"
  }'),
   ('{
    "id": "tranny",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "transgender": "a"
    },
    "inconsiderate": {
      "tranny": "a"
    },
    "note": "Source: https://www.glaad.org/reference/style"
  }'),
   ('{
    "id": "transvestite",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "cross-dresser": "a"
    },
    "inconsiderate": {
      "transvestite": "a"
    },
    "note": "Source: https://www.glaad.org/reference/transgender"
  }'),
   ('{
    "id": "sexchange",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "transition": "a"
    },
    "inconsiderate": {
      "sexchange": "a",
      "sex change": "a"
    },
    "note": "Source: https://www.glaad.org/reference/transgender"
  }'),
   ('{
    "id": "sex-change-operation",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "sex reassignment surgery": "a"
    },
    "inconsiderate": {
      "sex change operation": "a"
    },
    "note": "Source: https://www.glaad.org/reference/transgender"
  }'),
   ('{
    "id": "transgenders",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "transgender people": "a"
    },
    "inconsiderate": {
      "transgenders": "a"
    },
    "note": "Transgender should be used as an adjective, not as a noun. (source: https://www.glaad.org/reference/transgender)"
  }'),
   ('{
    "id": "transgendered",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "transgender": "a"
    },
    "inconsiderate": {
      "transgendered": "a"
    },
    "note": "Transgender is not an adjective. It''s a noun like woman or man. (source: https://www.glaad.org/reference/transgender)"
  }'),
   ('{
    "id": "transgenderism",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "being transgender": "a",
      "the movement for transgender equality": "a"
    },
    "inconsiderate": {
      "transgenderism": "a"
    },
    "note": "Source: https://www.glaad.org/reference/transgender"
  }'),
   ('{
    "id": "born-a-man",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "assigned male at birth": "a",
      "designated male at birth": "a"
    },
    "inconsiderate": {
      "biologically male": "a",
      "born a man": "a",
      "genetically male": "a"
    },
    "note": "Assigned birth gender is complicated. Gender identity is more than what your parent(s) decided you were at birth."
  }'),
   ('{
    "id": "born-a-woman",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "assigned female at birth": "a",
      "designated female at birth": "a"
    },
    "inconsiderate": {
      "biologically female": "a",
      "born a woman": "a",
      "genetically female": "a"
    },
    "note": "Assigned birth gender is complicated. Gender identity is more than what your parent(s) decided you were at birth."
  }'),
   ('{
    "id": "bathroom-bill",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "non-discrimination law": "a",
      "non-discrimination ordinance": "a"
    },
    "inconsiderate": {
      "bathroom bill": "a"
    },
    "note": "Source: https://www.glaad.org/reference/transgender"
  }'),
   ('{
    "id": "hermaphroditic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "intersex": "a"
    },
    "inconsiderate": {
      "hermaphroditic": "a",
      "pseudohermaphroditic": "a",
      "pseudo hermaphroditic": "a"
    },
    "note": "Source: http://www.isna.org/node/979"
  }'),
   ('{
    "id": "hermaphrodite",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person who is intersex": "a",
      "person": "a",
      "intersex person": "a"
    },
    "inconsiderate": {
      "hermaphrodite": "a",
      "pseudohermaphrodite": "a",
      "pseudo hermaphrodite": "a"
    },
    "note": "Source: http://www.isna.org/node/979"
  }'),
   ('{
    "id": "heshe",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "transgender person": "a",
      "person": "a"
    },
    "inconsiderate": {
      "shemale": "a",
      "she male": "a",
      "heshe": "a",
      "shehe": "a"
    },
    "note": "Transgender people prefer to be called by their chosen pronouns. If you''re confused, just ask what pronouns they prefer. (source: https://www.reddit.com/r/asktransgender/comments/23wbq1/is_the_term_shemale_seen_as_offensive/)"
  }');