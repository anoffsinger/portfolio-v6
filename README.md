# About
This repo contains two git repos within it. The main repo, at the root, is the full site. Within the `dist` folder, there is a separate repo, which is pushed to the `gh-pages` branch to deploy the site. Within `package.json` relative paths are configured for the `dist` build and local server context. The `npm run build` step also uses Copy Files to push images into dist for OG tags, because they are not referenced relative, but directly, this causes Parcel to not correctly bundle them.

## If On a New Machine
- `npm install` to add packages
- Check terminal and make sure Parcel and Parcel Transformer are installed—find commands on npmjs.com
- If the git repo in `dist` has been lost, it will need to be added when you build `dist` for the the first time
- Be sure to add the remote for the repo while in `dist` after creating the repo by running `git remote add origin [clone url]`

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
- Note, filepaths from index might be messed up if not serving to custom url

## Spline
- When you want to add new UI to spline, you first duplicate the "UI #" group
- Then duplicate 'Animation Trigger #' 
- In spline.js, create a new set of the trigger functions
- Update the development IDs for both the animation trigger and for the phone UI
- When finished, export > code export > vanilla JS > push big cta
- General notes
    - Layers must be visible to have their events triggered, but can have opacity 0
    - Phone animations are controlled from UI 1 phone container float layer (not sure what this note was for?)