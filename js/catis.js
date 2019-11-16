async function loadTranslations() {
  localStorage.removeItem('i18n');
  try {
    const response = await fetch('lang/i18n.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    localStorage.setItem('i18n', JSON.stringify(json));
  } catch (error) {
    console.error('Error:', error);
  }


  getParameterValue();
  updateTags();
}

function updateTags() {
  const allIds = document.querySelectorAll('[id^="i18n"]');
  const translations = JSON.parse(localStorage.getItem('i18n'));
  for (let translateId of allIds) {
    localizeHTMLTag(translations, translateId);
  }
}

var localize = function (translations, tagId) {
  if (translations[tagId] != null) {
    if (String.locale === 'en') {
      return translations[tagId].en;
    } else {
      return translations[tagId].el;
    }
  }
};

function localizeHTMLTag(translations, tagId) {
  let elementId = tagId.id;
  if (tagId.id.indexOf('.') > 0) {
    elementId = tagId.id.substring(0, tagId.id.indexOf('.'));
  }
  let tag = document.getElementById(elementId);
  if (tag !== null) {
    const localeHtmlTag = localize(translations, elementId);
    if (localeHtmlTag != null) {
      tag.innerHTML = localeHtmlTag;
    }
  }
}

function getParameterValue() {
  let lang = localStorage.getItem('lang');
  if (lang != null)
    String.locale = lang;
  else
    String.locale = "en";
}

function setLanguage(language) {
  localStorage.setItem('lang', language);
  String.locale = language;
  updateTags();
}

// mobile collapse menu button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
    hover: true
  });
});
