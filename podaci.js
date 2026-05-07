/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║           JUSTSU — SVI PROIZVODI I CENE                        ║
  ╠══════════════════════════════════════════════════════════════════╣
  ║  Ovde menjate cene i nazive za SVE proizvode.                  ║
  ║  Otvorite u Notepadu, promenite, sačuvajte, osvežite stranicu. ║
  ║                                                                ║
  ║  Polja:                                                        ║
  ║    naziv_en  — naziv na engleskom                              ║
  ║    naziv_sr  — naziv na srpskom                                ║
  ║    kat       — kategorija: necklaces / earrings / sets /       ║
  ║                leather / pendant  (može i više: "necklaces pendant")
  ║    cena      — trenutna cena (USD)                             ║
  ║    cena_stara— prekrižena stara cena (0 = ne prikazuje se)     ║
  ║    badge     — "new" | "bestseller" | "scarce" | "gift" | ""  ║
  ║    boja      — HEX boja za prikaz (placeholder slika)         ║
  ║                                                                ║
  ║  Za dodavanje novog proizvoda: kopirajte jedan blok { },       ║
  ║  promenite podatke i dodajte zarez posle prethodnog bloka.     ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

const JUSTSU_PODACI = {

  /* ─── BESTSELLER (product stranica) ───────────── */
  bestseller: {
    naziv_en:       "Colorful Beaded Statement Necklace",
    naziv_sr:       "Šarena ogrlica od perli",
    cena:           59.88,      /* ← cena na product stranici */
    cena_stara:     79.00,      /* ← stara cena (0 = sakrij) */
    valuta:         "USD",
    na_stanju:      true,
    zivi_prikaz:    14,
    ocena:          4.9,
    broj_recenzija: 277
  },

  /* ─── DOSTAVA ──────────────────────────────────── */
  dostava: {
    besplatna_od: 100,
    valuta:       "USD"
  },

  /* ══════════════════════════════════════════════════
     SVI PROIZVODI — GRID NA GLAVNOJ STRANICI
     Dodajte nove proizvode ovde, jedan blok po komadu.
     ══════════════════════════════════════════════════ */
  svi_proizvodi: [

    /* ── OGRLICE ──────────────────────────────────── */
    {
      naziv_en:   "Colorful Beaded Statement Necklace",
      naziv_sr:   "Šarena ogrlica od perli",
      kat:        "necklaces",
      cena:       59.88,        /* ← CENA */
      cena_stara: 79.00,
      badge:      "bestseller",
      boja:       "#3d7a7a"
    },
    {
      naziv_en:   "White & Navy Blue Geometric Necklace",
      naziv_sr:   "Belo-teget geometrijska ogrlica",
      kat:        "necklaces",
      cena:       59.88,        /* ← CENA */
      cena_stara: 0,
      badge:      "new",
      boja:       "#1a3a6a"
    },
    {
      naziv_en:   "Navy Blue Striped Statement Necklace",
      naziv_sr:   "Teget prugasta ogrlica",
      kat:        "necklaces",
      cena:       59.88,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#2a3060"
    },
    {
      naziv_en:   "Pink & Red Polymer Clay Necklace",
      naziv_sr:   "Roze i crvena ogrlica od gline",
      kat:        "necklaces",
      cena:       59.88,        /* ← CENA */
      cena_stara: 0,
      badge:      "scarce",
      boja:       "#c04870"
    },
    {
      naziv_en:   "Ocean Spectrum Layered Necklace",
      naziv_sr:   "Ogrlica okean spektar",
      kat:        "necklaces",
      cena:       52.50,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#2756a8"
    },
    {
      naziv_en:   "Bohemian Earth Tones Necklace",
      naziv_sr:   "Boho ogrlica u zemlanim tonovima",
      kat:        "necklaces",
      cena:       48.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#8a5a2a"
    },
    {
      naziv_en:   "Forest Green Statement Necklace",
      naziv_sr:   "Šumsko-zelena ogrlica",
      kat:        "necklaces",
      cena:       54.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "new",
      boja:       "#2a6a2a"
    },
    {
      naziv_en:   "Sunset Orange Bead Necklace",
      naziv_sr:   "Ogrlica boja zalaska sunca",
      kat:        "necklaces",
      cena:       49.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#c87050"
    },
    {
      naziv_en:   "Minimalist Black & Gold Necklace",
      naziv_sr:   "Minimalistička crno-zlatna ogrlica",
      kat:        "necklaces pendant",
      cena:       42.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#8a6a1a"
    },
    {
      naziv_en:   "Terracotta Boho Necklace",
      naziv_sr:   "Terakota boho ogrlica",
      kat:        "necklaces",
      cena:       46.00,        /* ← CENA */
      cena_stara: 60.00,
      badge:      "",
      boja:       "#c0522a"
    },
    {
      naziv_en:   "Lavender Dream Necklace",
      naziv_sr:   "Ogrlica lavanda san",
      kat:        "necklaces",
      cena:       51.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "new",
      boja:       "#9a6aaa"
    },
    {
      naziv_en:   "Sage & Olive Statement Necklace",
      naziv_sr:   "Žalfija i maslinasta ogrlica",
      kat:        "necklaces",
      cena:       53.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#6a8a4a"
    },

    /* ── MINĐUŠE ──────────────────────────────────── */
    {
      naziv_en:   "Handmade Bird Earrings with Fringe",
      naziv_sr:   "Minđuše ptica sa resicama",
      kat:        "earrings leather",
      cena:       48.89,        /* ← CENA */
      cena_stara: 0,
      badge:      "scarce",
      boja:       "#3d7a8a"
    },
    {
      naziv_en:   "Abstract Leaf Drop Earrings",
      naziv_sr:   "Minđuše list apstrakt",
      kat:        "earrings",
      cena:       36.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#4a8a3a"
    },
    {
      naziv_en:   "Geometric Hoop Earrings",
      naziv_sr:   "Geometrijske karičaste minđuše",
      kat:        "earrings",
      cena:       32.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "new",
      boja:       "#c4a030"
    },
    {
      naziv_en:   "Teal & Gold Statement Earrings",
      naziv_sr:   "Tirkizno-zlatne minđuše",
      kat:        "earrings",
      cena:       38.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#3d7a7a"
    },
    {
      naziv_en:   "Bohemian Feather Earrings",
      naziv_sr:   "Boho minđuše perje",
      kat:        "earrings leather",
      cena:       34.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#9a5a2a"
    },

    /* ── SETOVI ───────────────────────────────────── */
    {
      naziv_en:   "Mustard Gold Jewelry Set",
      naziv_sr:   "Senf-zlatni set nakita",
      kat:        "sets",
      cena:       89.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "gift",
      boja:       "#c4a060"
    },
    {
      naziv_en:   "Ocean Blue Necklace & Earrings Set",
      naziv_sr:   "Okean plavi komplet ogrlica i minđuše",
      kat:        "sets",
      cena:       94.00,        /* ← CENA */
      cena_stara: 120.00,
      badge:      "",
      boja:       "#1a4a7a"
    },
    {
      naziv_en:   "Warm Earth Tones Jewelry Set",
      naziv_sr:   "Komplet u zemlanim tonovima",
      kat:        "sets",
      cena:       86.00,        /* ← CENA */
      cena_stara: 0,
      badge:      "",
      boja:       "#c4783a"
    }

    /* ─────────────────────────────────────────────────
       DODAJTE NOVE PROIZVODE OVDE.
       Primer:
       ,
       {
         naziv_en:   "My New Necklace",
         naziv_sr:   "Moja nova ogrlica",
         kat:        "necklaces",
         cena:       55.00,
         cena_stara: 0,
         badge:      "",
         boja:       "#3d7a7a"
       }
       ───────────────────────────────────────────────── */
  ]

};

