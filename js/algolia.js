---
---

// [ref] https://community.algolia.com/jekyll-algolia/blog.html

const search = instantsearch({
    appId: '{{ site.algolia.application_id }}',
    indexName: '{{ site.algolia.index_name }}',
    apiKey: '{{ site.algolia.search_only_api_key }}'
});

var search_hits_element = document.getElementById("search-hits");
var isHitsResultOpen = false;

const hitTemplate = function (hit) {
    if (!hit._highlightResult.content.matchedWords.length) {
        if (hit.__hitIndex != 0)
            return
        if (!isHitsResultOpen)
            search_hits_element.className = "";
        else {
            search_hits_element.className = "hits-result close";
            isHitsResultOpen = false;
        }
        return
    }

    search_hits_element.className = "hits-result open";
    isHitsResultOpen = true;

    let url = `{{ site.baseurl }}${hit.url}`;
    if (typeof hit.anchor != 'undefined')
        url += `#${hit.anchor}`;

    const title = hit._highlightResult.title.value;

    let breadcrumbs = '';
    if (hit._highlightResult.headings) {
        breadcrumbs = hit._highlightResult.headings.map(match => {
            return `<span class="item-breadcrumb">${match.value}</span>`
        }).join(' > ')
    }

    const content = hit._snippetResult.content.value;

    return `
      <div class="result-item">
      <a href=${url}></a>
        <div class="item-title">${title}</div>
        ${breadcrumbs}
        <div class="item-snippet">${content}</div>
      </div>
    `;
}

const notHitTemplate = function (hit) {
    return `<div class="no-hit-result">No results for "${hit.query}" in docs</div>`;
}

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-searchbar',
        placeholder: 'Search...',
        autofocus: false,
        poweredBy: true
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#search-hits',
        escapeHTML: true,
        templates: {
            empty: notHitTemplate,
            item: hitTemplate
        }
    })
);

search.start();
