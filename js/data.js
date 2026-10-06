// Content for the DUSKLINE concept: crew, cargo, expeditions and the event deck.
// Journal entries are written by Lin, 15, in her diary.

export const CREW = [
  { id: 'mara', name: 'Mara', role: 'Ingegnera' },
  { id: 'elio', name: 'Elio', role: 'Medico e botanico' },
  { id: 'lin', name: 'Lin', role: 'Pilota, 15 anni' },
  { id: 'tobia', name: 'Tobia', role: '8 anni' },
].map((c) => ({ ...c, img: `assets/img/crew_${c.id}.webp` }));

// kg sum = 225; safe landing mass = 110 → the player must dump about half.
export const CARGO = [
  { id: 'razioni', name: 'Razioni', kg: 30, desc: '+6 cibo', give: { cibo: 6 } },
  { id: 'acqua', name: 'Acqua', kg: 36, desc: '+6 acqua', give: { acqua: 6 } },
  { id: 'batterie', name: 'Batterie', kg: 24, desc: '+4 energia', give: { energia: 4 } },
  { id: 'elettrolizzatore', name: 'Elettrolizzatore', kg: 28, desc: 'Acqua + energia → O₂', tool: true },
  { id: 'pannello', name: 'Pannello solare', kg: 22, desc: '+energia ogni giorno', tool: true },
  { id: 'trivella', name: 'Trivella', kg: 20, desc: '+acqua dal ghiaccio', tool: true },
  { id: 'tuta_termica', name: 'Tuta termica', kg: 18, desc: 'Spedizioni nel lato Brace', tool: true },
  { id: 'tuta_isolante', name: 'Tuta isolante', kg: 18, desc: 'Spedizioni nel lato Brina', tool: true },
  { id: 'radio', name: 'Radio', kg: 14, desc: 'Ascoltare. Chiamare.', tool: true },
  { id: 'medikit', name: 'Medikit', kg: 8, desc: '2 cure', give: { medikit: 2 } },
  { id: 'semi', name: 'Serra', kg: 6, desc: 'Cibo dal giorno 3', tool: true },
  { id: 'giocattolo', name: 'Robot di Tobia', kg: 1, desc: 'Inutile. Forse.', tool: true },
].map((c) => ({ ...c, icon: `assets/icons/${c.id}.webp` }));

export const SAFE_KG = 110;
export const DAYS = 10;

export const DESTS = {
  brace: { name: 'Lato Brace', img: 'ev_brace', gear: 'tuta_termica', desc: 'Metallo e batterie tra la lava. Caldo che uccide.' },
  brina: { name: 'Lato Brina', img: 'ev_brina', gear: 'tuta_isolante', desc: 'Ghiaccio da sciogliere. Gelo e silenzio.' },
  relitto: { name: 'Relitto ARCA-7', img: 'ev_relitto', gear: null, desc: 'Quel che resta della nave madre.', needs: 'relitto' },
};

export const DAY_FLAVOR = [
  'Il Lume è fermo all’orizzonte. Come ieri.',
  'Qui non tramonta mai. L’orologio di bordo dice che è mattina.',
  'Il vento soffia verso il sole, sempre nella stessa direzione.',
  'Dal lato Brina arriva un freddo che ha un suono.',
  'Le piante si sono girate di un millimetro verso il Lume.',
];

const rnd = Math.random;
const has = (G, id) => G.tools.has(id);
const present = (G, id) => G.crew.find((c) => c.id === id && c.alive && !c.away);

