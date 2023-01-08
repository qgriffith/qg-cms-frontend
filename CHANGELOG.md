# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [1.2.2] - 2023-1-07
### Changed
- Switch from NPM to Yarn



## [1.2.1] - 2023-1-07
### Changed
- Upgraded to NextJS 13


## [1.2.0] - 2022-8-21
### Added
- Resume 
- Location and Phone to footericons
- New SVG for phone and map


## [1.1.5] - 2022-8-7
### Added
- Change the color of the active link in the navbar

## [1.1.4] - 2022-8-6
### Changed
- Changed the name of NavBar to MobileNavBar 

### Removed
- Removed the word "hello" from the MobileNavBar

## [1.1.3] - 2022-8-6
### Added
- Pull NavBar data from Strapi instead of a hard coded file
- Add Strava Icont to the about page

### Changed
- Increased the size of the logo to better match the increased navbar
- Increased the size of the site title

## [1.1.2] - 2022-8-5
### Added
- Installed the sharp module to speed up images

### Changed
- Changed tags to be queried during getStaticProps on all pages that need tags instead of query at load time. This should have tags showing up on the page instead of a few second delay

## [1.1.1] - 2022-8-5
### Changed
- Cleaned up the footer and layout from hard coded values of sitename and pulling from Strapi Global Component

#### Added
- Added round corners to the banner and a drop shadow to match the section below
- Added a slight opacity to the svg in the banner


## [1.1.0] - 2022-8-3
### Changed
- Sort articles by publishedAT for the All Articles Page
- Site title is now pulled from Strapi instead of being hard coded
- Site logo is now pulled frm Strapi instead of being hard coded
- Updated favicon pulling from Strapi

### Added
- Default SEO for all pages

## [1.0.1] - 2022-8-1
### Changed
- Changed the About page to be static and not server side

## [1.0.0] - 2022-08-01
### Added
- Initial Release
