@echo off
echo Building React app...
call npm run build

echo Deploying to GitHub Pages...
cd build
rmdir /s /q .git 2>nul
git init
git add .
git commit -m "Deploy React app - %date% %time%"
git remote add origin https://github.com/TheRealGintoki/portfolio
git fetch origin
git checkout -b gh-pages
git push --force origin gh-pages
cd ..

echo Deployment complete!
pause