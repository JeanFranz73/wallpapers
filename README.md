# wallpapers

simple wallpaper website made with vue, tailwindcss and headlessui, with a lowercase prompt-like style.

[add your wallpaper](#adding-wallpapers)

[installation](#project-setup)

## adding wallpapers

if you want to send a wallpaper, you can do so by creating a pull request with the wallpaper added to the [`public/images/`](public/images/) folder and the metadata added to the [`public/wallpapers.json`](public/wallpapers.json) file following the format below:

```jsonc
{
  "title": "title", // the title of the wallpaper
  "author": "author", // or unkown
  "author_url": "https://author.url", // the url of the author
  "filename": "wallpaper.png", // the filename of the wallpaper
  "categories": ["category1", "category2"] // the categories of the wallpaper
}
```

you can add multiple categories to the wallpaper, and the current available categories are:

- `fantasy`
- `scifi`
- `games`
- `nature`
- `sports`
- `anime`

## project setup

this project uses bun instead of node, primarily because of the speed and I wanted to try new technologies.

### with docker

this project has a docker compose file, so you can run it with docker.

```bash
docker compose up -d
```

to stop the project, run:

```bash
docker compose down
```

### manually

if you want to run it manually, you can do so by installing bun first.

To install bun, run the following command:

```bash
# for unix:
curl -fsSL https://bun.sh/install | bash

# for windows:
powershell -c "irm bun.sh/install.ps1 | iex"
```

then, to install the dependencies, run:

```bash
bun install
```

and to execute the project, run:

```bash
bun dev
```

the project will be available at [`http://localhost:5173/wallpapers/`](http://localhost:5173/wallpapers/).
