# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an academic personal website built with Jekyll and hosted on GitHub Pages. It uses the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template, which is based on the Minimal Mistakes Jekyll theme. The site showcases academic publications, talks, teaching, portfolio projects, and blog posts.

## Development Commands

### Local Development
- **Run locally**: `bundle exec jekyll liveserve` (serves from localhost:4000 with auto-rebuild)
- **Clean dependencies**: `bundle clean`
- **Install dependencies**: `bundle install` (delete Gemfile.lock if errors occur)
- **Prerequisites**: Requires ruby-dev, bundler, and nodejs

### Asset Management
- **Build JavaScript**: `npm run build:js` or `npm run uglify`
- **Watch JavaScript changes**: `npm run watch:js`

## Site Architecture

### Content Collections
The site uses Jekyll collections for organized content:
- `_publications/`: Academic papers and research publications
- `_talks/`: Conference presentations and talks  
- `_teaching/`: Teaching experiences and courses
- `_portfolio/`: Project showcases
- `_posts/`: Blog posts
- `_pages/`: Static pages (About, CV, etc.)

### Data Management
- `_data/navigation.yml`: Site navigation structure
- `_data/authors.yml`: Author information
- `_data/ui-text.yml`: UI text translations
- `_data/comments/`: Static comments via Staticman

### Content Generation
The `markdown_generator/` directory contains Jupyter notebooks and Python scripts that convert TSV files into markdown files for publications and talks:
- `publications.ipynb` / `publications.py`: Generates publication pages from TSV data
- `talks.ipynb` / `talks.py`: Generates talk pages from TSV data
- `PubsFromBib.ipynb` / `pubsFromBib.py`: Converts bibliography files to publication pages
- `talkmap.ipynb` / `talkmap.py`: Creates interactive maps of talk locations

### Theme Structure
- `_layouts/`: Page templates (single, archive, talk, etc.)
- `_includes/`: Reusable components (navigation, analytics, social sharing)
- `_sass/`: SCSS stylesheets organized by component
- `assets/`: Static assets (CSS, JS, fonts, images)

### Configuration
- `_config.yml`: Main Jekyll configuration with site metadata, author info, and collections
- `_config.dev.yml`: Development-specific overrides
- `Gemfile`: Ruby gem dependencies for Jekyll and plugins

## Important Notes

- The site is configured for GitHub Pages deployment with the `github-pages` gem
- Static comments are handled via Staticman (configured but provider set to false)
- Analytics can be enabled via Google Universal Analytics in `_config.yml`
- The site excludes development files and uses compressed HTML output for production
- Publication and talk data should be managed via the TSV files and generation scripts rather than manually editing markdown files