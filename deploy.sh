#!/bin/bash

# Exit immediately on error
set -e

MAIN_BRANCH="starter"
DEPLOY_BRANCH="deploy"

echo "🏗️  Checking out $MAIN_BRANCH and building..."
git checkout $MAIN_BRANCH
npm run build

echo "🚀 Switching to $DEPLOY_BRANCH..."
git checkout $DEPLOY_BRANCH

echo "🧼 Cleaning deploy branch (safely)..."

# Remove all files except .git and .gitignore
find . -mindepth 1 \
  -not -name '.git' \
  -not -name '.' \
  -not -name '.gitignore' \
  -exec rm -rf -- {} +

echo "📦 Copying build files from $MAIN_BRANCH..."
git checkout $MAIN_BRANCH -- build
cp -r build/* ./
rm -rf build/

echo "📤 Committing and pushing to $DEPLOY_BRANCH..."
git add .
git commit -m "🚀 Deploy latest build from $MAIN_BRANCH"
git push origin $DEPLOY_BRANCH

echo "✅ Deploy complete!"
