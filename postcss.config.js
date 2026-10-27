/* eslint-disable no-undef */
module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {
        preset: 'default'
      },
      '@fullhuman/postcss-purgecss': {
        mode: 'all',
        // Hugo stats cover rendered HTML; scan JS too so classes applied after
        // load (Bootstrap, CookieConsent, theme code) count as used.
        content: [
          './hugo_stats.json',
          // Scan source templates/content as well as Hugo's rendered inventory.
          // This covers conditional layouts and markup/classes generated from
          // template branches that may not be represented in the stats file.
          './layouts/**/*.html',
          './_vendor/github.com/hugolify/**/layouts/**/*.html',
          './content/**/*.md',
          './content/**/*.html',
          './assets/js/**/*.js',
          './_vendor/github.com/hugolify/**/assets/js/**/*.js',
          './_vendor/github.com/orestbida/cookieconsent/dist/**/*.js',
          './_vendor/github.com/twbs/bootstrap/js/dist/**/*.js'
        ],
        dynamicAttributes: [
          'aria-current',
          'aria-hidden',
          'aria-expanded',
          'data-anim',
          'data-anim-show',
          'href',
          'role',
          'type'
        ],
        safelist: {
          standard: [
            'show',
            'showing',
            'hide',
            'fade',

            'show--consent',
            'show--preferences',
            'disable--interaction',
            'cc--anim',

            /^cc-/,
            /^cm/,
            /^cm__/,
            /^pm/,
            /^pm__/,
            /^cc--/,
            /^show--/,
            /^disable--/,

            'section__toggle-wrapper',
            'section__toggle',
            'toggle__label',
            'toggle__icon',
            'toggle__icon-circle',
            'toggle__icon-off',
            'toggle__icon-on',

            /-backdrop$/,
            /^is-/,
            /^splide_/,

            // --- Bổ sung các pattern bắt trạng thái động của Cookie Consent ---
            /--show$/,
            /--visible$/,
            /--active$/,
            /--open$/
          ],
          // CookieConsent adds #cc-main and its descendants at runtime, so they
          // are absent from hugo_stats.json and must be retained as a subtree.
          deep: [/^tobii/, /^cc-main$/]
        },
        defaultExtractor: (content) => {
          // Prefer Hugo's structured stats when parsing JSON. For JS source,
          // use the standard token extractor so runtime class names are found.
          try {
            const els = JSON.parse(content).htmlElements;
            if (els) {
              return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
            }
          } catch {
            // This content is not Hugo's JSON stats file.
          }

          return content.match(/[\w-/:]+(?<!:)/g) || [];
        }
      }
    }
  };
  