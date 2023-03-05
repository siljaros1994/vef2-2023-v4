# Vefforritun 2, 2023, verkefni 4: kennsluskráar framendi

Verkefnið er framhald af verkefni 3 og snýst um að setja upp react framenda fyrir vefþjónustur á kennsluskránni okkar.

## Markmið

- Uppsetning og notkun á React með [Create React App (CRA)](https://create-react-app.dev/) eða [Next.js](https://nextjs.org/).
- Noktun á React components með props og state.
- Routing í React verkefnum.

## Vefþjónustur og gögn

Viðburði skal sækja úr vefþjónustu ykkar úr verkefni 3. Þið getið líka sótt [sýnilausn á verkefni 3](https://github.com/vefforritun/vef2-2023-v3-synilausn) (gefin út 10. mars) og sett hana upp í hýsingu.

Á forsíðu eru viðburðir frá `/events` birtir, fyrir hvern viðburð eru gögn sótt á `/events/:id`. Ekki þarf að útfæra síðuflettingu (e. paging) í viðmóti.

Grunnslóð (_base url_) á vefþjónustu skal geyma í env breytu (sjá [skjölun fyrir CRA](https://create-react-app.dev/docs/adding-custom-environment-variables/) og [skjölun fyrir NextJS](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)).

Meðan verkefni er þróað getur verið gott að hafa vefþjónustur keyrandi _locally_, þá er viðeigandi slóð sett í env breytu, t.d. `NEXT_PUBLIC_API_BASE_URL=https://example.org/`.

## Virkni

Setja skal upp þrjár síður:

- Forsíðu sem birtir lista af deildum frá vefþjónustu (`GET /departments`), sú síða skal leyfa að útbúa nýja deild.
- Síðu fyrir deild eftir _slug_ (`GET /departments/:slug`), sú síða skal leyfa að eyða deild.
- Síðu fyrir áfanga deildar (`GET /departments/:slug/courses`), sú síða skal leyfa að bæta við áfanga.

Ef CRA er notað skal nota [react router](https://reactrouter.com/en/main) til að setja upp routing og nota það til að viðhalda stöðu á milli síðna. Ef Next.js er notað skal nota `pages/` möppu fyrir routing.

Búa skal til a.m.k. fimm componenta sem halda utan um viðeigandi stöðu og taka við gögnum gegnum props:

- `Layout` component sem heldur utan um header, efni og footer á síðu.
- `Departments` component sem birtir upplýsingar um staka deild.
- `Department` component sem staka deild og leyfir að eyða henni.
- `Courses` component sem birtir áfanga.
- Form componenta: `Form`, `Input` og `Button`. Ekki þarf að útbúa sértæka componenta fyrir lengri texta eða tölur fyrir einingar.

Ef villur koma upp frá vefþjónustu skal birta þær, _ekki_ þarf að útfæra neina auka validation í framendanum.

## Viðmót

Útbúa skal einfalt viðmót sem uppfyllir kröfur um virkni. Leyfilegt er að endurnýta viðmót úr verkefni 1 með viðbótum.

## Tæki, tól og test

Setja skal upp verkefni með `create react app` (CRA) eða NextJS.

Setja skal upp `eslint`. Engar villur skulu vera til staðar.

## Bónus

Bæta við að hægt sé að breyta upplýsingum um deild.

Bæta við að hægt sé að eyða áfanga og breyta áfanga.

## GitHub og hýsing

Setja skal upp vefinn á Netlify, Vercel, Render, Railway eða Heroku (ath að uppsetning á Heroku mun kosta) tengt við vefþjónustur í _annari_ uppsetningu.

## Mat

- 30% — Forsíða með lista af deildum og möguleiki á að bæta við deild.
- 20% — Deildarsíða með möguleika á að eyða.
- 20% — Áfgangasíða með möguleika á að bæta við áfanga.
- 10% — Viðmót.
- 10% — Tæki, tól og test.
- 10% — GitHub og hýsing.
- 5% — _Bónus_, breyta upplýsingum um deild.
- 10% — _Bónus_, eyða áfanga og breyta áfang.

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 6. mars 2023.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags fimmtudaginn 23. mars 2023.

Skil skulu innihalda:

- Slóð á verkefni keyrandi í hýsingu.
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `MarzukIngi`
  - `ofurtumi`
  - `osk`

---

> Útgáfa 0.1

| Útgáfa | Breyting      |
| ------ | ------------- |
| 0.1    | Fyrsta útgáfa |
