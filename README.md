# GraphQL app

# Þetta forrit notast við Nodejs, Nextjs, React, Typescript, Sass og Classnames.

Til að ræsa upp forritið:
* Opna terminal glugga inn í rótarmöppu forritsins, 'GraphQL/'
* Skrifa í terminal gluggan 'npm install' til að sækja nauðsynlega pakka.
* Skrifa í terminal gluggan 'npm run build'
* Skrifa síðan í terminal gluggan 'npm start 3000', talan 3000 er portanúmerið (það er hægt að velja annað númer).

Forsíða birtir gögn úr `allFilms` í GraphQL API, sér í lagi `title`, `episodeID`, `openingCrawl` og þá karaktera sem koma fram í myndinni ásamt hlekk á nánari upplýsingar um viðkomandi. Einnig eru hlekkir á `Films` og `Characters` í haus síðana.

`Films` hlekkurinn flytur notendan á forsíðuna.
`Characters` hlekkurinn flytur notendan á síðu sem birtir fyrstu 10 karaktera úr myndunum en einnig takka sem leyfir að sækja næstu 10 o.s.fr. þar til búið er að birta alla karaktera.
