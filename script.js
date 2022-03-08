const sounds = {
    "sounds": [
        {
            "title": "Alarm",
            "file": "alarm"
        },
        {
            "title": "Applaus",
            "file": "applause"
        },
        {
            "title": "Palme",
            "file": "auf_der_palme"
        },
        {
            "title": "Bart",
            "file": "bart"
        },
        {
            "title": "Durchfall",
            "file": "bauchschmerzen_tierischen_durchfall"
        },
        {
            "title": "Blah",
            "file": "blah_blah_blah"
        },
        {
            "title": "Boooh",
            "file": "booh"
        },
        {
            "title": "Dann geh",
            "file": "dann_geh"
        },
        {
            "title": "Geht doch nicht",
            "file": "das_geht_doch_nich"
        },
        {
            "title": "Hingekackt",
            "file": "das_sieht_aus_wie_hingekackt_und_hingeschissen"
        },
        {
            "title": "Drogen",
            "file": "das_sind_die_drogn"
        },
        {
            "title": "NEIN",
            "file": "defititiv_nein"
        },
        {
            "title": "Dreckschwein",
            "file": "dreckschwein"
        },
        {
            "title": "Toll",
            "file": "es_war_so_ganz_toll"
        },
        {
            "title": "Fail",
            "file": "fail"
        },
        {
            "title": "Ehrlisch",
            "file": "ganz_ehrlisch"
        },
        {
            "title": "Halt die Fresse",
            "file": "halt_die_fresse"
        },
        {
            "title": "Schweine",
            "file": "ihr_schweine"
        },
        {
            "title": "Egal",
            "file": "is_mir_egal"
        },
        {
            "title": "MiMiMi",
            "file": "mi_mi_mi"
        },
        {
            "title": "Nein Nein Nein",
            "file": "nein_nein_nein"
        },
        {
            "title": "Niemals",
            "file": "niemals"
        },
        {
            "title": "Nünt passiert",
            "file": "nünt_passiert"
        },
        {
            "title": "Pussy",
            "file": "pussy"
        },
        {
            "title": "Richtisch",
            "file": "richtisch"
        },
        {
            "title": "Sex Röschti",
            "file": "sex_und_röschti"
        },
        {
            "title": "Scheisse",
            "file": "so_einen_scheiss_kann_ich_nicht_mehr_hören"
        },
        {
            "title": "Tante Judda",
            "file": "so_tante_judda"
        },
        {
            "title": "Waaas",
            "file": "waaas"
        },
        {
            "title": "Weil schön",
            "file": "weil_wir_so_schön_sind"
        },
        {
            "title": "Wow",
            "file": "wow"
        }
    ]
};

const createAudioTag = (title, file) => {
    return `
            <source src="sounds/${file}.mp3" type="audio/mpeg">
    `
}

const createEntry = (title, file) => {
        return `
             <div onclick="playAudio('${file}')"  class="my-container"><div class="my-text">${title}</div></div>
        `
}

const html = document.getElementById("entries");
const audio = document.getElementById("sounds");

sounds.sounds.map(e => {
    const audioDiv = document.createElement("audio");
    audioDiv.setAttribute("id", e.file);
    audioDiv.innerHTML = createAudioTag(e.title, e.file);

  audio.append(audioDiv);

  const entry = document.createElement("div");
  entry.classList.add("col");
  entry.innerHTML = createEntry(e.title, e.file);
  html.append(entry);
});


function playAudio(sound) {
    document.getElementById(sound).play();
}








