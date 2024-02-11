# About
This repo contains two git repos within it. The main repo, at the root, is the full site. Within the `dist` folder, there is a separate repo, which is pushed to the `gh-pages` branch to deploy the site. Within `package.json` relative paths are configured for the dist build and local server context.

## To Serve Locally
- `npm run clean` to remove current `dist` folder and parcel cache
- `npm run start` to start server, which will rebuild the `dist`

## To Publish To Github Pages
- At root, git add, commit, and push as you normally would to save work
- Kill server if running via `ctrl + c`
- Run `npm run build` (make sure you have run the `clean` command above) at root to rebuild `dist` for production
- `cd dist` 
- `git add .` and `git commit -m '[message]'` for new `dist` build
- Run `git push origin main:gh-pages --force` to overwrite `gh-pages`
- Check to be sure custom domain name is still linked in github settings, add `noff.me` if not

## Spline
- Layers must be visible to have their events triggered, but can have opacity 0
- Uses code export feature to Vanilla JS
- Phone animations are controlled from UI 1 phone container float layer