/* ════ NE MENJATI ISPOD OVE LINIJE ════════════════════════════════ */
(function() {
  function fmt(n, val) { return val + ' ' + n.toFixed(2); }
  function primeni() {
    const b = JUSTSU_PODACI.bestseller;
    const d = JUSTSU_PODACI.dostava;
    document.querySelectorAll('.prod-price').forEach(el => { el.textContent = fmt(b.cena, b.valuta); });
    document.querySelectorAll('.prod-price-old').forEach(el => {
      if (b.cena_stara > 0) { el.textContent = fmt(b.cena_stara, b.valuta); el.style.display = ''; }
      else { el.style.display = 'none'; const s = el.nextElementSibling; if (s) s.style.display = 'none'; }
    });
    document.querySelectorAll('.prod-price-save').forEach(el => {
      if (b.cena_stara > 0 && b.cena_stara > b.cena) {
        const p = Math.round((1 - b.cena / b.cena_stara) * 100);
        el.setAttribute('data-en', 'Save ' + p + '%'); el.setAttribute('data-sr', 'Uštedite ' + p + '%');
        el.textContent = 'Save ' + p + '%';
      }
    });
    document.querySelectorAll('.sticky-buy .btn-primary').forEach(el => {
      el.setAttribute('data-en', 'Add to Cart — ' + fmt(b.cena, b.valuta));
      el.setAttribute('data-sr', 'Dodaj u korpu — ' + fmt(b.cena, b.valuta));
      if (el.textContent.includes('Add to Cart') || el.textContent.includes('Dodaj'))
        el.textContent = 'Add to Cart — ' + fmt(b.cena, b.valuta);
    });
    document.querySelectorAll('.rating-num,.avg-num').forEach(el => { el.textContent = b.ocena.toFixed(1); });
    document.querySelectorAll('.rating-count').forEach(el => {
      el.setAttribute('data-en', b.broj_recenzija + ' reviews');
      el.setAttribute('data-sr', b.broj_recenzija + ' recenzija');
      el.textContent = b.broj_recenzija + ' reviews';
    });
    document.querySelectorAll('.avg-count').forEach(el => {
      el.setAttribute('data-en', 'Based on ' + b.broj_recenzija + ' reviews');
      el.setAttribute('data-sr', 'Na osnovu ' + b.broj_recenzija + ' recenzija');
      el.textContent = 'Based on ' + b.broj_recenzija + ' reviews';
    });
    document.querySelectorAll('.prod-live span:last-child,.live-badge span:last-child').forEach(el => {
      el.setAttribute('data-en', b.zivi_prikaz + ' people viewing this right now');
      el.setAttribute('data-sr', b.zivi_prikaz + ' osoba trenutno gleda');
      el.textContent = b.zivi_prikaz + ' people viewing this right now';
    });
    document.querySelectorAll('.recip-text').forEach(el => {
      el.setAttribute('data-en', '<strong>Free worldwide shipping</strong> on all orders over $' + d.besplatna_od);
      el.setAttribute('data-sr', '<strong>Besplatna dostava</strong> širom sveta za sve narudžbine preko ' + d.besplatna_od + '$');
      el.innerHTML = '<strong>Free worldwide shipping</strong> on all orders over $' + d.besplatna_od;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', primeni);
  else primeni();
})();
