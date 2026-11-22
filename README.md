# Brädspelstips 2026

En statisk webbsida som bygger på `Brädspelstips 2024.docx`.

**Live:** https://hagbok.github.io/bradspelstips-2026/

Publicera ändringar: `git add -A`, `git commit -m "..."`, `git push`. Sidan uppdateras efter någon minut.

Höj versionsnumret `?v=3` på tre ställen i `docs/index.html` när du publicerar. Annars kan besökarnas webbläsare visa gamla `games.js`/`app.js`/`style.css` i upp till 10 minuter.

## Filer
- `docs/index.html`: sidan med intro, butiker och PS
- `docs/games.js`: **alla spel, kategorier och butiker**. Det är bara den här filen du behöver ändra.
- `docs/app.js`: ritar upp korten och sköter filtren (kategori, sök, antal spelare, "bara nyheter")
- `docs/style.css`: utseendet, med automatiskt mörkt läge
- `Förslag nya spel 2026.md`: kandidater till nya spel per kategori

## Lägga till ett spel
Kopiera ett block i `GAMES` i `docs/games.js`, ändra värdena och sätt `isNew: true`.

## Förhandsgranska lokalt
```powershell
python -m http.server 8026 --directory docs
```
Öppna sedan http://localhost:8026

## Publicera (gratis)
Lägg upp innehållet i mappen `docs/`. Ingen byggprocess behövs.

- **Netlify Drop**: dra mappen `docs` till https://app.netlify.com/drop. Det är snabbast och kräver inget git.
- **GitHub Pages**: pusha repot och gå till Settings → Pages. Välj Deploy from a branch → `main` / `/docs`. Ändringar som pushas syns på sidan efter någon minut.
- **Cloudflare Pages**: koppla ett repo eller ladda upp mappen direkt.
