To run parcel and start localhost, while in directory run the following in terminal
npx parcel src/index.html

To create a build (outlined in package.json)
npm run build

gitignore is configured

Spline
Layers must be visible to have their events triggered, but can have opacity 0
uses code export feature to Vanilla JS

To update gh-pages, and the live site moving forward:
Finish work on main, commit and push
Run npm run build at project root
Go to dist folder and commit changes there (don't push)
From root run git subtree push --prefix dist origin gh-pages
