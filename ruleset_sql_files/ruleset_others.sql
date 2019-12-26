-- 
-- These rules are from retext equality's en.json file
-- Don't copy/paste into Postico
-- I recommend using postico's Load Query button and selecting this file
-- 
-- 
--   This set includes many different kinds of inconsiderate and considerate rules
INSERT INTO rules("data") VALUES('{
    "id": "learning-disabled",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with learning disabilities": "a"
    },
    "inconsiderate": {
      "learning disabled": "a"
    },
    "note": "Refer to the person, rather than the disability, first."
  }'),
   ('{
    "id": "invalid",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "turned off": "a",
      "has a disability": "a",
      "person with a disability": "a",
      "people with disabilities": "a"
    },
    "inconsiderate": {
      "disabled": "a",
      "invalid": "a"
    },
    "note": "Refer to the person, rather than the disability, first."
  }'),
   ('{
    "id": "birth-defect",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "has a disability": "a",
      "person with a disability": "a",
      "people with disabilities": "a"
    },
    "inconsiderate": {
      "birth defect": "a"
    },
    "note": "Assumes/implies that a person with a disability is deficient or inferior to others. When possible, specify the functional ability or its restriction. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "suffers-from-disabilities",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "has a disability": "a",
      "person with a disability": "a",
      "people with disabilities": "a"
    },
    "inconsiderate": {
      "suffers from disabilities": "a",
      "suffering from disabilities": "a",
      "suffering from a disability": "a",
      "afflicted with disabilities": "a",
      "afflicted with a disability": "a"
    },
    "note": "Assumes that a person with a disability has a reduced quality of life. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "intellectually-disabled-people",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "people with intellectual disabilities": "a"
    },
    "inconsiderate": {
      "intellectually disabled people": "a"
    },
    "note": "Refer to the person, rather than the disability, first. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "intellectually-disabled",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with an intellectual disability": "a"
    },
    "inconsiderate": {
      "intellectually disabled": "a",
      "has intellectual issues": "a",
      "suffers from intellectual disabilities": "a",
      "suffering from intellectual disabilities": "a",
      "suffering from an intellectual disability": "a",
      "afflicted with intellectual disabilities": "a",
      "afflicted with a intellectual disability": "a"
    },
    "note": "Assumes that a person with an intellectual disability has a reduced quality of life. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "nuts",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "rude": "a",
      "malicious": "a",
      "mean": "a",
      "disgusting": "a",
      "vile": "a",
      "person with symptoms of mental illness": "a",
      "person with mental illness": "a",
      "person with symptoms of a mental disorder": "a",
      "person with a mental disorder": "a"
    },
    "inconsiderate": {
      "batshit": "a",
      "psycho": "a",
      "crazy": "a",
      "delirious": "a",
      "insane": "a",
      "insanity": "a",
      "loony": "a",
      "lunacy": "a",
      "lunatic": "a",
      "mentally ill": "a",
      "psychopathology": "a",
      "mental defective": "a",
      "moron": "a",
      "moronic": "a",
      "nuts": "a",
      "mental case": "a",
      "mental": "a"
    },
    "note": "Describe the behavior or illness without derogatory words. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "sane",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "correct": "a",
      "adequate": "a",
      "sufficient": "a",
      "consistent": "a",
      "valid": "a",
      "coherent": "a",
      "sensible": "a",
      "reasonable": "a"
    },
    "inconsiderate": {
      "sane": "a"
    },
    "note": "When describing a mathematical or programmatic value, using the word “sane” needlessly invokes the topic of mental health.  Consider using a domain-specific or neutral term instead."
  }'),
   ('{
    "id": "sanity-check",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "check": "a",
      "assertion": "a",
      "validation": "a",
      "smoke test": "a"
    },
    "inconsiderate": {
      "sanity check": "a"
    },
    "note": "When describing a mathematical or programmatic value, using the phrase “sanity check” needlessly invokes the topic of mental health.  Consider using simply “check”, or a domain-specific or neutral term, instead."
  }'),
   ('{
    "id": "bipolar",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "fluctuating": "a",
      "person with bipolar disorder": "a"
    },
    "inconsiderate": {
      "bipolar": "a"
    },
    "note": "Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "schizo",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with schizophrenia": "a"
    },
    "inconsiderate": {
      "schizophrenic": "a",
      "schizo": "a"
    },
    "note": "Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "manic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with schizophrenia": "a"
    },
    "inconsiderate": {
      "suffers from schizophrenia": "a",
      "suffering from schizophrenia": "a",
      "afflicted with schizophrenia": "a",
      "manic": "a"
    },
    "note": "Assumes a person with schizophrenia experiences a reduced quality of life. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "handicapped-parking",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "accessible parking": "a"
    },
    "inconsiderate": {
      "handicapped parking": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "handicapped",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with a handicap": "a",
      "accessible": "a"
    },
    "inconsiderate": {
      "handicapped": "a"
    },
    "note": "Refer to the person, rather than the disability, first. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "amputee",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with an amputation": "a"
    },
    "inconsiderate": {
      "amputee": "a"
    },
    "note": "Refer to the person, rather than the condition, first. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "gimp",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with a limp": "a"
    },
    "inconsiderate": {
      "cripple": "a",
      "crippled": "a",
      "gimp": "a"
    },
    "note": "Refer to the specific disability."
  }'),
   ('{
    "id": "mongoloid",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with Down Syndrome": "a"
    },
    "inconsiderate": {
      "mongoloid": "a"
    }
  }'),
   ('{
    "id": "stroke-victim",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "individual who has had a stroke": "a"
    },
    "inconsiderate": {
      "stroke victim": "a",
      "suffering from a stroke": "a",
      "victim of a stroke": "a"
    },
    "note": "Refer to the person, rather than the condition, first."
  }'),
   ('{
    "id": "multiple-sclerosis-victim",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person who has multiple sclerosis": "a"
    },
    "inconsiderate": {
      "suffers from multiple sclerosis": "a",
      "suffering from multiple sclerosis": "a",
      "victim of multiple sclerosis": "a",
      "multiple sclerosis victim": "a",
      "afflicted with multiple sclerosis": "a"
    }
  }'),
   ('{
    "id": "suffers-from-md",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person who has muscular dystrophy": "a"
    },
    "inconsiderate": {
      "suffers from muscular dystrophy": "a",
      "afflicted with muscular dystrophy": "a",
      "suffers from MD": "a",
      "afflicted with MD": "a"
    },
    "note": "Refer to a person''s condition as a state, not as an affliction. (source: https://ncdj.org/style-guide)"
  }'),
   ('{
    "id": "family-burden",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "with family support needs": "a"
    },
    "inconsiderate": {
      "family burden": "a"
    }
  }'),
   ('{
    "id": "asylum",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "psychiatric hospital": "a",
      "mental health hospital": "a"
    },
    "inconsiderate": {
      "asylum": "a"
    }
  }'),
   ('{
    "id": "bedlam",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "chaos": "a",
      "hectic": "a",
      "pandemonium": "a"
    },
    "inconsiderate": {
      "bedlam": "a",
      "madhouse": "a",
      "loony bin": "a"
    }
  }'),
   ('{
    "id": "downs-syndrome",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Down Syndrome": "a"
    },
    "inconsiderate": {
      "downs syndrome": "a"
    },
    "note": "Source: https://media.specialolympics.org/soi/files/press-kit/2014_FactSheet_Final.pdf"
  }'),
   ('{
    "id": "retard",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "silly": "a",
      "dullard": "a",
      "person with Down Syndrome": "a",
      "person with developmental disabilities": "a",
      "delay": "a",
      "hold back": "a"
    },
    "inconsiderate": {
      "retard": "a",
      "retarded": "a",
      "short bus": "a"
    }
  }'),
   ('{
    "id": "retards",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "sillies": "a",
      "dullards": "a",
      "people with developmental disabilities": "a",
      "people with Down’s Syndrome": "a",
      "delays": "a",
      "holds back": "a"
    },
    "inconsiderate": {
      "retards": "a"
    }
  }'),
   ('{
    "id": "psychotic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with a psychotic condition": "a",
      "person with psychosis": "a"
    },
    "inconsiderate": {
      "psychotic": "a",
      "suffers from psychosis": "a",
      "suffering from psychosis": "a",
      "afflicted with psychosis": "a",
      "victim of psychosis": "a"
    },
    "note": "Only use terms describing mental illness when referring to a professionally diagnosed medical condition."
  }'),
   ('{
    "id": "lame",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "boring": "a",
      "dull": "a"
    },
    "inconsiderate": {
      "lame": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "aids-victim",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with AIDS": "a"
    },
    "inconsiderate": {
      "suffering from aids": "a",
      "suffer from aids": "a",
      "suffers from aids": "a",
      "afflicted with aids": "a",
      "victim of aids": "a",
      "aids victim": "a"
    }
  }'),
   ('{
    "id": "wheelchair-bound",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "uses a wheelchair": "a"
    },
    "inconsiderate": {
      "confined to a wheelchair": "a",
      "bound to a wheelchair": "a",
      "restricted to a wheelchair": "a",
      "wheelchair bound": "a"
    }
  }'),
   ('{
    "id": "special-olympians",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "athletes": "a",
      "Special Olympics athletes": "a"
    },
    "inconsiderate": {
      "special olympians": "a",
      "special olympic athletes": "a"
    },
    "note": "When possible, use the exact discipline of sport. (source: https://media.specialolympics.org/soi/files/press-kit/2014_FactSheet_Final.pdf)"
  }'),
   ('{
    "id": "ablebodied",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "non-disabled": "a"
    },
    "inconsiderate": {
      "ablebodied": "a"
    },
    "note": "Can imply that people with disabilities lack the ability to use their bodies well. Sometimes `typical` can be used. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "addict",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with a drug addiction": "a",
      "person recovering from a drug addiction": "a"
    },
    "inconsiderate": {
      "addict": "a",
      "junkie": "a"
    },
    "note": "Addiction is a neurobiological disease. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "addicts",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "people with a drug addiction": "a",
      "people recovering from a drug addiction": "a"
    },
    "inconsiderate": {
      "addicts": "a",
      "junkies": "a"
    },
    "note": "Addiction is a neurobiological disease. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "alcoholic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "someone with an alcohol problem": "a"
    },
    "inconsiderate": {
      "alcoholic": "a",
      "alcohol abuser": "a"
    },
    "note": "Alcoholism is a neurobiological disease. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "deafmute",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "deaf": "a"
    },
    "inconsiderate": {
      "deaf and dumb": "a",
      "deafmute": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "senile",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with dementia": "a"
    },
    "inconsiderate": {
      "demented": "a",
      "senile": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "depressed",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "sad": "a",
      "blue": "a",
      "bummed out": "a",
      "person with seasonal affective disorder": "a",
      "person with psychotic depression": "a",
      "person with postpartum depression": "a"
    },
    "inconsiderate": {
      "depressed": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "dwarf",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with dwarfism": "a",
      "little person": "a",
      "little people": "a",
      "LP": "a",
      "person of short stature": "a"
    },
    "inconsiderate": {
      "vertically challenged": "a",
      "midget": "a",
      "small person": "a",
      "dwarf": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/,https://www.lpaonline.org/faq-#Midget"
  }'),
   ('{
    "id": "dyslexic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with dyslexia": "a"
    },
    "inconsiderate": {
      "dyslexic": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "epileptic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with epilepsy": "a"
    },
    "inconsiderate": {
      "epileptic": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "hearing-impaired",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "hard of hearing": "a",
      "partially deaf": "a",
      "partial hearing loss": "a",
      "deaf": "a"
    },
    "inconsiderate": {
      "hearing impaired": "a",
      "hearing impairment": "a"
    },
    "note": "When possible, ask the person what they prefer. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "victim-of-polio",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "polio": "a",
      "person who had polio": "a"
    },
    "inconsiderate": {
      "infantile paralysis": "a",
      "suffers from polio": "a",
      "suffering from polio": "a",
      "suffering from a polio": "a",
      "afflicted with polio": "a",
      "afflicted with a polio": "a",
      "victim of polio": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "victim-of-an-injury",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "sustain an injury": "a",
      "receive an injury": "a"
    },
    "inconsiderate": {
      "suffer from an injury": "a",
      "suffers from an injury": "a",
      "suffering from an injury": "a",
      "afflicted with an injury": "a",
      "victim of an injury": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "victim-of-injuries",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "sustain injuries": "a",
      "receive injuries": "a"
    },
    "inconsiderate": {
      "suffer from injuries": "a",
      "suffers from injuries": "a",
      "suffering from injuries": "a",
      "afflicted with injuries": "a",
      "victim of injuries": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "paraplegic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with paraplegia": "a"
    },
    "inconsiderate": {
      "paraplegic": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "quadriplegic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with quadriplegia": "a"
    },
    "inconsiderate": {
      "quadriplegic": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "spaz",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with cerebral palsy": "a",
      "twitch": "a",
      "flinch": "a",
      "hectic": "a"
    },
    "inconsiderate": {
      "spaz": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "spastic",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with cerebral palsy": "a",
      "twitch": "a",
      "flinch": "a"
    },
    "inconsiderate": {
      "spastic": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "stammering",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "stuttering": "a",
      "disfluency of speech": "a"
    },
    "inconsiderate": {
      "stammering": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "stutterer",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person who stutters": "a"
    },
    "inconsiderate": {
      "stutterer": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "tourettes-syndrome",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "Tourette syndrome": "a"
    },
    "inconsiderate": {
      "tourettes syndrome": "a",
      "tourettes disorder": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "rehab-center",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "treatment center": "a"
    },
    "inconsiderate": {
      "rehab center": "a",
      "detox center": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "rehab",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "treatment": "a"
    },
    "inconsiderate": {
      "rehab": "a",
      "detox": "a"
    },
    "note": "Source: https://ncdj.org/style-guide/"
  }'),
   ('{
    "id": "sociopath",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with a personality disorder": "a",
      "person with psychopathic personality": "a"
    },
    "inconsiderate": {
      "sociopath": "a"
    },
    "note": "Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "sociopaths",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "people with psychopathic personalities": "a",
      "people with a personality disorder": "a"
    },
    "inconsiderate": {
      "sociopaths": "a"
    },
    "note": "Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)"
  }'),
   ('{
    "id": "dumb",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "foolish": "a",
      "ludicrous": "a",
      "speechless": "a",
      "silent": "a"
    },
    "inconsiderate": {
      "dumb": "a"
    },
    "note": "Dumb here is used in 2 different contexts , the inability to talk or as a curse word. (source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)"
  }'),
   ('{
    "id": "wacko",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "foolish": "a",
      "ludicrous": "a",
      "unintelligent": "a"
    },
    "inconsiderate": {
      "simpleton": "a",
      "stupid": "a",
      "wacko": "a",
      "whacko": "a",
      "low iq": "a"
    },
    "note": "Source: http://www.mmonjejr.com/2014/02/deconstructing-stupid.html"
  }'),
   ('{
    "id": "panic-attack",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "fit of terror": "a",
      "scare": "a"
    },
    "inconsiderate": {
      "panic attack": "a"
    }
  }'),
   ('{
    "id": "bony",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "thin": "a",
      "slim": "a"
    },
    "inconsiderate": {
      "anorexic": "a",
      "bony": "a"
    }
  }'),
   ('{
    "id": "ocd",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "has an anxiety disorder": "a",
      "obsessive": "a",
      "pedantic": "a",
      "niggly": "a",
      "picky": "a"
    },
    "inconsiderate": {
      "neurotic": "a",
      "ocd": "a",
      "o.c.d": "a",
      "o.c.d.": "a"
    },
    "note": "Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://english.stackexchange.com/questions/247550/)"
  }'),
   ('{
    "id": "insomnia",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "restlessness": "a",
      "sleeplessness": "a"
    },
    "inconsiderate": {
      "insomnia": "a"
    }
  }'),
   ('{
    "id": "insomniac",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person who has insomnia": "a"
    },
    "inconsiderate": {
      "insomniac": "a"
    }
  }'),
   ('{
    "id": "insomniacs",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "people who have insomnia": "a"
    },
    "inconsiderate": {
      "insomniacs": "a"
    }
  }'),
   ('{
    "id": "barren",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "empty": "a",
      "sterile": "a",
      "infertile": "a"
    },
    "inconsiderate": {
      "barren": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "deaf-to",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "careless": "a",
      "heartless": "a",
      "indifferent": "a",
      "insensitive": "a"
    },
    "inconsiderate": {
      "blind to": "a",
      "blind eye to": "a",
      "blinded by": "a",
      "deaf to": "a",
      "deaf ear to": "a",
      "deafened by": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "cretin",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "creep": "a",
      "fool": "a"
    },
    "inconsiderate": {
      "cretin": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "daft",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "absurd": "a",
      "foolish": "a"
    },
    "inconsiderate": {
      "daft": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "idiot",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "foolish": "a",
      "ludicrous": "a",
      "silly": "a"
    },
    "inconsiderate": {
      "feebleminded": "a",
      "feeble minded": "a",
      "idiot": "a",
      "imbecile": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "harelipped",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with a cleft-lip and palate": "a"
    },
    "inconsiderate": {
      "harelipped": "a",
      "cleftlipped": "a"
    },
    "note": "Sometimes it''s cleft lip or palate, not both. Specify when possible. (source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)"
  }'),
   ('{
    "id": "harelip",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "cleft-lip and palate": "a"
    },
    "inconsiderate": {
      "harelip": "a",
      "hare lip": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "maniac",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "fanatic": "a",
      "zealot": "a",
      "enthusiast": "a"
    },
    "inconsiderate": {
      "maniac": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "buckteeth",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "person with prominent teeth": "a",
      "prominent teeth": "a"
    },
    "inconsiderate": {
      "bucktoothed": "a",
      "buckteeth": "a"
    }
  }'),
   ('{
    "id": "special",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "has a disability": "a",
      "person with a disability": "a",
      "people with disabilities": "a"
    },
    "inconsiderate": {
      "challenged": "a",
      "diffability": "a",
      "differently abled": "a",
      "handicapable": "a",
      "special": "a",
      "special needs": "a",
      "specially abled": "a"
    },
    "note": "Euphemisms for disabilities can be infantilizing. (source: http://cdrnys.org/blog/disability-dialogue/the-disability-dialogue-4-disability-euphemisms-that-need-to-bite-the-dust/,https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)"
  }'),
   ('{
    "id": "libtard",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "disagreeable": "a",
      "uneducated": "a",
      "ignorant": "a",
      "naive": "a",
      "inconsiderate": "a"
    },
    "inconsiderate": {
      "fucktard": "a",
      "libtard": "a",
      "contard": "a"
    },
    "note": "Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html"
  }'),
   ('{
    "id": "add",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "disorganized": "a",
      "distracted": "a",
      "energetic": "a",
      "hyperactive": "a",
      "impetuous": "a",
      "impulsive": "a",
      "inattentive": "a",
      "restless": "a",
      "unfocused": "a"
    },
    "inconsiderate": {
      "ADD": "a",
      "adhd": "a",
      "a.d.d.": "a",
      "a.d.h.d.": "a"
    }
  }'),
   ('{
    "id": "obvious",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "obvious": "a",
      "obviously": "a"
    },
    "note": "Not everything is as obvious as you might think. And if it isn’t obvious to the reader, it can hurt. (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "just",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "just": "a"
    },
    "note": "Not everything is as easy as you might think. And if it isn’t easy for the reader, it can hurt. (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "basically",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "basically": "a"
    },
    "note": "It’s probably not that basic. If you’re going to explain a confusing previous sentence with a clearer next sentence, why not drop the former and only use the latter? (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "simple",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "simple": "a",
      "simply": "a"
    },
    "note": "It’s probably not that simple. Even if it is, you probably don’t need to specifically say it. (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "easy",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "easy": "a",
      "easily": "a"
    },
    "note": "It’s probably not that easy. Even if it is, you probably don’t need to specifically say it. (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "of-course",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "of course": "a"
    },
    "note": "If it’s self-evident then maybe you don’t need to describe it. If it isn’t, don’t say it. (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "clearly",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "clearly": "a"
    },
    "note": "If it’s self-evident then maybe you don’t need to describe it. If it isn’t, don’t say it. (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "everyone-knows",
    "type": "simple",
    "categories": [
      "a"
    ],
    "inconsiderate": {
      "everyone knows": "a"
    },
    "note": "If it’s self-evident then maybe you don’t need to describe it. If it isn’t, don’t say it. (source: https://css-tricks.com/words-avoid-educational-writing/)"
  }'),
   ('{
    "id": "sophisticated-technology",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "complex technology": "a"
    },
    "inconsiderate": {
      "sophisticated technology": "a"
    },
    "note": "Avoid using terms that make some groups sound inferior. Replace \"sophisticated\" with a neutral term such as \"complex\""
  }'),
   ('{
    "id": "make-*-great-again",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "improve": "a"
    },
    "inconsiderate": {
      "make * great again": "a",
      "make * * great again": "a",
      "make * * * great again": "a",
      "make * * * * great again": "a",
      "make * * * * * great again": "a"
    }
  }'),
   ('{
    "id": "committed-suicide",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "died by suicide": "a"
    },
    "inconsiderate": {
      "committed suicide": "a",
      "completed suicide": "a"
    },
    "note": "Source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide, https://www.speakingofsuicide.com/2013/04/13/language/"
  }'),
   ('{
    "id": "commit-suicide",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "die by suicide": "a"
    },
    "inconsiderate": {
      "commit suicide": "a",
      "complete suicide": "a",
      "successful suicide": "a"
    },
    "note": "Committing suicide is not successful/unsuccessful, that sends the wrong message (source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide, https://www.speakingofsuicide.com/2013/04/13/language/)"
  }'),
   ('{
    "id": "suicide-pact",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "rise in suicides": "a"
    },
    "inconsiderate": {
      "suicide epidemic": "a",
      "epidemic of suicides": "a",
      "suicide pact": "a"
    },
    "note": "Using sensational words can cause copycat suicides or contagion (source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide)"
  }'),
   ('{
    "id": "failed-suicide",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "suicide attempt": "a",
      "attempted suicide": "a"
    },
    "inconsiderate": {
      "failed suicide": "a",
      "failed attempt": "a",
      "suicide failure": "a"
    },
    "note": "Attempted suicide should not be depicted as a failure (source: https://www.speakingofsuicide.com/2013/04/13/language, https://www.afsp.org/news-events/for-the-media/reporting-on-suicide)"
  }'),
   ('{
    "id": "suicide-note",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "a note from the deceased": "a"
    },
    "inconsiderate": {
      "suicide note": "a"
    },
    "note": "Source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide"
  }'),
   ('{
    "id": "hang",
    "type": "simple",
    "categories": [
      "a"
    ],
    "considerate": {
      "the app froze": "a",
      "the app stopped responding": "a",
      "the app stopped responding to events": "a",
      "the app became unresponsive": "a"
    },
    "inconsiderate": {
      "hang": "a",
      "hanged": "a"
    },
    "note": "When describing the behavior of computer software, using the word “hanged” needlessly invokes the topic of death by self-harm or lynching.  Consider using the word “froze” or the phrase “stopped responding to events” or “became unresponsive” instead."
  }');

