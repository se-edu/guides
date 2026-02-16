function getScripts() {
    return [
        '<script src="https://unpkg.com/@customviews-js/customviews@v1" data-base-url="/guides"></script>'
    ];
};

const tagConfig = {
  'cv-toggle': { isCustomElement: true },
  'cv-tabgroup': { isCustomElement: true },
  'cv-tab': { isCustomElement: true },
  'cv-tab-body': { isCustomElement: true },
  'cv-tab-header': { isCustomElement: true },
  'cv-define-placeholder': { isCustomElement: true },
  'cv-placeholder-input': { isCustomElement: true }
};

module.exports = { getScripts, tagConfig };