// Each event: { id, img, title, text(G), choices: [{ label, ok?(G), run(G) → string }] }
export const EVENTS = {
  arrivo: {
    img: 'ev_crash', title: 'Giorno uno',
    text: (G) => {
      const zone = {
        brace: 'Siamo troppo vicini al lato Brace. Il metallo della capsula ticchetta per il calore e l’acqua evapora mentre la guardi.',
        brina: 'Siamo finiti troppo dentro il lato Brina. Il fiato ghiaccia sui vetri e le batterie soffrono.',
        crepuscolo: 'Siamo nella fascia del crepuscolo: il Lume a sinistra, la notte a destra, noi in mezzo. Papà dice che è il posto giusto.',
      }[G.zone];
      return `Siamo vivi. La capsula no, non del tutto (scafo ${G.hull}%). ${zone}`;
    },
    choices: [{ label: 'Facciamo l’inventario', run: (G) => `Abbiamo salvato: ${G.savedNames.join(', ') || 'niente. Proprio niente'}.` }],
  },
  relitto: {
    img: 'ev_relitto', title: 'Fumo sulla cresta',
    text: () => 'Fumo sulla cresta a est. È l’ARCA-7, o quel che ne resta. Mamma dice che dentro potrebbe esserci di tutto. Anche cose che non vogliamo trovare.',
    choices: [
      { label: 'Segnalo sulla mappa', run: (G) => { G.flags.relitto = true; return 'Nuova destinazione per le spedizioni: il relitto.'; } },
    ],
  },
  segnale: {
    img: 'ev_segnale', title: 'Tre impulsi',
    text: (G) => G.flags.signal
      ? 'Il segnale è tornato, più forte. Tobia dice che “adesso ci ha sentiti”. Non so se è una cosa buona.'
      : 'Un segnale dal lato Brina. Tre impulsi, pausa, tre impulsi. Tobia giura che ci sta chiamando.',
    choices: [
      { label: 'Registralo con la radio', ok: (G) => has(G, 'radio'),
        run: (G) => { G.flags.signal++; return G.flags.signal >= 2 ? 'Ho registrato tutto. Non è una voce: è una mappa. E finisce qui, da noi.' : 'Registrato. Sembra una sequenza. Sembra.'; } },
      { label: 'Spegni tutto', run: () => 'Silenzio. Tobia mi tiene il muso.' },
    ],
  },
  tempesta: {
    img: 'ev_tempesta', title: 'Il Lume starnutisce',
    text: () => 'Il Lume ha starnutito: il cielo è diventato viola e la radio fischia. Mamma vuole chiudere tutto.',
    choices: [
      { label: 'Ripara i pannelli (−1 energia)', ok: (G) => has(G, 'pannello') && G.res.energia >= 1,
        run: (G) => { G.res.energia -= 1; return 'Pannelli chiusi in tempo. Abbiamo perso un po’ di energia, non il pannello.'; } },
      { label: 'Tutti dentro e speriamo', run: (G) => {
        if (has(G, 'pannello')) {
          if (rnd() < 0.5) { G.res.energia += 3; return 'Il pannello si è bevuto la tempesta: +3 energia.'; }
          G.tools.delete('pannello'); return 'Il pannello ora è un’opera d’arte moderna. Addio pannello.';
        }
        G.hull -= 12; return 'Le scariche hanno bruciato un pezzo di scafo (−12%).';
      } },
    ],
  },
  flora: {
    img: 'ev_flora', title: 'Piante che si inchinano',
    text: () => 'Le piante qui si inchinano tutte verso il Lume. Papà le guarda come guardava me quando ho detto la prima parola. Dice che forse si mangiano. “Forse”.',
    choices: [
      { label: 'Elio le assaggia', ok: (G) => present(G, 'elio'), run: (G) => {
        if (rnd() < 0.6) { G.res.cibo += 3; return 'Sanno di menta e metallo. +3 cibo. Papà ha pianto un po’.'; }
        const e = present(G, 'elio'); e.status = 'malato'; e.sick = 0; return 'Papà è diventato verde. Letteralmente. Elio è malato.';
      } },
      { label: 'Meglio di no', run: () => 'Restiamo affamati, ma del nostro colore originale.' },
    ],
  },
  scricchiolii: {
    img: 'ev_pod', title: 'Sbalzi d’umore',
    text: () => 'La capsula scricchiola: da un lato cuoce, dall’altro gela. Mamma dice che il metallo “soffre di sbalzi d’umore”. Come me.',
    choices: [
      { label: 'Mara ripara (−1 energia)', ok: (G) => present(G, 'mara') && G.res.energia >= 1,
        run: (G) => { G.res.energia -= 1; G.hull = Math.min(100, G.hull + 15); return 'Saldature fatte. Scafo +15%.'; } },
      { label: 'Ci pensiamo domani', run: (G) => { G.hull -= 8; return 'Domani la crepa era più lunga. Scafo −8%.'; } },
    ],
  },
  tobia: {
    img: 'ev_flora', title: 'Tobia è sparito',
    text: () => 'Tobia è sparito. Le sue impronte vanno verso le piante luminose.',
    when: (G) => present(G, 'tobia'),
    choices: [
      { label: 'Lo cerco io', ok: (G) => present(G, 'lin'), run: () => 'L’ho trovato che parlava a un lichene. Il lichene, giuro, rispondeva.' },
      { label: 'Aspettiamo che torni', run: (G) => {
        if (rnd() < 0.7) { G.res.cibo += 1; return 'È tornato con un tubero viola. Papà dice che è commestibile. +1 cibo.'; }
        const t = present(G, 'tobia'); t.status = 'ferito'; t.hurt = 0; return 'È tornato zoppicando. Tobia è ferito.';
      } },
    ],
  },
  vento: {
    img: 'ev_brace', title: 'Vento di forno',
    text: () => 'Oggi il vento soffia dal lato Brace. Sa di ferro caldo e di forno.',
    choices: [
      { label: 'Sigilla i portelli (−1 energia)', ok: (G) => G.res.energia >= 1, run: (G) => { G.res.energia -= 1; return 'Portelli sigillati. Dentro si respira.'; } },
      { label: 'Lascia correre', run: (G) => { G.res.acqua = Math.max(0, G.res.acqua - 1); return 'Una tanica ha sudato via mezzo litro. −1 acqua.'; } },
    ],
  },
  robot: {
    img: 'ev_pod', title: 'Di guardia',
    when: (G) => has(G, 'giocattolo'),
    text: () => 'Tobia ha messo il robottino di latta sul cruscotto, “di guardia”. Funziona: oggi nessuno ha litigato.',
    choices: [{ label: 'Bravo robot', run: (G) => { G.crew.forEach((c) => { if (c.alive) c.hunger = Math.max(0, c.hunger - 1); }); return 'Ci siamo sentiti meno affamati. Non chiedetemi come.'; } }],
  },
  notte: {
    img: 'ev_pod', title: 'Luci spente',
    text: () => 'Abbiamo spento le luci per risparmiare. Papà racconta della Terra. Non mi ricordo il mare.',
    choices: [{ label: 'Ascolta', run: () => 'Mi sono addormentata a metà del mare.' }],
  },
};

// Fixed beats; the other days draw from the deck.
export const SCHEDULE = { 1: 'arrivo', 2: 'relitto', 4: 'segnale', 6: 'tempesta', 8: 'segnale' };
export const DECK = ['flora', 'scricchiolii', 'tobia', 'vento', 'robot', 'notte'];
